Used Terraform module:
https://registry.terraform.io/modules/cloudposse/cloudfront-s3-cdn/aws/latest

How to set it up:
- Put in AWS Creds in Github Settings
- Apply Terraform
- Manually adjust S3 bucket to Website (SKIP NEXT TIME?)
- Manually change Error-Handling to index.html (in order to allow routing) (SKIP NEXT TIME)
- Manually add these lines to the permission (SKIP NEXT TIME)
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::wattlink-test-portal-origin/*"
            }
        ]
    }
- Manually 3 -> Berechtigungen -> öffentlichen Zugriff durchgängig erlauben (FEHLGESCHLAGEN, SKIP NEXT TIME)
- Manually Cloudfront -> Custom Error Code -> von (404) auf /index.html (200)