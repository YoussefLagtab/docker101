#!/bin/bash

apt update \
apt install vim curl tzdata -y \
ln -fs /usr/share/zoneinfo/Africa/Casablanca /etc/localtime \
dpkg-reconfigure -f noninteractive tzdata \
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash \
apt install gitlab-ce -y \
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=MR" -keyout /etc/gitlab/ssl/gitlab.example.com.key -out /etc/gitlab/ssl/gitlab.example.com.crt \
echo "Port 2222" > /etc/ssh/sshd_config
echo "Port 2222" > /etc/ssh/ssh_config
echo "external_url 'https://192.168.99.101'" >> /etc/gitlab/gitlab.rb
echo "nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "registry_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "mattermost_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "letsencrypt['enable'] = nil" >> /tc/gitlab/gitlab.rb
echo "gitlab_rails['gitlab_shell_ssh_port'] = 2222" >> /tc/gitlab/gitlab.rb
/opt/gitlab/embedded/bin/runsvdir-start & \ #no initsystem
gitlab-ctl reconfigure \
gitlab-ctl tail &