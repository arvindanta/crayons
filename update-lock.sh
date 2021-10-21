#!/usr/bin/env bash

tag=v$(node -e "process.stdout.write(require('./lerna.json').version)");

# Update the lock file here
npm i --package-lock-only

# Auto-tag and auto-commit like usual
git commit --no-verify --all -m ${tag}
git tag -a ${tag} -m ${tag}
git push --tags
git push