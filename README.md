Deerflow 不提供试用，得自己部署并且配 API 。

绝大部分人没有能力部署，无法试用。

**此时谁先部署到公网，谁就能赢得流量。**

我部署好了，https://deerflow.top

但我没有渠道推广。 （有技术，没流量的感觉太惨了）

所以我决定把这把铲子卖给你们，我教会你如何部署。 我不需要金钱回报，如果你成功部署了的话，可以加我微信号 drinking-soda ，我们一起交流。 多一个朋友，这就是我要的报酬。

## 部署到公网

大致思路就是，先在本地把整个服务打包成一个 docker 容器镜像，然后 push 到阿里云的 ACR 镜像中心。 然后可以直接使用这个镜像来创建函数计算服务。

ACR 地区、函数计算地区，均选香港，这样就可以不用备案了，完全合法。

域名直接在阿里云买，买好域名之后，去函数计算的面板，会有个选项让你把函数计算绑定到域名，于是就可以正式开始对公网提供服务了。



### 具体操作

首先要准备好 openrouter 和 tavily 的 key。

`.env` 的 `OPENAI_API_KEY` 和 `OPENROUTER_API_KEY` 和 `conf.yaml` 的 `api_key` 都要填，统一填 openrouter 的 api 就行了。（有点搞笑，用了 openrouter 怎么还要填 OPENAI_API_KEY ，但没办法，代码没写好就是这样的了）

然后用 ACR 创建一个容器镜像仓库

执行 `sh ./build_and_push.sh` 就会构建镜像并且 push 到镜像中心去了

然后创建阿里云函数计算，从自定义镜像创建，端口选 8000 。不会的话可以开客服工单，他们技术客服是实时在线的。

至此，你的服务已经可以被大众访问了。但是此时还不是你自己的域名。

在函数详情页面，会有个选项让你为这个函数配置自定义域名。

域名直接在阿里云买就行了，十来块一个能用一整年。

域名买好了，就该为他配置 https 证书。 建议用 https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client



至此，构建镜像 -> push 到 ACR -> 从ACR创建云函数 -> 弄好https域名 -> 绑定

完事儿!

---

English Version:

Deerflow does not offer a trial; you need to deploy it yourself and configure the API.

Most people are unable to deploy it and thus cannot try it out.

**At this point, whoever deploys to the public network first will gain traffic.**

I have deployed it at https://deerflow.top

But I have no channels for promotion. (It feels terrible to have the technology but no traffic)

So I've decided to sell this shovel to you, and I will teach you how to deploy it. I don't need monetary compensation. If you successfully deploy it, you can add my WeChat ID drinking-soda, and we can communicate. Having one more friend is the reward I seek.

## Deploying to the Public Network

The general idea is to first package the entire service into a docker container image locally, and then push it to Alibaba Cloud's ACR image center. Then you can directly use this image to create a Function Compute service.

For both the ACR region and the Function Compute region, choose Hong Kong. This way, you won't need to file for an ICP license, and it will be completely legal.

Buy the domain name directly on Alibaba Cloud. After purchasing the domain name, go to the Function Compute console, where there will be an option to bind the Function Compute to your domain name, and then you can officially start providing services to the public network.



### Specific Steps

First, you need to prepare the keys for openrouter and tavily.

`OPENAI_API_KEY` and `OPENROUTER_API_KEY` in `.env` and `api_key` in `conf.yaml` all need to be filled. You can uniformly fill in the openrouter API key. (It's a bit funny, why do you still need to fill in `OPENAI_API_KEY` when using openrouter, but there's nothing that can be done, that's how the code is if it's not written well)

Then, use ACR to create a container image repository.

Execute `sh ./build_and_push.sh` to build the image and push it to the image center.

Then create Alibaba Cloud Function Compute, create from a custom image, and select port 8000. If you don't know how, you can open a customer service ticket; their technical support is online in real-time.

At this point, your service can be accessed by the public. However, it is not yet under your own domain name.

On the function details page, there will be an option for you to configure a custom domain name for this function.

You can buy the domain name directly on Alibaba Cloud; it costs about ten yuan and can be used for a whole year.

Once the domain name is purchased, you should configure an HTTPS certificate for it. It is recommended to use https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client



In summary, build the image -> push to ACR -> create a cloud function from ACR -> set up the HTTPS domain name -> bind it.

Done!
