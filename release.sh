#!/usr/bin/env bash

# Update the lock file here
npm i --package-lock-only

# Auto-commit files and push tags
HUSKY_SKIP_HOOKS=1 git fetch --all
HUSKY_SKIP_HOOKS=1 git add .
HUSKY_SKIP_HOOKS=1 git commit --amend --no-edit
HUSKY_SKIP_HOOKS=1  git push --tags
HUSKY_SKIP_HOOKS=1  git push