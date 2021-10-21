#!/usr/bin/env bash

tag=v$(node -e "process.stdout.write(require('./lerna.json').version)");

# Update the lock file here
npm i --package-lock-only

# Auto-tag and auto-commit like usual
HUSKY_SKIP_HOOKS=1 git commit --all -m ${tag} 
git tag -a ${tag} -m ${tag}
HUSKY_SKIP_HOOKS=1  git push --tags
HUSKY_SKIP_HOOKS=1  git push