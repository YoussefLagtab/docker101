#!/bin/bash

apt update >> ~/logs
DEBIAN_FRONTEND=noninteractive apt install vim curl tzdata -y >> ~/logs
ln -fs /usr/share/zoneinfo/Africa/Casablanca /etc/localtime >> ~/logs
dpkg-reconfigure -f noninteractive tzdata >> ~/logs
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash >> ~/logs
apt install gitlab-ce -y >> ~/logs
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=MR" -keyout /etc/gitlab/ssl/gitlab.example.com.key -out /etc/gitlab/ssl/gitlab.example.com.crt >> ~/logs
echo "Port 2222" >> /etc/ssh/sshd_config
echo "Port 2222" >> /etc/ssh/ssh_config
echo "external_url 'https://0.0.0.0'" >> /etc/gitlab/gitlab.rb
echo "nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "registry_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "mattermost_nginx['redirect_http_to_https'] = true" >> /etc/gitlab/gitlab.rb
echo "letsencrypt['enable'] = nil" >> /etc/gitlab/gitlab.rb
echo "gitlab_rails['gitlab_shell_ssh_port'] = 2222" >> /etc/gitlab/gitlab.rb
/opt/gitlab/embedded/bin/runsvdir-start >> ~/run_logs & #no initsystem
gitlab-ctl reconfigure >> ~/logs
gitlab-ctl tail &