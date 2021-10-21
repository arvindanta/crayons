#!/usr/bin/env bash

tag=v$(node -e "process.stdout.write(require('./lerna.json').version)");

# Update the lock file here
npm i --package-lock-only

# Auto-tag and auto-commit like usual
git commit --all -m ${tag} --no-verify 
git tag -a ${tag} -m ${tag}
git push --tags --no-verify
git push --no-verify