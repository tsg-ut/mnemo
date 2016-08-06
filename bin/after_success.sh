#!/bin/bash

# Exit on error
set -ev

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ] || [ "$TRAVIS_NODE_VERSION" != "node" ] || [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
	exit 0
fi

git checkout f2b3222e3e930b33c5618b26effcf4be451841ed .gitignore
git add --all
git commit -m "Update build"
git push "https://${GH_TOKEN}@github.com/tsg-ut/mnemo.git" gh-pages:gh-pages --follow-tags > /dev/null 2>&1
