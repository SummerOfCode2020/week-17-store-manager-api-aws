# Node.js and Express:
### Building RESTful APIs


## Requirements
Identify your MONGO_URL url used previously. Go to the [MongoDB Website](https://www.mongodb.com/) to get a FREE shared mongo db if needed.

We will configure the mongo db url on your preferred server environment (heroku vs aws) as well as in our local dev environment.


## Environments
- [Development](http://localhost:8080/)
- [User Acceptance Test](https://cherry-q.herokuapp.com/)
- [Production]()

### Env. Variables List
- MONGO_URL=
- MONGO_DB_NAME=
- TOKEN_KEY=

## Deployment
See documentation at `./deployment-instructions`


### AWS
- understand changes required for production deployment to aws
- deploy your updated repository to aws
- add your mongo db url as an environment variable on aws


### Heroku
- understand heroku deployment
- install the heroku cli
- login to heroku from the cli
- configure environment variables on heroku


## Overview
This readme outlines all of the changes included in this repository that allow aws deployment.
After an overview, you will make changes to your week 10 repository and deploy it to your prefered cloud platform.


## AWS and Heroku Deployment
New this week is AWS and Heroku deployment and the changes that were made to support the deployment process.
Below we list out changes required from the original development-only version we previously built.


### package.json
- Changed the "start" script to use "node" in place of "nodemon". Nodemon is for development only.
- Added a "dev" script to support using nodemon in development.
- Added a "zip-for-aws" script to zip content for deployment to aws.
- Installed 
    - `env-cmd` allows us to have a `.env` file in development to configure our MONGO db url safely where the setting is not shared in git.
    - `archiver` supports a script to run to generate the `zip` file that aws requires for the aws web console upload.


### index.js
- Updated "port" settings to allow the production server to set the port value.
- Added configuration check for MONGO_URL environment variable and start DB only when configured.


### AWS and Heroku
See AWS.md and HEROKU.md


## Previously in the repo
We built this repo in week 10 and then updated it for week 12 as an introduction to connecting an express node app to a mongo database.

This app was configured originally only for development and required additional work this week for production readiness.

Previous versions:

- Week 10: <https://github.com/SummerOfCode2020/week-10-store-manager-api>
- Week 12: <https://github.com/SummerOfCode2020/week-12-store-manager-api>
