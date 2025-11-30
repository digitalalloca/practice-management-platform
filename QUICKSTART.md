# Quick Start Guide

Get your Practice Management Platform running in 15 minutes!

## ⚡ Fast Track Setup

### Prerequisites Check
```bash
node --version  # Should be 18+
git --version   # Should be installed
```

### 1. Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/digitalalloca/practice-management-platform.git
cd practice-management-platform

# Install dependencies
npm install
```

### 2. Set Up Supabase (5 minutes)

1. Go to [supabase.com](https://supabase.com) and create account
2. Click "New Project"
3. Name it (e.g., "practice-mgmt-dev")
4. Choose region closest to you
5. Set strong database password
6. Wait for project to initialize (~2 minutes)

**Get Your Keys:**
- Go to Settings > API
- Copy "Project URL" and "anon public" key

**Set Up Database:**
- Go to SQL Editor
- Click "New Query"
- Copy/paste contents from `supabase/schema.sql`
- Click "Run"

### 3. Set Up Stripe (3 minutes)

1. Go to [stripe.com](https://stripe.com) and create account
2. Skip business verification (use test mode)
3. Go to Developers > API Keys
4. Copy "Publishable key" and "Secret key"
5. Toggle "Test mode" ON (top right)

### 4. Configure Environment (2 minutes)

Create `.env.local` file:

```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
nano .env.local  # or use your favorite editor
```

Paste your keys:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run the App (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

🎉 **You're done!** The app is running locally.

## 🧪 Test the Platform

### Create Test Data

1. **Add a Client**
   - Go to Dashboard > Clients
   - Click "Add Client"
   - Fill in test data
   - Save

2. **Create an Appointment**
   - Go to Dashboard > Calendar
   - Click "New Appointment"
   - Select client and time
   - Save

3. **Generate an Invoice**
   - Go to Dashboard > Invoices
   - Click "Create Invoice"
   - Add line items
   - Save

### Test Stripe Payments

Use Stripe test cards:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Any future expiry date
- Any 3-digit CVC

## 🚀 Deploy to Production

### Option 1: One-Click Vercel Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/digitalalloca/practice-management-platform)

### Option 2: Manual Vercel Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
# Add environment variables when asked
```

### Option 3: GitHub + Vercel

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables
6. Click "Deploy"

## 🎯 Next Steps

### Customize Your Platform

1. **Update Branding**
   ```typescript
   // app/page.tsx - Change name
   <span>Your Practice Name</span>
   
   // tailwind.config.ts - Change colors
   primary: { 500: '#YOUR_COLOR' }
   ```

2. **Add Your Logo**
   - Place logo in `public/logo.png`
   - Update references in layout files

3. **Configure Email**
   - Set up SendGrid or Resend
   - Update email templates in Supabase

### Add Real Data

1. **Import Clients**
   - Prepare CSV file
   - Use Supabase dashboard to import
   - Or use API endpoints

2. **Set Up Services**
   - Add your service offerings
   - Set prices and durations
   - Configure booking rules

3. **Configure Practitioners**
   - Add team members
   - Set availability schedules
   - Assign permissions

## 📚 Learn More

- [Full Documentation](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Feature List](FEATURES.md)
- [Reselling Guide](RESELLING.md)

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Database connection fails
- Check Supabase project is active
- Verify environment variables
- Check for typos in .env.local

### Stripe not working
- Ensure test mode is enabled
- Check API keys are correct
- Verify webhook secret (if using)

### Build fails
```bash
npm run type-check  # Check for TypeScript errors
npm run lint        # Check for linting issues
```

## 💡 Pro Tips

1. **Use Test Mode First**
   - Always test with Stripe test mode
   - Use test data in Supabase
   - Don't use real client data until production

2. **Backup Regularly**
   - Export Supabase data weekly
   - Keep local backups
   - Test restore process

3. **Monitor Performance**
   - Check Vercel analytics
   - Monitor Supabase usage
   - Track Stripe transactions

4. **Stay Updated**
   - Watch GitHub repo for updates
   - Update dependencies monthly
   - Review security advisories

## 🎓 Video Tutorials

Coming soon:
- [ ] Complete setup walkthrough
- [ ] Customization guide
- [ ] Deployment tutorial
- [ ] Client onboarding
- [ ] Advanced features

## 📞 Get Help

- **Issues**: [GitHub Issues](https://github.com/digitalalloca/practice-management-platform/issues)
- **Discussions**: [GitHub Discussions](https://github.com/digitalalloca/practice-management-platform/discussions)
- **Email**: support@yourplatform.com

## ✅ Checklist

Before going live:

- [ ] Database schema deployed
- [ ] Environment variables set
- [ ] Branding customized
- [ ] Test data created
- [ ] Stripe tested
- [ ] Email configured
- [ ] Backup strategy in place
- [ ] Team trained
- [ ] Documentation reviewed
- [ ] Production deployment tested

---

**Ready to launch?** Follow this guide and you'll be up and running in no time! 🚀

Need help? Open an issue on GitHub or check the full documentation.