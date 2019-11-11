FROM ubuntu

RUN apt update
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN apt install -y nodejs
RUN npm i -g create-react-app
CMD ["bash"]
