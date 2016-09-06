#! /bin/bash

# creating shippable.yml
echo "# language setting" > shippable.yml
echo "language: node_js" >> shippable.yml
echo "" >> shippable.yml

echo "# Version number" >> shippable.yml
echo "node_js:" >> shippable.yml
echo " - "4.2.3"" >> shippable.yml

echo "# Path to output test report" >> shippable.yml
echo "env:" >> shippable.yml
echo " - XUNIT_FILE=shippable/testresults/result.xml" >> shippable.yml
echo "" >> shippable.yml

echo "install:" >> shippable.yml
echo " - apt-get install -y net-tools" >> shippable.yml
echo " - docker info" >> shippable.yml
echo " - node --version" >> shippable.yml
echo " - npm config set registry http://registry.npmjs.org/" >> shippable.yml
# echo " - docker stop apiServer" >> shippable.yml
# echo " - docker rm apiServer" >> shippable.yml
echo " - docker run -d -p 127.0.0.1:3002:3002 --name apiServer tetsuoharano/node-web-app" >> shippable.yml
echo "" >> shippable.yml

echo "# Create directories for test and coverage reports" >> shippable.yml
echo "before_script:" >> shippable.yml
echo " - mkdir -p shippable/testresults" >> shippable.yml
echo " - mkdir -p shippable/codecoverage" >> shippable.yml
echo " - npm install -g grunt-cli grunt" >> shippable.yml
echo "" >> shippable.yml

echo "script:" >> shippable.yml
echo " - curl 127.0.0.1:3002" >> shippable.yml
echo " - ifconfig docker0" >> shippable.yml
echo " - npm run testall" >> shippable.yml
echo " - docker logs apiServer" >> shippable.yml
echo " - docker port apiServer" >> shippable.yml
echo " - docker-machine ls" >> shippable.yml

cp shippable.yml test.yml

git add shippable.yml
git commit -am 'building master'

git push
