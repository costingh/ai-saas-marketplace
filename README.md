# Online Marketplace App

## Overview

Online store for selling digital products (Software applications related to artifficial intelligence). Users can list their own apps or make offers for other listings. It currently does not handle payments.

For authentication, this app uses Clerk, a solution that provides out of the box user management.
The database is a PostgreSQL that runs in a Docker container, by running a local script. The NextJS app uses Prisma ORM to communicate with the PostgreSQL database.

## How to Run

First, run ``` ./run-docker.sh ``` to start the Docker container for the database.

The, set up an account on Clerk.com, create a new project and copy the API keys. Follow the .env.example file to construct a .env file.

To run the NextJS app, run the following:

### with npm

1. `npm i`
2. `npx prisma db push`
3. `npm run dev`

### with pnpm

1. `pnpm i`
2. `npx prisma db push`
3. `pnpm run dev`

This will migrate the changes to the database and start the NextJS server on http://localhost:3000.
