#!/bin/bash

# Exit on error
set -ev

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ] || [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
	exit 0
fi

git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch
git config user.name "Travis CI"
git config user.email "info@tsg.ne.jp"
git branch gh-pages origin/gh-pages
git symbolic-ref HEAD refs/heads/gh-pages
git checkout f78ce921b51f5d16e778fb266fe7dea0222fa505 .gitignore
git add --all
git commit -m "Update build - ${TRAVIS_COMMIT}"
git push "https://${GH_TOKEN}@github.com/tsg-ut/mnemo.git" gh-pages:gh-pages --follow-tags > /dev/null 2>&1
