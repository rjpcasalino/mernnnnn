# docker run --rm  -v ./my-next-app:/root/my-next-app -p [hostPort]:3000 [name]
FROM rockylinux:9-minimal

ENV PATH="$PATH:/root/.nvm/versions/node/v22.13.0/bin/"
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app
COPY package*.json ./

RUN <<EOF
microdnf install -y findutils tar vim
touch /root/.bashrc; 
curl -o installnodejs.sh https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh;
bash ./installnodejs.sh;
source /root/.bashrc;
nvm install 22.13.0;
npm i
EOF

EXPOSE 3000

CMD [ "node", "/app/node_modules/next/dist/bin/next", "dev" ]
