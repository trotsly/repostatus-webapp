# API

We also provide an endpoint to get the status of your repo, just in case you feel like creating something fun!

## Endpoint

### Request

In order to get the status of your repo, the following endpoint can be used.

`https://apis.deepjyoti30.dev/repostatus/status`

Above repo accepts the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| repo | string | **Required** The name of the repo in the `username/reponame` format |
| token | string | Token to access the passed repo. This is useful if the repo is private. The token should be passed in the `Authorization` header. |


### Response

The endpoint will return the following response schema in JSON.

```
{
  "issue": {
    "data": {
      "char": 0,
      "word": 0,
      "sentence": 0
    },
    "polarity": 0,
    "emotion": {
      "text": "string",
      "color": "string",
      "color_name": "string"
    }
  },
  "pull": {
    "data": {
      "char": 0,
      "word": 0,
      "sentence": 0
    },
    "polarity": 0,
    "emotion": {
      "text": "string",
      "color": "string",
      "color_name": "string"
    }
  },
  "commit": {
    "data": {
      "char": 0,
      "word": 0,
      "sentence": 0
    },
    "polarity": 0,
    "emotion": {
      "text": "string",
      "color": "string",
      "color_name": "string"
    }
  },
  "total": {
    "data": {
      "char": 0,
      "word": 0,
      "sentence": 0
    },
    "polarity": 0,
    "emotion": {
      "text": "string",
      "color": "string",
      "color_name": "string"
    }
  }
}
```

## Usage

### Public repo

If your repo is public, it will be pretty simple to get the status of your repo. You can just send a `GET` request in the following way.

```
curl -X GET \
    https://apis.deepjyoti30.dev/repostatus/status?repo=deepjyoti30%2Fdots
```

### Private repo

If your repo is private, we will not be able to access it right away. Thus, you need to provide us an access token. This can be a personal access token or an OAuth token.

Once you have the token, you can pass it in the header in the as `Authorization: token <token>`.

Passing the above in a curl request would be in the following way

```
curl -X GET -H "Authorization: token <token> \
    https://apis.deepjyoti30.dev/repostatus/status?repo=deepjyoti30%2Fdots
```

>NOTE: Even if you pass the token while making the request for a public repo, it will have no effect.
