# Travel Blog

## Server

It uses the file at `api/db.json` as the base for its responses.
For more information, check [`json-server`](https://github.com/typicode/json-server) docs.

## Running

### With docker

#### Dependencies

- docker 20.10.17+
- docker-compose

#### For Windows

Please make sure docker is running, you must see it in color green in docker desktop.

- You might face some issues getting `docker` to run, please make sure you have either the `WSL2 backend` or `Hyper-V backend` working, you can follow instructions [here](https://docs.docker.com/desktop/install/windows-install/#system-requirements).
- You might face some issues getting `docker-compose` to run, you can try to install `python` and then use `pip` to install `docker-compose`.
  > pip install docker-compose

#### Instructions

Ensure that you have the dependencies installed.

From the project's root folder, run the app with:

```bash
docker compose -f docker-compose.yml up --build
```

Any change done in the code will be automatically reflected on the running app.

### Without docker

#### Dependencies

- yarn or npm

From the project's root folder. First start the server:

```bash
cd api
yarn install # or equivalently: npm install
yarn server # npm run server
```

Then, from the project's root folder, run the app with:

```bash
cd ui
yarn install # or equivalently: npm install
yarn start # npm start
```

### Accessing the app

Access the app in `http://localhost:3000`

And the server resources are available at: `http://localhost:8080/`. Check [Server section](#Server).
