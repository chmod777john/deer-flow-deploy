// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { GithubFilled } from "@ant-design/icons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { AuroraText } from "~/components/magicui/aurora-text";
import { FlickeringGrid } from "~/components/magicui/flickering-grid";
import { Button } from "~/components/ui/button";
import { env } from "~/env";

export function Jumbotron() {
  return (
    <section className="flex h-[95vh] w-full flex-col items-center justify-center pb-15">
      <FlickeringGrid
        id="deer-hero-bg"
        className={`absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]`}
        squareSize={4}
        gridGap={4}
        color="#60A5FA"
        maxOpacity={0.133}
        flickerChance={0.1}
      />
      <FlickeringGrid
        id="deer-hero"
        className="absolute inset-0 z-0 translate-y-[2vh] mask-[url(/images/deer-hero.svg)] mask-size-[100vw] mask-center mask-no-repeat md:mask-size-[72vh]"
        squareSize={3}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.64}
        flickerChance={0.12}
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Deep Research{" "}
          </span>
          <AuroraText>at Your Fingertips</AuroraText>
        </h1>
        <p className="max-w-4xl p-2 text-center text-sm opacity-85 md:text-2xl">
        官方的 DeerFlow 没有提供试用，只能从代码运行部署。大部分人没有这个能力。我认为这是个好机会，我来部署一个网站让大众使用，收获一批流量。
        您在网站上试用时，耗费的是我的 API key, 初衷是希望大伙儿都能体验一下。但我的腰包也是有限的，望看官不要过分薅羊毛或者 DDoS ~
        如果你也想部署，我写了一篇教程教你如何 Docker 镜像化部署到阿里云上面。
        如果觉得我这个行动有意思的话，请加我微信号 drinking-soda 我们一起交流交流
        The official DeerFlow does not provide a trial; it can only be deployed by running the code. Most people do not have this capability. I think this is a good opportunity for me to deploy a website for public use and gain some traffic.
        When you try it on the website, you are using my API key. The original intention was to let everyone experience it. However, my budget is also limited, so I hope you don&apos;t overuse it or DDoS it~
        If you also want to deploy it, I have written a tutorial on how to deploy it to Alibaba Cloud using a Docker image.
        If you find this initiative interesting, please add my WeChat ID drinking-soda and let&apos;s communicate.
        </p>
        <div className="flex gap-6 group relative">
          <Button className="hidden text-lg md:flex md:w-42" size="lg" asChild>
            <Link
              target={
                env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY ? "_blank" : undefined
              }
              href={
                env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY
                  ? "https://github.com/bytedance/deer-flow"
                  : "/chat.html"
              }
            >
              Free Use <ChevronRight />
            </Link>
          </Button>
          {!env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY && (
            <>
              <Button
                className="w-42 text-lg"
                size="lg"
                variant="outline"
                asChild
              >
                <Link
                  href="https://zhuanlan.zhihu.com/p/1905103485109798723"
                  target="_blank"
                >
                  部署教程-zh
                </Link>
              </Button>
              <Button
                className="w-42 text-lg"
                size="lg"
                variant="outline"
                asChild
              >
                <Link
                  href="https://github.com/chmod777john/deer-flow-deploy/"
                  target="_blank"
                >
                  Tutorial-En
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 flex text-xs opacity-50">
        <p>* DEER stands for Deep Exploration and Efficient Research.</p>
      </div>
    </section>
  );
}
