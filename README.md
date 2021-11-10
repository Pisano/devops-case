# Take Home Assignment

This document is a brief explanation of your take home assignment. Before proceeding further, we’d like to thank you for time and patience during our hiring process.

# Assignment

This is a simple CRUD application. This monorepo contains an `API` and a frontend `APP`. Each directory has a simple `Dockerfile`. Your assignment is;

- Optimizing both Dockerfiles. For example change base images, reorganize steps etc.
- Update `API` Dockerfile to run api.
- `API` serving on port `3000`.
- PostgreSQL and Redis server must be up and configured to run `API`. Otherwise it will throws an error.
- You can use `APP` development server to test connection with `API`.
- `APP` development server serving on port `3000`.
- Update `APP` Dockerfile to build application and serve static files and `index.html` on any web server (nginx, Caddy etc.).
- Create production ready docker-compose stack to run application. All services (api, app, database...) must be in this file.

## API

A Ruby on Rails project depends on Redis and PostgreSQL. It accepts following environment variables;

- `DATABASE_HOST` defauult: `localhost`
- `DATABASE_PORT` default: `5432`
- `DATABASE_USERNAME` default: `postgres`
- `DATABASE_PASSWORD` default: `''`
- `REDIS_URL` has no default value. Connection URL must use `redis` protocol.
- `REDIS_PASSWORD` has no default value.

After all connections established run `rails db:create` to initialize database. Run `rails db:migrate db:seed` to load database schemas.

API Project has no static files. To start application just use `puma` command.

## APP

Simple React frontend for `API` project. It accepts only one environment variable. See `.env` file.

To start development server use `npm start`. Create a production build to the `build` folder use `npm build`. Serve with any web server on port `80`.

## Notes

- Please __DONT FORK THIS REPO__. Just __CLONE__ it.
- We cleaned commit history on purpose.
- Commit files progressively. Single commit history is negative aspect.

## Bonus

- Running API tests on build or deployment. (`rake test` command)
- Creating any CI/CD Pipeline (Github Actions, Gitlab CI, Travis, CircleCI etc.)
- Docker image sizes
