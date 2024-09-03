# NextJS Template App

Almost every app I want needs a few common things:

- Authentication
- A DB

This template has next-auth setup and some sample pages. It also has prisma as an ORM
and zod for validation.

## Using the Tempalate

After cloning this repo you will need to do several things to get things running:

### npm install

### Create .env file

This file should be at the top-level. It should contain:

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="next-auth secret"

GITHUB_ID="github-id"
GITHUB_SECRET="github-secret"

You will need to generate your own next-auth secret. This can be done using:
