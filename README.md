# metalsmith-gh-pages-test

> An example static site built with Metalsmith that can easily be deployed to GH-Pages

## Automatic deployment with Travis

The included `.travis.yml` will have travis automatically build and deploy the latest when it is committed into the master branch on GitHub.

1. You will first need to generate a [Personal Access Token](https://github.com/settings/tokens) that has permission to access your repos.
2. Enable your repo in Travis
3. Add the environment variable `GITHUB_TOKEN` with the value being your personal access token to Travis.

## Manual deployment

1. `npm run build`
2. `npm run deploy`

## Local development

Running `npm start` will build the site and server it up at `http://127.0.0.1:8080`. You can also have your changes automatically build by using `npm run watch`.