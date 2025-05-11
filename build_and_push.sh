#!/bin/bash

# 定义镜像名称和 Registry 地址
IMAGE_NAME="deer-flow"
REGISTRY_URL="registry.cn-hongkong.aliyuncs.com/weijohn/deerflow"

# 获取镜像版本号，如果未提供则使用 latest
IMAGE_VERSION=${1:-latest}

# 构建 Docker 镜像
echo "Building Docker image..."
docker build -t ${IMAGE_NAME} .

# 检查构建是否成功
if [ $? -ne 0 ]; then
  echo "Docker build failed!"
  exit 1
fi

# 获取构建的镜像 ID
IMAGE_ID=$(docker images -q ${IMAGE_NAME} | head -n 1)

# 为镜像打标签
echo "Tagging Docker image..."
docker tag ${IMAGE_ID} ${REGISTRY_URL}:${IMAGE_VERSION}

# 检查打标签是否成功
if [ $? -ne 0 ]; then
  echo "Docker tag failed!"
  exit 1
fi

# 推送镜像到 Registry
echo "Pushing Docker image to ${REGISTRY_URL}:${IMAGE_VERSION}..."
docker push ${REGISTRY_URL}:${IMAGE_VERSION}

# 检查推送是否成功
if [ $? -ne 0 ]; then
  echo "Docker push failed!"
  exit 1
fi

echo "Docker image ${REGISTRY_URL}:${IMAGE_VERSION} built, tagged, and pushed successfully!"