# Deploy to Heroku

Be sure you have the `heroku` cli installed.

- Mac `brew tap heroku/brew && brew install heroku`

- Use installer <https://devcenter.heroku.com/articles/heroku-cli#download-and-install>

## Heroku Login

`heroku login` is required to authenticate your machine to connect to your heroku account.

## Heroku Commands

Run a local heroku server using your code.

`heroku local web`

## Deploy to Heroku as Public Web App

First observer what your git remotes are.

`git remote -v`

Then connect your repo with heroku using

`heroku create`

Observer that you now have a new remote after executing `heroku create`

`git remote -v`

Amazing!

Push to the remote heroku

`git push heroku`

Open the remotely hosted app in your browser.

`heroku open`

Amazing! But we have one more command to run to configure the environment variable for MONGO.

First confirm that the environment variable is not set:

`heroku config:get MONGO_URL`

Our mongo url which we have configured in the `.env` file will be the same url we use.

To set the value on the server while keeping the setting private we will use the `heroku config` command.

Note that the url value on the right side of this assignment must be enclosed in quotes.

If you do not have access to your own mongo db url, for now you can use the shared mongo url that is included here for demonstration purposes only.

`heroku config:set MONGO_URL='mongodb://mlab2020:abc123def!@ds031617.mlab.com:31617/learningmongo'`

Heroku will restart your web server.

In your browser, refresh the app web page or run the command to open the heroku-host web url for your rep.

`heroku open`

## Connect to Watch the Log file from the remote Heroku Server

`heroku logs --tail`

## In Case of Issues

Be sure there is a process on heroku setup to run your server by running this command:

`heroku ps:scale web=1`
