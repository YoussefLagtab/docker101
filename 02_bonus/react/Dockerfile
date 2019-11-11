FROM ubuntu

RUN apt update
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN apt install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ rc main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install yarn -y
RUN yarn global add create-react-app
CMD ["bash"]
