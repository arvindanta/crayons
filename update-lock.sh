#!/usr/bin/env bash

# Update the lock file here
npm i --package-lock-only

# Auto-commit like usual
HUSKY_SKIP_HOOKS=1 git commit -am "chore(release): cleanup changelogs and update lockfile"
HUSKY_SKIP_HOOKS=1  git push --tags
HUSKY_SKIP_HOOKS=1  git push