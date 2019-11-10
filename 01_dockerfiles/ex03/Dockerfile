FROM ubuntu
RUN apt update
RUN	apt install vim curl tzdata apt-utils openssl -y
RUN ln -fs /usr/share/zoneinfo/Africa/Casablanca /etc/localtime
RUN	dpkg-reconfigure -f noninteractive tzdata
RUN	curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
RUN	apt install gitlab-ce -y
RUN	mkdir -p /etc/gitlab/ssl
RUN	chmod 700 /etc/gitlab/ssl
RUN	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=MR" -keyout /etc/gitlab/ssl/gitlab.key -out /etc/gitlab/ssl/gitlab.crt
RUN	echo "external_url 'https://192.168.99.101'" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
RUN	echo "registry_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
RUN	echo "mattermost_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
RUN	echo "letsencrypt['enable'] = nil" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['ssl_certificate'] = \"/etc/gitlab/ssl/gitlab.crt\"" >> /etc/gitlab/gitlab.rb
RUN	echo "nginx['ssl_certificate_key'] = \"/etc/gitlab/ssl/gitlab.key\"" >> /etc/gitlab/gitlab.rb
ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && (gitlab-ctl reconfigure)
