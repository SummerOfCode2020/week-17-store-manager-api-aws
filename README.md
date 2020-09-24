# Node.js and Express Tutorial: Building and RESTful APIs

## Requirements

Identify your mongo db url used previously. Ask JR for a shared mongo db url if needed.

We will configure the mongo db url on aws as well as in our local environment.

## Objectives

Be able to do the following:

- understand changes required for production deployment to aws

- update your week 10 storefront api for deployment to aws

- deploy your updated repository to aws

- add your mongo db url as an environment variable on aws

## Overview

This readme outlines all of the changes included in this repository that allow aws deployment.

After an overview, you will make changes to your week 10 repository and deploy it to aws.

You will commit your changes to your week 10 repository and create a new PR.

## AWS Deployment

New this week is AWS deployment and the changes that were made to support the deployment process.

Below we list out changes required from the original development-only version we previously built.

### package.json

- Changed the "start" script to use "node" in place of "nodemon". Nodemon is for development only.

- Added a "dev" script to support using nodemon in development.

- Added a "zip-for-aws" script to zip content for deployment to aws.

- Installed `env-cmd` and `archiver` node modules

`env-cmd` allows us to have a `.env` file in development to configure our MONGO db url safely where the setting is not shared in git.

`archiver` supports a script to run to generate the `zip` file that aws requires for the aws web console upload.

### index.js

- Updated "port" settings to allow the production server to set the port value.

- Added configuration check for MONGO_URL environment variable and start DB only when configured.

## Add Environment Variables on AWS for you environment "Configuration"

In the aws web console, navigate to beanstalk environments.

- Click on your environment

- Click "Configuration"

- Under the "Category" column is a row with the value of "Software"

- On the right side of that row is and "Edit" button. Click it to get to the "Modify Software" page.

- On the "Modify Software" page, at the bottom is "Environment properties" where we will add our name/value pair.

- We will use `MONGO_URL` as the name and we will add our mongo url as the value.

## Previously in the repo

We built this repo in week 10 and then updated it for week 12 as an introduction to connecting an express node app to a mongo database.

This app was configured originally only for development and required additional work this week for production readiness.

Previous versions:

- Week 10: <https://github.com/SummerOfCode2020/week-10-store-manager-api>
  
- Week 12: <https://github.com/SummerOfCode2020/week-12-store-manager-api>
