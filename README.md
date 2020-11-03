<div align="center">
<img src=".github/logo_large.png" alt="repostatus logo">
<br>
<br>
<h2><i>Get Happiness status of your repo</i></h2>
<br><br>
<img src="https://apis.deepjyoti30.dev/repostatus/badge?repo=trotsly%2Frepostatus-webapp&style=for-the-badge" alt="Status of repostatus">
</div>

## Run the web app locally

```console
npm i && npm run serve
```

## Environment files

In order to make sure the app runs properly, you'll need to pass an `.env` file.

If you want to run the app on production (`npm run build`), create the file as `.env.production.local`. If you want to run it locally (`npm run serve`), create teh file as `.env.development.local`.

The file should contain the following variables

```
VUE_APP_CLIENT_ID=<github client id>
VUE_APP_JWT_SECRET=<jwt secret>
```