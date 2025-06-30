FROM postgres:15-alpine

# Environment variables for initialization
ENV POSTGRES_DB=3dgsplates
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=root

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432