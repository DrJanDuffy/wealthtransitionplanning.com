# Quick Fix for Vercel Deployment

## Most Common Issues & Solutions

### Issue 1: No Git Remote Configured

**Symptom:** `git push` fails with "no upstream branch" or "remote not found"

**Fix:**
```bash
# Check if remote exists
git remote -v

# If empty, add your repository (replace with your actual repo URL)
git remote add origin https://github.com/yourusername/yourrepo.git

# Or if using SSH
git remote add origin git@github.com:yourusername/yourrepo.git

# Then push
git push -u origin main
```

### Issue 2: Wrong Branch Name

**Symptom:** Vercel expects `main` but you're on `master` (or vice versa)

**Fix:**
```bash
# Check current branch
git branch

# If on master, rename to main
git branch -m master main

# Push to main
git push -u origin main
```

### Issue 3: Uncommitted Changes

**Symptom:** Changes not pushed because they're not committed

**Fix:**
```bash
# Check status
git status

# Add all changes
git add -A

# Commit
git commit -m "Improve header and footer for real estate site"

# Push
git push origin main
```

### Issue 4: Build Errors

**Symptom:** Vercel deployment fails during build

**Fix:**
```bash
# Test build locally first
pnpm install
pnpm build

# If build fails, check for:
# - TypeScript errors
# - Missing dependencies
# - Import errors
# - Environment variable issues
```

### Issue 5: Authentication Issues

**Symptom:** Push fails with authentication error

**Fix:**
```bash
# For HTTPS, use Personal Access Token instead of password
# Generate token at: GitHub Settings > Developer settings > Personal access tokens

# For SSH, ensure SSH key is added to GitHub/GitLab
ssh -T git@github.com
```

## Step-by-Step Fix

1. **Run the diagnostic script:**
   ```powershell
   .\fix-deployment.ps1
   ```

2. **Or manually check:**
   ```bash
   git status
   git remote -v
   git branch
   ```

3. **Fix any issues found, then:**
   ```bash
   git add -A
   git commit -m "Your commit message"
   git push origin main
   ```

4. **If using Vercel CLI:**
   ```bash
   vercel --prod
   ```

5. **Check Vercel Dashboard:**
   - Go to your project
   - Check "Deployments" tab for errors
   - Review build logs

## Environment Variables

Make sure these are set in Vercel Dashboard > Settings > Environment Variables:

- `NEXT_PUBLIC_BASE_URL` - Your site URL (e.g., https://wealthtransitionplanning.com)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Optional
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Optional
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Optional

## Still Having Issues?

1. Check Vercel Dashboard for specific error messages
2. Review build logs in Vercel Dashboard
3. Test build locally: `pnpm build`
4. Check TypeScript: `pnpm exec tsc --noEmit`
5. Verify all dependencies are installed: `pnpm install`

