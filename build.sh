#! /bin/bash

# creating shippable.yml
echo "# language setting" >> shippable.yml
echo "language: node_js" >> shippable.yml
echo "" >> shippable.yml
echo "build_image: drydock/u12nod:prod" >> shippable.yml

echo "# Version number" >> shippable.yml
echo "node_js:" >> shippable.yml
echo " - "4.2.3"" >> shippable.yml

echo "# Path to output test report" >> shippable.yml
echo "env:" >> shippable.yml
echo " - XUNIT_FILE=shippable/testresults/result.xml" >> shippable.yml
echo "" >> shippable.yml

echo "install:" >> shippable.yml
echo " - source ~/.nvm/nvm.sh && nvm install 4.2.3" >> shippable.yml
echo " - node --version" >> shippable.yml
echo " - npm config set registry http://registry.npmjs.org/" >> shippable.yml
echo " - docker pull tetsuoharano/snapaskoceanapi-newhome:1.0" >> shippable.yml
echo " - docker stop apiServer" >> shippable.yml
echo " - docker rm apiServer" >> shippable.yml
echo " - docker run -d -p 3001:3001 --name apiServer tetsuoharano/snapaskoceanapi-newhome:1.0" >> shippable.yml
echo " - curl 127.0.0.1:3001" >> shippable.yml
echo " - npm install" >> shippable.yml
echo "" >> shippable.yml

echo "# Create directories for test and coverage reports" >> shippable.yml
echo "before_script:" >> shippable.yml
echo " - mkdir -p shippable/testresults" >> shippable.yml
echo " - mkdir -p shippable/codecoverage" >> shippable.yml
echo " - npm install -g grunt-cli grunt" >> shippable.yml
echo "" >> shippable.yml

echo "script:" >> shippable.yml
echo " - npm run testall" >> shippable.yml
echo " - docker logs apiServer" >> shippable.yml
echo " - docker port apiServer" >> shippable.yml
echo " - docker-machine ls" >> shippable.yml

cp shippable.yml test.yml

git add shippable.yml
git commit -am 'building master'

git push

rm -rf shippable.yml

