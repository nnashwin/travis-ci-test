FROM debian

#replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        ruby-full \
        rubygems \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        rsync \
        software-properties-common \
        wget \
    && rm -rf /var/lib/apt/lists/*

RUN gem install sass \
        compass

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 4.2.3

WORKDIR /home/web-ocean-v2

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.6/install.sh | bash \
     && source $NVM_DIR/nvm.sh \
     && nvm install $NODE_VERSION \
     && nvm alias default $NODE_VERSION \
     && nvm use default \
     && npm install \
     && npm install kafka-node \
     && npm install -g forever sails grunt-cli

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      /usr/local/nvm/versions/node/v4.2.3/bin:$PATH
ENV NODE_ENV  dev    

COPY . /home/web-snapask-main

CMD ["/home/web-snapask-main/bootstart.sh"]