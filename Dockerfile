FROM node:7
WORKDIR /app
COPY package.json /app/
COPY . /app
CMD node server.json
EXPOSE 8081