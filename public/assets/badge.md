# Badge

**repostatus** supports badges so that you can embed them in your repo's README etc and flex in front of others.

## Endpoint

Getting the badge is very simple. We have an endpoint that is used to get the badge.

```https://apis.deepjyoti30.dev/repostatus/badge```


Supported params

| Name | Type | Description |
| ---- | ------- | ----------- |
| repo | string | **Required** Name of the repo in the format `username/repo` |
| style | string | `Default: flat` Style that the badge will be returned in. Possible values are *flat, flat-square, for-the-badge, social*. |
