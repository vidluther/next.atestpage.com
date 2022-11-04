---
title: "How to get back into an EC2 instance, if you lost the original SSH key."
tags:
    - aws
    - ec2
    - ssh
date: '2022-10-25'
---

If you ever need to get back into an EC2 instance, for which you can't find the private key, I found the following command very helpful. In order for this to work, you need to have the aws cli working on your instance, so this is assuming you have the proper authority to perform such an action.

```bash
aws ec2-instance-connect send-ssh-public-key \
--instance-id i-InstanceId \
--instance-os-user ec2-user (usually ubuntu?) \
--availability-zone zone \
--ssh-public-key file:///Local/path/to/your/publickey.pub

```

ssh into the machine
```
ssh ec2-user@ip.address.of.ec2instance -i ~/.ssh/id_rsa
```

This is definitely a hack, and should only be used in an emergency, ideally you can find the right key, and the right individual who is supposed to
have access and has the right ssh key.