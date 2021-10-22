#!/usr/bin/env bash

# Update the lock file here
npm i --package-lock-only

# Auto-tag and auto-commit like usual
HUSKY_SKIP_HOOKS=1 git commit -am "chore: clean changelogs"
HUSKY_SKIP_HOOKS=1  git push --tags
HUSKY_SKIP_HOOKS=1  git push