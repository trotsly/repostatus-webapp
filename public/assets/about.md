## About

So you were curious about how **repostatus** works?

**repostatus** started merely as a assignment project. I, being me, decided I need to make a nice project since I'd be investing a lot of time in this anyway.

I have always been fascinated by the things AI is capable of doing, however, I'm not as much interested in implementing those things as much I like the already built libraries to create something nice.

Hence, I came up with this idea.

### What actually happens

So basically, what we do is, we consider various parts of a repository, like commit messages, comments in issues, pull requests and we filter them out for unwanted data.

Once that's done, we run a sentiment analysis engine on those contents and we pretty much get the *happiness* status of your repository.

### What Else?

We also have a [public API](/api) since we wondered people might like to use it for their projects.

Another exciting thing we provide are the badges. So you must have seen (even used) these badgy things on GitHub repo's. So why not a badge that will show how happy your repo is?