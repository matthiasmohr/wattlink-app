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

resource "aws_budgets_budget" "aws-budget" {
  name = "monthly-budget"
  budget_type = "COST"
  limit_amount = "50"
  limit_unit = "USD"
  time_unit = "MONTHLY"
  time_period_start = "2024-09-27_00:01"
}

module "cdn" {
  source = "cloudposse/cloudfront-s3-cdn/aws"
  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"

  namespace         = "wattlink"
  stage             = "test"
  name              = "app"
  aliases           = ["wattlink-app.hasemato.com"]
  dns_alias_enabled = true
  parent_zone_name  = "hasemato.com"

  deployment_principal_arns = {
    "arn:aws:iam::456004844534:user/lynqtech-macbook-iam" = [""]
  }
}