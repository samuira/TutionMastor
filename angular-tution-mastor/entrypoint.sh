#!/bin/sh
npm install
npm install -g @angular/cli
npm audit fix --force
npm run ng build
exec "$@"