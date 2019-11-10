FROM ubuntu
RUN apt update
RUN	DEBIAN_FRONTEND=noninteractive apt install vim curl tzdata apt-utils openssl -y
RUN ln -fs /usr/share/zoneinfo/Africa/Casablanca /etc/localtime
RUN	dpkg-reconfigure -f noninteractive tzdata
RUN	curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
RUN	apt install gitlab-ce -y
RUN	mkdir -p /etc/gitlab/ssl
RUN chmod 700 /etc/gitlab/ssl
RUN	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=MR" -keyout /etc/gitlab/ssl/gitlab.key -out /etc/gitlab/ssl/gitlab.crt
RUN	echo "external_url 'https://192.168.99.100'" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
RUN	echo "registry_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['ssl_certificate'] = \"/etc/gitlab/ssl/gitlab.crt\"" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/gitlab.key\"" >> /etc/gitlab/gitlab.rb
RUN echo "Port 2222" >> /etc/ssh/sshd_config
RUN echo "Port 2222" >> /etc/ssh/ssh_config
RUN echo "gitlab_rails['gitlab_shell_ssh_port'] = 2222" >> /etc/gitlab/gitlab.rb
ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && service ssh restart && gitlab-ctl reconfigure && gitlab-ctl tail
