#!/bin/bash

# Fetch current time
export TZ=":America/New_York"
now=$(date +"%Y-%m-%d %H:%M:%S")

# Build the site
cd /Users/dlunev/projects/integrationagent-site
hugo

# Push the source to Github (source branch)
git add .
git commit -m "Site update: $now"
git push -f origin master

# Push the compiled HTML to Github (master branch)
yes | cp -rf public/* deploy
cd deploy
git add .
git commit -m "Site update: $now"
git push -f origin gh-pages