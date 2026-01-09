# Railway Deployment Instructions

## Quick Fix for "Not Found" Error

The issue is that Railway is using port 9000 (PHP-FPM) instead of port 80 (Nginx web server).

## Steps to Fix:

### 1. Update Domain Port in Railway

1. Go to Railway → your project → Networking → Custom Domain
2. Click on your domain `beliavska.com`
3. Change the port from `9000` to `80`
4. Or delete and re-add the domain with port `80`

### 2. Set Environment Variable (Optional)

In Railway → Variables, add:
```
PORT=80
```

### 3. Redeploy

After updating the Dockerfile, Railway should automatically redeploy. If not:
1. Railway → Deployments
2. Click "Redeploy" or push new changes to GitHub

## What Changed:

- ✅ New Dockerfile that runs both Nginx (port 80) and PHP-FPM together
- ✅ Uses Supervisor to manage both services
- ✅ Automatically installs dependencies and builds frontend on startup
- ✅ Configured for Railway's single-container deployment

## After Deployment:

1. Check Railway → Logs for any errors
2. Verify domain is using port 80
3. Wait 2-5 minutes for deployment to complete
4. Visit https://beliavska.com

## If Still Not Working:

1. Check Railway → Metrics → Logs for errors
2. Verify all environment variables are set correctly
3. Check that MySQL database is connected
4. Ensure `APP_KEY` is set in Railway Variables

