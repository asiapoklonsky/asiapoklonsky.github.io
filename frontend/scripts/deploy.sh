#!/usr/bin/env bash
GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -e 'process.stdout.write(require("./package.json").repository)')}

./fix_github_assets_prefix.sh
cd out && \
echo "asiapoklonsky.com" > CNAME && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis"
git commit -m "Deploy to GitHub Pages" && \
git push --force "${GIT_DEPLOY_REPO}" master
