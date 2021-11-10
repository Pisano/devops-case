FROM debian:buster

USER root

RUN apt update
RUN apt install ruby build-essential ruby2.5-dev postgresql-server-dev-all -y

RUN mkdir -p /api
RUN cd /api

COPY . .
RUN gem install bundler
RUN bundle install
