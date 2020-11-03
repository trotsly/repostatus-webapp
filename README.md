# repostatus-webapp

## Run the web app locally

```console
npm run serve
```

## Environment files

In order to make sure the app runs properly, you'll need to pass an `.env` file.

If you want to run the app on production (`npm run build`), create the file as `.env.production.local`. If you want to run it locally (`npm run serve`), create teh file as `.env.development.local`.

The file should contain the following variables

```
VUE_APP_CLIENT_ID=<github client id>
VUE_APP_JWT_SECRET=<jwt secret>
```