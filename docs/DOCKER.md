### Docker Commands Overview

#### Basic Commands

1. **Build an Image**
   - Build a Docker image from a Dockerfile.
   ```sh
   docker build -t <image-name>:<tag> <path-to-dockerfile>
   ```

2. **Run a Container**
   - Run a container from an image.
   ```sh
   docker run -d -p <host-port>:<container-port> <image-name>:<tag>s
   ```

3. **List Images**
   - List all Docker images on your local machine.
   ```sh
   docker images
   ```

4. **List Containers**
   - List all running containers.
   ```sh
   docker ps
   ```
   - List all containers, including stopped ones.
   ```sh
   docker ps -a
   ```

5. **Stop a Container**
   - Stop a running container.
   ```sh
   docker stop <container-id>
   ```

6. **Remove a Container**
   - Remove a stopped container.
   ```sh
   docker rm <container-id>
   ```

7. **Remove an Image**
   - Remove a Docker image.
   ```sh
   docker rmi <image-id>
   ```

#### Advanced Commands

1. **Execute a Command in a Running Container**
   - Run a command in a running container.
   ```sh
   docker exec -it <container-id> <command>
   ```
   - Open a bash shell in a running container.
   ```sh
   docker exec -it <container-id> /bin/bash
   ```

2. **View Container Logs**
   - View the logs of a container.
   ```sh
   docker logs <container-id>
   ```

3. **Copy Files Between Container and Host**
   - Copy files from the host to the container.
   ```sh
   docker cp <host-path> <container-id>:<container-path>
   ```
   - Copy files from the container to the host.
   ```sh
   docker cp <container-id>:<container-path> <host-path>
   ```

4. **Inspect a Container**
   - Get detailed information about a container.
   ```sh
   docker inspect <container-id>
   ```

5. **Remove Dangling Images**
   - Remove images that are not tagged and are not referenced by any container.
   ```sh
   docker image prune
   ```

#### Docker Compose Commands

1. **Start Services**
   - Start all services defined in a `docker-compose.yml` file.
   ```sh
   docker-compose up
   ```
   - Start services in detached mode (in the background).
   ```sh
   docker-compose up -d
   ```

2. **Stop Services**
   - Stop all running services.
   ```sh
   docker-compose down
   ```

3. **Build Services**
   - Build or rebuild services.
   ```sh
   docker-compose build
   ```

4. **List Services**
   - List all services defined in the `docker-compose.yml` file.
   ```sh
   docker-compose ps
   ```

5. **View Service Logs**
   - View logs for all services.
   ```sh
   docker-compose logs
   ```
   - View logs for a specific service.
   ```sh
   docker-compose logs <service-name>
   ```

6. **Run a Command in a Service Container**
   - Run a one-time command against a service container.
   ```sh
   docker-compose run <service-name> <command>
   ```

### Summary

These commands provide a comprehensive overview of managing Docker images, containers, and services. Here's a quick reference:

- **Image Management**:
  - `docker build`
  - `docker images`
  - `docker rmi`

- **Container Management**:
  - `docker run`
  - `docker ps`
  - `docker stop`
  - `docker rm`
  - `docker exec`
  - `docker logs`
  - `docker cp`
  - `docker inspect`

- **Cleaning Up**:
  - `docker image prune`

- **Docker Compose**:
  - `docker-compose up`
  - `docker-compose down`
  - `docker-compose build`
  - `docker-compose ps`
  - `docker-compose logs`
  - `docker-compose run`

