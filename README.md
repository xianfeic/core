# TGIC-core

### 部署教程

创建非ROOT用户
~~~
adduser tgic
usermod -a -G sudo tgic
~~~
使用tgic用户登录

~~~
bash <(curl -s https://raw.githubusercontent.com/xianfeic/core/chore/bridgechain-changes/install.sh)
~~~

最近raw.githubusercontent.com链接不稳定，若链接不上可以使用如下命令
~~~
sudo vim /etc/hosts
~~~
增加在最后一行 :wq保存
~~~
199.232.4.133 raw.githubusercontent.com
~~~

安装结束后弹出的对话框选择devnet
然后Y配置数据库

~~~
Would you like to configure the database? [y/N]: y
Enter the database username: tgicdb
Enter the database password: tgic123456
Enter the database name: tgichaindb
database username: tgicdb
database password: tgic123456
database name: tgichaindb
Proceed? [y/N]: y

~~~

### 启动中继点

~~~
tgichain relay:start
~~~

### 停止中继点

~~~
tgichain relay:stop
~~~

### 重启中继节点


~~~
tgichain relay:restart
~~~


### 查看日志

~~~
pm2 list

pm2 log  

tgichain relay:log
~~~

# 常见问题：

若安装出现错误  尝试执行

~~~
git config --global http.postBuffer 524288000
~~~

然后重新执行bash 命令

若出现无法同步，请打开安全组4102,4103,4104端口
