# Vercel Deployment Audit

## Issue: Git Push Failed to Vercel Deployment

### Potential Causes & Solutions

## 1. Git Remote Configuration

**Check if remote is configured:**
```bash
git remote -v
```

**If no remote exists, add Vercel remote:**
```bash
# Option 1: If you have a GitHub/GitLab repo connected to Vercel
git remote add origin <your-repo-url>
git push -u origin main

# Option 2: If using Vercel CLI
vercel link
```

## 2. Branch Name Mismatch

**Check current branch:**
```bash
git branch
```

**Vercel typically deploys from:**
- `main` branch (default)
- `master` branch (legacy)

**If on wrong branch:**
```bash
git checkout main
# or
git checkout -b main
git push -u origin main
```

## 3. Uncommitted Changes

**Check for uncommitted changes:**
```bash
git status
```

**If there are uncommitted changes:**
```bash
git add -A
git commit -m "Your commit message"
git push
```

## 4. Build Errors

**Test build locally:**
```bash
pnpm build
```

**Common build issues:**
- TypeScript errors
- Missing dependencies
- Environment variables not set
- Import errors

## 5. Vercel Configuration Issues

**Check for Vercel config:**
- `vercel.json` (should exist if custom config needed)
- `.vercel` directory (ignored in .gitignore, but should exist locally)

**If using Vercel CLI:**
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Link project
vercel link

# Deploy
vercel --prod
```

## 6. Environment Variables

**Required environment variables for this project:**
- `NEXT_PUBLIC_BASE_URL` - Your site URL
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Optional, for GA4
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Optional, for Search Console
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Optional, for Maps

**Set in Vercel Dashboard:**
1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add all required variables

## 7. Authentication Issues

**If push fails due to authentication:**
```bash
# Check git credentials
git config --global user.name
git config --global user.email

# For HTTPS, may need to use Personal Access Token
# For SSH, ensure SSH key is added to GitHub/GitLab
```

## 8. Next.js Configuration

**Check `next.config.js` or `next.config.mjs`:**
- Should exist for custom Next.js config
- Check for any build-time errors

## 9. Package Manager Issues

**This project uses `pnpm`:**
```bash
# Ensure pnpm is installed
npm install -g pnpm

# Install dependencies
pnpm install

# Test build
pnpm build
```

**Vercel should auto-detect pnpm, but verify in:**
- Vercel Dashboard → Settings → General → Install Command

## 10. File Size Issues

**Check for large files:**
```bash
git ls-files | xargs ls -la | sort -k5 -rn | head -20
```

**Large files may need:**
- Git LFS
- Or removed from repo

## 11. TypeScript Errors

**Check for TypeScript errors:**
```bash
pnpm exec tsc --noEmit
```

**Common issues:**
- Missing type definitions
- Type mismatches
- Import errors

## 12. Missing Dependencies

**Verify all dependencies are in package.json:**
```bash
pnpm install
pnpm build
```

## Recommended Fix Steps

1. **Verify Git Remote:**
   ```bash
   git remote -v
   # If empty, add your repository
   git remote add origin <your-repo-url>
   ```

2. **Check Branch:**
   ```bash
   git branch
   # Ensure on main or master
   ```

3. **Test Build Locally:**
   ```bash
   pnpm install
   pnpm build
   ```

4. **Commit All Changes:**
   ```bash
   git add -A
   git status
   git commit -m "Fix deployment issues"
   ```

5. **Push to Remote:**
   ```bash
   git push origin main
   # or
   git push origin master
   ```

6. **If Using Vercel CLI:**
   ```bash
   vercel --prod
   ```

7. **Check Vercel Dashboard:**
   - Go to your project
   - Check "Deployments" tab for error messages
   - Check "Settings" → "Environment Variables"
   - Check "Settings" → "General" → Build settings

## Quick Diagnostic Commands

Run these to diagnose the issue:

```bash
# 1. Check git status
git status

# 2. Check remote
git remote -v

# 3. Check branch
git branch

# 4. Check recent commits
git log --oneline -5

# 5. Test build
pnpm build

# 6. Check for TypeScript errors
pnpm exec tsc --noEmit

# 7. Check Vercel CLI (if installed)
vercel --version
```

## Next Steps

1. Run diagnostic commands above
2. Check Vercel Dashboard for specific error messages
3. Review build logs in Vercel Dashboard
4. Ensure all environment variables are set
5. Verify branch name matches Vercel deployment branch

