terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

# For cloudfront, the acm has to be created in us-east-1 or it will not work
provider "aws" {
  region = "us-east-1"
  alias  = "aws-us-east-1"
}

resource "aws_budgets_budget" "aws-budget" {
  name = "monthly-budget-stromify"
  budget_type = "COST"
  limit_amount = "50"
  limit_unit = "USD"
  time_unit = "MONTHLY"
  time_period_start = "2024-09-27_00:01"
}

# create acm and explicitly set it to us-east-1 provider
module "acm_request_certificate" {
  source = "cloudposse/acm-request-certificate/aws"
  providers = {
    aws = aws.aws-us-east-1
  }

  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"
  domain_name                       = "stromify.de"
  subject_alternative_names         = ["stage.portal.stromify.de"]
  process_domain_validation_options = true
  ttl                               = "300"
}

module "cdn" {
  source = "cloudposse/cloudfront-s3-cdn/aws"
  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"

  namespace         = "stromify"
  stage             = "stage"
  name              = "portal"
  aliases           = ["stage.portal.stromify.de"]
  dns_alias_enabled = true
  parent_zone_name  = "stromify.de"
  custom_error_response = [
    {
      error_code          = 404
      response_code       = 200
      response_page_path  = "/index.html"
      error_caching_min_ttl = 10
    }
  ]



  acm_certificate_arn = module.acm_request_certificate.arn

  depends_on = [module.acm_request_certificate]

  deployment_principal_arns = {
    "arn:aws:iam::456004844534:user/lynqtech-macbook-iam" = [""]
  }
}