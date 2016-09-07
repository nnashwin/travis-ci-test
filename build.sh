#! /bin/bash

# creating shippable.yml
echo "# language setting" > shippable.yml
echo "language: node_js" >> shippable.yml
echo "" >> shippable.yml

echo "build:" >> shippable.yml
echo "  pre_ci_boot:" >> shippable.yml
echo "    image_name: drydock/u14rub" >> shippable.yml
echo "    image_tag: prod" >> shippable.yml
echo "    pull: true" >> shippable.yml
echo "    options: --privileged=true" >> shippable.yml

echo "# Version number" >> shippable.yml
echo "node_js:" >> shippable.yml
echo " - "4.2.3"" >> shippable.yml

echo "# Path to output test report" >> shippable.yml
echo "env:" >> shippable.yml
echo " - XUNIT_FILE=shippable/testresults/result.xml" >> shippable.yml
echo "" >> shippable.yml

echo "install:" >> shippable.yml
echo " - docker info" >> shippable.yml
echo " - node --version" >> shippable.yml
echo " - npm config set registry http://registry.npmjs.org/" >> shippable.yml
echo " - docker run -d -p 127.1.1.1:3002:3002 --name apiServer tetsuoharano/node-web-app" >> shippable.yml
echo "" >> shippable.yml

echo "# Create directories for test and coverage reports" >> shippable.yml
echo "before_script:" >> shippable.yml
echo " - mkdir -p shippable/testresults" >> shippable.yml
echo " - mkdir -p shippable/codecoverage" >> shippable.yml
echo " - npm install -g grunt-cli grunt" >> shippable.yml
echo "" >> shippable.yml

echo "script:" >> shippable.yml
echo " - docker logs apiServer" >> shippable.yml
echo " - docker port apiServer" >> shippable.yml
echo " - docker run -d -p 127.0.0.1:3004:3002 --name apiServer2 tetsuoharano/node-web-app" >> shippable.yml
echo " - docker ps -l" >> shippable.yml
echo " - curl 127.1.1.1:3002" >> shippable.yml


cp shippable.yml test.yml

git add shippable.yml
git commit -am 'building master'

git push
