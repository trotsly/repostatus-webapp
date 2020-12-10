# What is an optimum status?

When you saw your score, you might have wondered what does it actually mean and how was it exactly calculated? Well, to know that, you need to know a few more things.

## How is is calculated?

When the sentiment analysis engine is run on your repo, it yields a score. This score varies between -1 and +1. -1 indicates sad and +1 indicates happy. Thus, when the engine is run on your
repo, `repostatus` gets a score out of it. Now, `repostatus` will convert this score to a happiness word.

Following are the mapping of the score with the happiness value:

- less than -0.5: Angry
- more than -0.5 but less than 0: Sad
- more than 0 but less than 0.2: Balanced
- more than 0.2: Happy

The above categorisation was decided upon the optimum score of most repos which was mostly between 0 and 0.2. Thus any repo that has the score between those two numbers are considered **balanced** repos.

The above can be verified in [this](https://github.com/trotsly/repostatus/blob/1911fb607ac733194910f3c8f29e8eaeebcb5d88/repostatus/happiness.py#L103) chunk of code in the source code.

>NOTE: Most repos that are run through repostatus get the Balanced score. (based on personal experience)

Thus, your status, will probably be balanced and you have nothing to worry about. You would have something to worry about though if the status went to *angry* or *sad*.