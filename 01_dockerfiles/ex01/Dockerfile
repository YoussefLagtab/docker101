FROM debian

WORKDIR /opt
RUN apt update
RUN apt install wget lbzip2 -y
RUN wget https://files.teamspeak-services.com/releases/server/3.10.0/teamspeak3-server_linux_amd64-3.10.0.tar.bz2
RUN tar xvf teamspeak3-server_linux_amd64-3.10.0.tar.bz2
RUN rm teamspeak3-server_linux_amd64-3.10.0.tar.bz2
WORKDIR /opt/teamspeak3-server_linux_amd64/
RUN touch .ts3server_license_accepted
ENTRYPOINT ./ts3server_minimal_runscript.sh
