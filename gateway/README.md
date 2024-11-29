# Id Gateway

## Disclaimer

This project contains **private dependencies** and requires an **access token** to successfully install the
dependencies. Please contact [me](https://t.me/bekzodbob) to get an access token.

## Description:

Id Gateway is a gateway for Ams-Service, Sso-Service, Ims-Service

## Tech stack:

- Programming Language: Typescript (5.5.2)
- Framework: NodeJS (22.3), NestJS (10.3.2)
- Database: PostgreSQL (14.5)
- Container: Docker
- Orchestration Engine: Kubernetes

## How to run:

Add an access token to the `.npmrc` file in the root of the project, run the following commands:

```bash
echo "//registry.npmjs.org/:_authToken=<ACCESS_TOKEN>" > .npmrc
```

### Installation

Firstly install pnpm to your system with this [pnpm](https://pnpm.io/installation) link

```bash
pnpm install
```

### Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

### Run the project

```bash
pnpm start
```

## Commands

```bash
# Linting and formatting the project source code
pnpm fmt

# Build the project
pnpm build

# Run the project
pnpm start

# Run the project in debug mode
pnpm start:debug

# Run the project in watch mode
pnpm start:watch
```

## Monitoring:

<b>Logs:</b> They are kept within a centralized logging service - ELK. The logs capture details about the feed
generation process, including:

- Incoming requests and responses which contains info such as date (format: Day name, Month name DD yyyy h:MM:ss am/pm),
  requestId (which is same for request & response), handler, incoming and outgoing data.
- Outgoing & Incoming data of External Service integrated to this service.

<b>Health checks:</b> Service has a health API endpoint that verifies overall health. It performs checks like:

- Return a success code (HTTP 200 OK) if all checks pass, indicating the service is healthy. Otherwise, it should return
  an error code (HTTP 503 Service Temporarily Unavailable) with a descriptive message explaining the issue.
