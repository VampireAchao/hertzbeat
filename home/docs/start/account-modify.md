---
id: account-modify  
title: Modify Account Username Password And Secret        
sidebar_label: Update Account Secret
---

## Update Account

Apache HertzBeat default built-in three user accounts, respectively admin/hertzbeat tom/hertzbeat guest/hertzbeat
If you need add, delete or modify account or password, configure `sureness.yml`. Ignore this step without this demand.
Modify the following **part parameters** in sureness.yml：**[Note⚠️Other default sureness configuration parameters should be retained]**

```yaml

resourceRole:
  - /api/account/auth/refresh===post===[admin,user,guest]
  - /api/apps/**===get===[admin,user,guest]
  - /api/monitor/**===get===[admin,user,guest]
  - /api/monitor/**===post===[admin,user]
  - /api/monitor/**===put===[admin,user]
  - /api/monitor/**===delete==[admin]
  - /api/monitors/**===get===[admin,user,guest]
  - /api/monitors/**===post===[admin,user]
  - /api/monitors/**===put===[admin,user]
  - /api/monitors/**===delete===[admin]
  - /api/alert/**===get===[admin,user,guest]
  - /api/alert/**===post===[admin,user]
  - /api/alert/**===put===[admin,user]
  - /api/alert/**===delete===[admin]
  - /api/alerts/**===get===[admin,user,guest]
  - /api/alerts/**===post===[admin,user]
  - /api/alerts/**===put===[admin,user]
  - /api/alerts/**===delete===[admin]
  - /api/notice/**===get===[admin,user,guest]
  - /api/notice/**===post===[admin,user]
  - /api/notice/**===put===[admin,user]
  - /api/notice/**===delete===[admin]
  - /api/tag/**===get===[admin,user,guest]
  - /api/tag/**===post===[admin,user]
  - /api/tag/**===put===[admin,user]
  - /api/tag/**===delete===[admin]
  - /api/summary/**===get===[admin,user,guest]
  - /api/summary/**===post===[admin,user]
  - /api/summary/**===put===[admin,user]
  - /api/summary/**===delete===[admin]
  - /api/collector/**===get===[admin,user,guest]
  - /api/collector/**===post===[admin,user]
  - /api/collector/**===put===[admin,user]
  - /api/collector/**===delete===[admin]
  - /api/status/page/**===get===[admin,user,guest]
  - /api/status/page/**===post===[admin,user]
  - /api/status/page/**===put===[admin,user]
  - /api/status/page/**===delete===[admin]

# config the resource restful api that need bypass auth protection
# rule: api===method 
# eg: /api/v1/source3===get means /api/v1/source3===get can be access by anyone, no need auth.
excludedResource:
  - /api/alerts/report/**===*
  - /api/account/auth/**===*
  - /api/i18n/**===get
  - /api/apps/hierarchy===get
  - /api/push/**===*
  - /api/status/page/public/**===*
  # web ui resource
  - /===get
  - /dashboard/**===get
  - /monitors/**===get
  - /alert/**===get
  - /account/**===get
  - /setting/**===get
  - /passport/**===get
  - /status/**===get
  - /**/*.html===get
  - /**/*.js===get
  - /**/*.css===get
  - /**/*.ico===get
  - /**/*.ttf===get
  - /**/*.png===get
  - /**/*.gif===get
  - /**/*.jpg===get
  - /**/*.svg===get
  - /**/*.json===get
  - /**/*.woff===get
  - /**/*.eot===get
  # swagger ui resource
  - /swagger-resources/**===get
  - /v2/api-docs===get
  - /v3/api-docs===get
  # h2 database
  - /h2-console/**===*

# account info config
# eg: admin has role [admin,user], password is hertzbeat
# eg: tom has role [user], password is hertzbeat
# eg: lili has role [guest], plain password is lili, salt is 123, salted password is 1A676730B0C7F54654B0E09184448289
account:
  - appId: admin
    credential: hertzbeat
    role: [admin]
  - appId: tom
    credential: hertzbeat
    role: [user]
  - appId: guest
    credential: hertzbeat
    role: [guest]
  - appId: lili
    # credential = MD5(password + salt)
    # plain password: hertzbeat
    # attention: digest authentication does not support salted encrypted password accounts
    credential: 94C6B34E7A199A9F9D4E1F208093B489
    salt: 123
    role: [user]
```

Modify the following **part parameters** in sureness.yml **[Note⚠️Other default sureness configuration parameters should be retained]**：

```yaml

# user account information
# Here is admin tom lili three accounts
# eg: admin has role [admin,user], password is hertzbeat
# eg: tom has role [user], password is hertzbeat
# eg: lili has role [guest], plain password is lili, salt is 123, salted password is 1A676730B0C7F54654B0E09184448289
account:
  - appId: admin
    credential: hertzbeat
    role: [admin]
  - appId: tom
    credential: hertzbeat
    role: [user]
  - appId: guest
    credential: hertzbeat
    role: [guest]
  - appId: lili
    # credential = MD5(password + salt)
    # plain password: hertzbeat
    # attention: digest authentication does not support salted encrypted password accounts
    credential: 94C6B34E7A199A9F9D4E1F208093B489
    salt: 123
    role: [user]
```

## Update Security Secret

> This secret is the key for account security encryption management and needs to be updated to your custom key string of the same length.

Update the `application.yml` file in the `config` directory, modify the `sureness.jwt.secret` parameter to your custom key string of the same length.

```yaml
sureness:
  jwt:
    secret: 'CyaFv0bwq2Eik0jdrKUtsA6bx4sDJeFV643R
             LnfKefTjsIfJLBa2YkhEqEGtcHDTNe4CU6+9
             8tVt4bisXQ13rbN0oxhUZR73M6EByXIO+SV5
             dKhaX0csgOCTlCxq20yhmUea6H6JIpSE2Rwp'
```

**Restart HertzBeat, access <http://ip:1157/> to explore**
