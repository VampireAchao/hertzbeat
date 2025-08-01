---
id: mysql-change  
title: Use MYSQL Replace H2 Database to Store Metadata(Optional)     
sidebar_label: Meta Store MYSQL
---

MYSQL is a reliable relational database. In addition to default built-in H2 database, Apache HertzBeat allow you to use MYSQL to store structured relational data such as monitoring information, alarm information and configuration information.

> If you already have a MySQL environment and the MySQL version meets the requirements, you can skip directly to the database creation step.

### Supported MySQL Versions

Please ensure you are using a supported MySQL version. HertzBeat only supports MySQL 5.7+ or 8 versions. You can check the MySQL version with the following command:

```shell
$ mysql --version
mysql  Ver 8.0.25 for Linux on x86_64 (MySQL Community Server - GPL)
```

### Install MYSQL via Docker

1. Download and install the Docker environment
   For Docker installation, please refer to the [Docker official documentation](https://docs.docker.com/get-docker/).
   After the installation, please verify in the terminal that the Docker version can be printed normally.

   ```shell
   $ docker -v
   Docker version 20.10.12, build e91ed57
   ```

2. Install MYSQl with Docker

   ```shell
   $ docker run -d --name mysql \
    -p 3306:3306 \
   -v /opt/data:/var/lib/mysql \
   -e MYSQL_ROOT_PASSWORD=123456 \
   --restart=always \
   mysql:5.7
   ```

   `-v /opt/data:/var/lib/mysql` is local persistent mount of mysql data directory. `/opt/data` should be replaced with the actual local directory.
   use ```$ docker ps``` to check if the database started successfully

### Database creation

1. Enter MYSQL or use the client to connect MYSQL service
   `mysql -uroot -p123456`
2. Create database named hertzbeat
   `create database hertzbeat default charset utf8mb4 collate utf8mb4_general_ci;`
3. Check if hertzbeat database has been successfully created
   `show databases;`

### Add MYSQL jdbc driver jar

- Download the MYSQL jdbc driver jar package, such as mysql-connector-java-8.0.25.jar. <https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-8.0.25.zip>
- Copy the jar package to the `hertzbeat/ext-lib` directory.

### Modify hertzbeat's configuration file application.yml and switch data source

- Configure HertzBeat's configuration file  
  Modify `hertzbeat/config/application.yml` configuration file  
  Note⚠️The docker container way need to mount application.yml file locally, while you can use installation package way to unzip and modify `hertzbeat/config/application.yml`  
  Replace `spring.database` data source parameters, URL account and password.

  For example:

```yaml
spring:
  datasource:
    driver-class-name: org.h2.Driver
    username: sa
    password: 123456
    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL
    hikari:
      max-lifetime: 120000

  jpa:
    show-sql: false
    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform
    database: h2
    properties:
      eclipselink:
        logging:
          level: SEVERE
```

Specific replacement parameters are as follows and you need to configure account according to the mysql environment:

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
    url: jdbc:mysql://mysql:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true&useSSL=false
    hikari:
      max-lifetime: 120000
  jpa:
    show-sql: false
    database-platform: org.eclipse.persistence.platform.database.MySQLPlatform
    database: mysql
    properties:
      eclipselink:
        logging:
          level: SEVERE
```

- It is recommended to set the host field in the MySQL URL to the public IP address when using Hertzbeat in docker.

> Note: The above applies to the method of downloading and installing the package. For local data source switching, simply complete the [Database creation](./mysql-change#database-creation) and modify the configuration in `hertzbeat-manager/src/main/resources/application.yml`.

**Start HertzBeat  visit <http://ip:1157/> on the browser  You can use HertzBeat monitoring alarm, default account and password are admin/hertzbeat**
