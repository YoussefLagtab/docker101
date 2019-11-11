FROM ubuntu

RUN apt update
RUN apt install wget vim -y
WORKDIR /usr/local
RUN wget https://dl.google.com/go/go1.13.4.linux-amd64.tar.gz
RUN tar xvf go1.13.4.linux-amd64.tar.gz
RUN rm go1.13.4.linux-amd64.tar.gz
WORKDIR /

ENTRYPOINT export PATH=$PATH:/usr/local/go/bin && bash
