FROM ubuntu:18.04
MAINTAINER Radu Simen <radu103@hotmail.com>
RUN ln -fs /usr/share/zoneinfo/Europe/Bucharest /etc/localtime
RUN apt-get update
RUN apt-get install -y nodejs npm
RUN apt-get install -y make gcc g++ python git gyp build-essential
RUN npm install -g npm@latest
RUN node -v
RUN npm -v
RUN npm install -g node-gyp@latest
RUN chmod -R 777 /root
RUN chmod -R 777 /usr/local/lib
RUN npm install -g mosca bunyan
EXPOSE 80
ENTRYPOINT ["mosca", "--http-port", "80", "--http-bundle", "-v"]