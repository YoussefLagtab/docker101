a = [
	{
		"Id": "sha256:0e39d6e67b264fd3c4c110d8c971799941e6f97e799240843ba67f504fce8b88",
		"RepoTags": [
			"gitlab/gitlab-ce:latest"
		],
		"RepoDigests": [
			"gitlab/gitlab-ce@sha256:88f1bcc39aa9917ac4b19022af441b64265d50e1f0c0fa2616d29a2cb82fb41a"
		],
		"Parent": "",
		"Comment": "",
		"Created": "2019-11-04T16:14:23.56023323Z",
		"Container": "cfe973d470af977014f29a7b33cb20e45a1ee8b4c6103fdaa7f3eb081ca528ca",
		"ContainerConfig": {
			"Hostname": "cfe973d470af",
			"Domainname": "",
			"User": "",
			"AttachStdin": false,
			"AttachStdout": false,
			"AttachStderr": false,
			"ExposedPorts": {
				"22/tcp": {},
				"443/tcp": {},
				"80/tcp": {}
			},
			"Tty": false,
			"OpenStdin": false,
			"StdinOnce": false,
			"Env": [
				"PATH=/opt/gitlab/embedded/bin:/opt/gitlab/bin:/assets:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
				"LANG=C.UTF-8",
				"TERM=xterm"
			],
			"Cmd": [
				"/bin/sh",
				"-c",
				"#(nop) ",
				"HEALTHCHECK &{[\"CMD-SHELL\" \"/opt/gitlab/bin/gitlab-healthcheck --fail --max-time 10\"] \"1m0s\" \"30s\" \"0s\" '\\x05'}"
			],
			"Healthcheck": {
				"Test": [
					"CMD-SHELL",
					"/opt/gitlab/bin/gitlab-healthcheck --fail --max-time 10"
				],
				"Interval": 60000000000,
				"Timeout": 30000000000,
				"Retries": 5
			},
			"Image": "sha256:925c4fda934472832a107b2550e3e1c05cef1175df1ee3337c222c9704891fbf",
			"Volumes": {
				"/etc/gitlab": {},
				"/var/log/gitlab": {},
				"/var/opt/gitlab": {}
			},
			"WorkingDir": "",
			"Entrypoint": null,
			"OnBuild": null,
			"Labels": {},
			"Shell": [
				"/bin/sh",
				"-c"
			]
		},
		"DockerVersion": "19.03.0",
		"Author": "GitLab Inc. <support@gitlab.com>",
		"Config": {
			"Hostname": "",
			"Domainname": "",
			"User": "",
			"AttachStdin": false,
			"AttachStdout": false,
			"AttachStderr": false,
			"ExposedPorts": {
				"22/tcp": {},
				"443/tcp": {},
				"80/tcp": {}
			},
			"Tty": false,
			"OpenStdin": false,
			"StdinOnce": false,
			"Env": [
				"PATH=/opt/gitlab/embedded/bin:/opt/gitlab/bin:/assets:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
				"LANG=C.UTF-8",
				"TERM=xterm"
			],
			"Cmd": [
				"/assets/wrapper"
			],
			"Healthcheck": {
				"Test": [
					"CMD-SHELL",
					"/opt/gitlab/bin/gitlab-healthcheck --fail --max-time 10"
				],
				"Interval": 60000000000,
				"Timeout": 30000000000,
				"Retries": 5
			},
			"Image": "sha256:925c4fda934472832a107b2550e3e1c05cef1175df1ee3337c222c9704891fbf",
			"Volumes": {
				"/etc/gitlab": {},
				"/var/log/gitlab": {},
				"/var/opt/gitlab": {}
			},
			"WorkingDir": "",
			"Entrypoint": null,
			"OnBuild": null,
			"Labels": null,
			"Shell": [
				"/bin/sh",
				"-c"
			]
		},
		"Architecture": "amd64",
		"Os": "linux",
		"Size": 1796670398,
		"VirtualSize": 1796670398,
		"GraphDriver": {
			"Data": {
				"LowerDir": "/mnt/sda1/var/lib/docker/overlay2/042d8ab03296c5517ebbe4a1c4d3c30c2041de3919dfbe847b7dbabee773ae66/diff:/mnt/sda1/var/lib/docker/overlay2/ed094d1479ca2f93bb249e5e5dcaa27baf8a14e81df55e5d881c3dc0b53acfdc/diff:/mnt/sda1/var/lib/docker/overlay2/acc8be5de71c3e327ddbcc390565eda98c6d24f1d09c113a37402628b78bf9ce/diff:/mnt/sda1/var/lib/docker/overlay2/55d1bae53f4109c085d381b13f233f1e752ffca19b6c3c27ed874081305ad2a1/diff:/mnt/sda1/var/lib/docker/overlay2/f0e9df7fe6540fbbaebb5cbe2dbcb90d70ef8a7ea7b5f0588b25317573443e16/diff:/mnt/sda1/var/lib/docker/overlay2/610a58c996652abb27c80040f57fdd17d6fbab86cf80022a5591b18764497f67/diff:/mnt/sda1/var/lib/docker/overlay2/7a46ae93e642f1764bdbdd58974d4a8c453f623d0cff4b1c8cce36cd4bb5264d/diff:/mnt/sda1/var/lib/docker/overlay2/b2f87061c706f64994db86a0da00222a8be85c109f0f825179d6436a8e783644/diff:/mnt/sda1/var/lib/docker/overlay2/007fb8c9e518cbe1c46614179589ce7e7de636024b38062397e9fa961a2e0c26/diff",
				"MergedDir": "/mnt/sda1/var/lib/docker/overlay2/f3d8036434a0c5549b022654c981279abe5d780b483a6d2740d0be6707459e6f/merged",
				"UpperDir": "/mnt/sda1/var/lib/docker/overlay2/f3d8036434a0c5549b022654c981279abe5d780b483a6d2740d0be6707459e6f/diff",
				"WorkDir": "/mnt/sda1/var/lib/docker/overlay2/f3d8036434a0c5549b022654c981279abe5d780b483a6d2740d0be6707459e6f/work"
			},
			"Name": "overlay2"
		},
		"RootFS": {
			"Type": "layers",
			"Layers": [
				"sha256:788b17b748c23d38ec62e913e87b084b7e3efda49843b3c0809b1857559b553e",
				"sha256:a5a5f8c62487121247923a4df970f2094725ac2fea8c1347236466c4a3265ae0",
				"sha256:903669ee720750938f08f95f7c8f1022d7fd7c57602af847b316f0b39efbd01c",
				"sha256:bc72fb2e7b7487b3b9f9135437319525feaf1fab6ba61dab7e2e961e5c1dbb8b",
				"sha256:af0b2bef6f5b97c6324befcb984a35a226a72dcd64c5696a40569eb2e3f90d5c",
				"sha256:033343bd60b800c0cc00ced632177f15b3a0205fc8d315c91ad1974f6ba576cd",
				"sha256:97a9e41e0d7ab3946c3f19f82b1025d8d54dafb92d5b53373e28323050cba2ed",
				"sha256:942212f9c3e3540db8530e9404071d3f59f6138f755a20e26e971022fcf23c43",
				"sha256:8e87a3fc2157502dfaff787d3636837491e5be641eb9582ed9695bb062a7398f",
				"sha256:9f64a899112ea0f4d08d7bfac29ecdea473b53ee8fe47647de0ef2aaaca80626"
			]
		},
		"Metadata": {
			"LastTagTime": "0001-01-01T00:00:00Z"
		}
	}
]
