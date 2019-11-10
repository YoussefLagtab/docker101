FROM ruby

ONBUILD RUN apt update && apt install nodejs curl -y
ONBUILD RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
ONBUILD RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
ONBUILD RUN apt update && apt install yarn -y
ONBUILD RUN gem install rails
COPY app/ /opt
WORKDIR /opt/app
ONBUILD RUN yarn
ONBUILD RUN bundle install
