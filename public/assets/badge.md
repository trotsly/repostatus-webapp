# Badge

**repostatus** supports badges so that you can embed them in your repo's README etc and flex in front of others.

## Endpoint

Getting the badge is very simple. We have an endpoint that is used to get the badge.

`https://apis.deepjyoti30.dev/repostatus/badge`


Supported params:

| Name | Type | Description |
| ---- | ------- | ----------- |
| repo | string | **Required** Name of the repo in the format `username/repo` |
| style | string | `Default: flat` Style that the badge will be returned in. Possible values are *flat, flat-square, for-the-badge, social*. |


##### Code Samples

```
curl "https://apis.deepjyoti30.dev/repostatus/badge?repo=deepjyoti30%2Fdots"
```

Above will return the following badge

<img src="http://localhost:5000/badge?repo=deepjyoti30%2Fdots">

If you want to use the `for-the-badge` style, pass it in the following way

```
curl "https://apis.deepjyoti30.dev/repostatus/badge?repo=deepjyoti30%2Fdots&style=for-the-badge"
```

<img src="http://localhost:5000/badge?repo=deepjyoti30%2Fdots&style=for-the-badge">

## Cache

Each badge is cached for 1 day. It is only valid since the status won't be effected in a day itself. This was done in order to improve performance. Considering that the badge would be added in README's, a lot of requests would be made to the same endpoint and thus it is important to cache the response.
