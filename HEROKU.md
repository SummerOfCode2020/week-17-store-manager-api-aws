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

`git push heroku main`

Be sure there is a process on heroku setup to run your server

`heroku ps:scale web=1`

Open the remotely hosted app in your browser.

`heroku open`

Amazing!
