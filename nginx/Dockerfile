FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

EXPOSE 80

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

#ENTRYPOINT [ "/docker-entrypoint.sh" ]
#CMD [ "nginx", "-g", "daemon off;" ]

