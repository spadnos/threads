# Threads

This is for testing and developing thread/comment components. Threads would normally be attached to some other
object, such as a photo, a blog post, etc.

## Definitions

### Comment

A Comment is pretty much what you would expect. Comments always belong to a thread.

### Thread

A Thread is a collection of comments. A thread is not intended to be used by itself.

## Possible enhancements

There are a number of features I could add, but I don't plan on doing that until I find
some use for the features.

1. Allow replies to comments. Replies would probably a thread i.e. each comment can have a list
   of replies. This could potentially go arbitrarily deep with replies to replies to replies.
1. Like buttons. But I can't really think of a use case.

## Using the Tempalate

After cloning this repo you will need to do several things to get things running:

### npm install

### Create .env.local file

This file should be at the top-level. It should contain:

I'm not sure how to share this info with collaborators.
