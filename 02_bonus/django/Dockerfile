FROM ubuntu

RUN	apt update
RUN	DEBIAN_FRONTEND=noninteractive apt install python3-django -y
RUN	ln -fs /usr/share/zoneinfo/Africa/Casablanca /etc/localtime
RUN	dpkg-reconfigure -f noninteractive tzdata
CMD ["bash"]
