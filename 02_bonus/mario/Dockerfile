FROM ubuntu

RUN apt update
RUN apt install git nginx -y
RUN rm -fr /var/www/html
WORKDIR /var/www/
RUN git clone https://github.com/karol-f/FullScreenMario.git html
ENTRYPOINT service nginx restart && bash
