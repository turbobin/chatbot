# ChatGPT Web

在线体验：[https://turbobin.github.io/chatbot](https://turbobin.github.io/chatbot)

## 说明

> **此项目 Fork 自 [Kerwin1202/chatgpt-web](https://github.com/Kerwin1202/chatgpt-web), 原始项目为 [Chanzhaoyu/chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)，此项目在前面的基础上增加了一些定制功能:**

[✓] 用户注册&登录&重置密码

[✓] admin用户设置，用户VIP权限控制

[✓] 用户管理、角色管理

[✓] keys 管理、模型设置管理

[✓] 提示词管理

[✓] 历史会话保存，导出

[✓] 自定义敏感词

[✓] 每个会话独有角色设置

[✓]  More...



此项目使用 github 托管前端，后端部署在腾讯云服务器，域名使用 `<you-username>.github.io`，没错，就是 GitHub Page 功能！此种方式不需要去购买域名，因此也不必花费大量精力去搞域名备案，国内国外都可流畅访问（github 域名应该...不太容易 ban 吧...hhh）



如果你想拥有一个自己专属域名访问 ChatGPT，操作非常简单：

1. fork 此项目
2. 设置一下 Github Page

![cover](https://turbobin.github.io/chatbot/images/github_page.png)

## 界面

![cover](https://turbobin.github.io/chatbot/images/pic_1.png)

![cover](https://turbobin.github.io/chatbot/images/pic_10.png)

![cover](https://turbobin.github.io/chatbot/images/pic_3.png)

权限控制，用户可获取管理员生成的口令增加次数：

### 管理员端

![cover](https://turbobin.github.io/chatbot/images/pic_6.png)

用户管理：

![cover](https://turbobin.github.io/chatbot/images/pic_7.png)

key 管理：

![cover](https://turbobin.github.io/chatbot/images/pic_8.png)

### 用户端

![cover](https://turbobin.github.io/chatbot/images/pic_4.png)

### 提示词管理

管理员可以在提示词管理界面添加/编辑/删除提示词，提示词会同步给所有用户看到，显示的类型为 `System`，用户也可以自主添加自己的提示词，类型为 `User`。

**管理员端设置的提示词不能被用户编辑，也不会完整的显示给用户，此种做法是为了保护提示词的原创性。**

![cover](https://turbobin.github.io/chatbot/images/pic_9.png)



## 微信机器人

企业微信版本接入了 NewBing、ChatGPT3.5、GPT-4 三个机器人，微信中可直接扫描下面二维码添加后使用。

> 若二维码过期可先添加微信加入。

<div align=left>
	<img src="https://turbobin.github.io/chatbot/images/qrcode_258.png" width="300" height="350"/>
</div>
<div align=left>
	<img src="https://turbobin.github.io/chatbot/images/pic_11.jpg" width="350" height="500"/>
    <img src="https://turbobin.github.io/chatbot/images/pic_12.jpg" width="450" height="400"/>
</div>




## 交流

项目功能还在持续迭代开发，如果你对此项目感兴趣，或者需要技术咨询，可微信联系我 `turbobin_`，来源请注明`github`。



## License

MIT © [turbobin](./license)