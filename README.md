# Test Project for YouHodler

This is a microservice-based project built using modern tools and frameworks. It features a gateway service and a standalone service, both orchestrated using Docker Compose. The gateway includes Swagger documentation for easy interaction and testing.

---

## Technology Stack

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Nest.js**: Framework for building efficient and scalable Node.js applications.
- **RabbitMQ**: Message broker for asynchronous communication between services. Easily replaceable with alternatives like NATS, Kafka, and others.
- **Redis**: In-memory data store for caching and lightweight message brokering.

---

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/) installed (usually included with Docker Desktop).

---

## Running the Project

To start the services, simply run the following command in the project directory:

```bash
docker-compose up
