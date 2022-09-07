# todo-app-be

Served on HTTP port 3003 by default.
Port can be changed by setting PORT environment variable.

### Deployment

You have two choices:

1. Docker container. Build image from Dockerfile and deploy.

2. Manual deployment. Requires node.js 10+ to be installed. Then run commands in project directory.

```
npm ci
npx tsc
npx nodemon
```
