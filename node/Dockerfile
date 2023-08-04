FROM node:latest

RUN apt-get update && \
    apt-get install vim -y

#RUN npm install express --save


WORKDIR /usr/src/app

RUN npm install express --save
#RUN npm install mysql --save
RUN npm install sync-mysql

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

#ENTRYPOINT [ "node", "index.js" ]