# Deno URL Shortener

> URL shortener made using Deno

## Getting Started

### With Docker

This solution uses Docker and Docker Compose to run the app and the database.
Make sure you have both installed and running.

```
1. Generate the .env file
$ cp .env.example .env

2. Run the service with Compose
$ docker compose up --build -d

3. Create a new short URL
$ curl -X POST -H "Content-Type: application/json" -d '{"original_url": "https://github.com/brenobaptista"}' http://localhost:8080/urls

4. Get the original URL back
$ curl http://localhost:8080/{hash}

5.1. Stop containers and remove containers and networks created by `docker compose up` (keep volumes and images).
$ docker compose down

5.2. Stop containers and remove containers, networks, images and volumes created by `docker compose up`.
$ docker compose down --rmi all -v
```

### Without Docker

- An easy way to get a Postgres database running is using
  [Railway](https://railway.app/) to provide a free database without signing up.
- Or you can install Postgres locally and create a database.

```
1. Generate the .env file
$ cp .env.example .env

2. Update the .env file
# DATABASE_URL=postgresql://{user}:{password}@{hostname}:{port}/{database-name}

3. Start the API (Deno automatically detects and installs dependencies)
$ deno task start

4. Create a new short URL
$ curl -X POST -H "Content-Type: application/json" -d '{"original_url": "https://github.com/brenobaptista"}' http://localhost:8080/urls

5. Get the original URL back
$ curl http://localhost:8080/{hash}
```

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista)                                                                |

## License

This project is licensed under the [MIT License](/LICENSE)
