#!/bin/sh
npm install -g @angular/cli@7.3.8
npm install
npm run ng build
exec "$@"
