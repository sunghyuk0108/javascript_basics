# docker 파일 내부엔 어떤 파일 이미지를 만들건지 어떤것들이 필요한지 명시하는 파일이라고 보면됨.

# 1. 어떤 베이스 이미지를 사용할 건지 명시 
FROM node:16-alpine

# 2. 도커 이미지 안에서 어떤 경로에 실행할 건지 명시해 줘야함.
WORKDIR /app

# 3. 프로젝트 파일들을 복사해 와야함. (도커 파일에서 명령어를 수행할 때 레이어 시스템이 작동하여 제일 빈번하게 작성되는 파일등은 마지막에 작성하는게 좋음)
COPY package.json package-lock.json ./

# 4. RUN npm install 하게되면 package.json(실제 사용하는 버전과) 다운받는 버전의 버전 차이가 생길 수 있으므로 package-lock에 명시된 버전을 그대로 사용하게 끔 RUN npm ci 명령어를 사용하는게 좋음.
RUN npm ci

# 5. 실행부분 카피
COPY index.js .

# 6. 실행할 명령어
ENTRYPOINT [ "node", "index.js" ]




