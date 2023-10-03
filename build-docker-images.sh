#!/bin/bash

# Build the PostgreSQL Docker image
docker build -t postgres-db -f postgres/Dockerfile.postgres ./postgres
