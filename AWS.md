# AWS Deployment

This file describes the process of deploying this repository to AWS.

## Add Environment Variables on AWS for you environment "Configuration"

In the aws web console, navigate to beanstalk environments.

- Click on your environment

- Click "Configuration"

- Under the "Category" column is a row with the value of "Software"

- On the right side of that row is and "Edit" button. Click it to get to the "Modify Software" page.

- On the "Modify Software" page, at the bottom is "Environment properties" where we will add our name/value pair.

- We will use `MONGO_URL` as the name and we will add our mongo url as the value.

## AWS eb cli

Mac `brew update &&  brew install awsebcli && eb --version`

Windows <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-windows.html>
