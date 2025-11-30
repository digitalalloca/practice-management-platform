# Deployment Guide

Complete guide to deploying your Practice Management Platform to production.

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/digitalalloca/practice-management-platform)

### Option 2: Manual Vercel Deployment

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings

3. **Add Environment Variables**
   
   In Vercel Dashboard > Settings > Environment Variables, add:
   
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pk
   STRIPE_SECRET_KEY=your_stripe_sk
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live!

## 🗄️ Database Setup (Supabase)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose organization and region
4. Set database password (save this!)
5. Wait for project to initialize

### 2. Run Database Schema

1. Go to SQL Editor in Supabase Dashboard
2. Copy contents of \`supabase/schema.sql\`
3. Paste and run the SQL
4. Verify tables are created in Table Editor

### 3. Configure Row Level Security (RLS)

Add these RLS policies in SQL Editor:

\`\`\`sql
-- Enable RLS on all tables
ALTER TABLE practices ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Example policy for clients table
CREATE POLICY "Users can view clients in their practice"
  ON clients FOR SELECT
  USING (
    practice_id IN (
      SELECT practice_id FROM users 
      WHERE id = auth.uid()
    )
  );

-- Add similar policies for other tables
\`\`\`

### 4. Get API Keys

1. Go to Project Settings > API
2. Copy:
   - Project URL
   - Anon/Public key
   - Service Role key (keep secret!)

## 💳 Stripe Setup

### 1. Create Stripe Account

1. Sign up at [stripe.com](https://stripe.com)
2. Complete business verification
3. Enable test mode for development

### 2. Get API Keys

1. Go to Developers > API Keys
2. Copy:
   - Publishable key
   - Secret key

### 3. Set Up Webhooks

1. Go to Developers > Webhooks
2. Click "Add endpoint"
3. Enter URL: \`https://your-domain.vercel.app/api/webhooks/stripe\`
4. Select events:
   - \`payment_intent.succeeded\`
   - \`payment_intent.payment_failed\`
   - \`invoice.paid\`
   - \`invoice.payment_failed\`
5. Copy webhook signing secret

### 4. Configure Products (Optional)

For subscription billing:
1. Go to Products
2. Create pricing plans
3. Note product IDs for your code

## 🌐 Custom Domain Setup

### On Vercel

1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS records:
   
   **For root domain (example.com):**
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21
   \`\`\`
   
   **For subdomain (app.example.com):**
   \`\`\`
   Type: CNAME
   Name: app
   Value: cname.vercel-dns.com
   \`\`\`

4. Wait for DNS propagation (up to 48 hours)
5. SSL certificate auto-generated

## 📧 Email Configuration

### Supabase Auth Emails

1. Go to Authentication > Email Templates
2. Customize:
   - Confirmation email
   - Password reset
   - Magic link
3. Configure SMTP (optional):
   - Settings > Auth > SMTP Settings
   - Add your email provider details

### Transactional Emails

For appointment reminders and invoices:

1. **Option A: SendGrid**
   \`\`\`bash
   npm install @sendgrid/mail
   \`\`\`
   Add to \`.env.local\`:
   \`\`\`
   SENDGRID_API_KEY=your_key
   \`\`\`

2. **Option B: Resend**
   \`\`\`bash
   npm install resend
   \`\`\`
   Add to \`.env.local\`:
   \`\`\`
   RESEND_API_KEY=your_key
   \`\`\`

## 🔒 Security Checklist

Before going live:

- [ ] All environment variables set in production
- [ ] RLS policies enabled on all tables
- [ ] Stripe webhook secret configured
- [ ] HTTPS enforced (automatic on Vercel)
- [ ] Service role key kept secret
- [ ] Database password is strong
- [ ] Auth email templates customized
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Error tracking set up (Sentry, etc.)

## 📊 Monitoring Setup

### Vercel Analytics

1. Go to Analytics tab in Vercel
2. Enable Web Analytics
3. View real-time metrics

### Error Tracking (Sentry)

\`\`\`bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
\`\`\`

Add to \`.env.local\`:
\`\`\`
NEXT_PUBLIC_SENTRY_DSN=your_dsn
\`\`\`

## 🔄 CI/CD Pipeline

Vercel automatically:
- Builds on every push to main
- Creates preview deployments for PRs
- Runs build checks
- Deploys on success

### GitHub Actions (Optional)

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
\`\`\`

## 🌍 Multi-Region Deployment

For global performance:

1. **Vercel Edge Network**
   - Automatic CDN
   - Global edge caching
   - No configuration needed

2. **Supabase Read Replicas**
   - Available on Pro plan
   - Reduce latency globally
   - Configure in dashboard

## 📱 Mobile App Deployment (Future)

When ready for mobile apps:

1. **iOS (App Store)**
   - Enroll in Apple Developer Program
   - Use React Native or Capacitor
   - Submit for review

2. **Android (Play Store)**
   - Create Google Play Developer account
   - Build APK/AAB
   - Submit for review

## 🔧 Troubleshooting

### Build Fails

\`\`\`bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### Database Connection Issues

- Check Supabase project status
- Verify environment variables
- Check RLS policies
- Review connection pooling

### Stripe Webhook Failures

- Verify webhook URL is correct
- Check webhook signing secret
- Review Stripe dashboard logs
- Test with Stripe CLI locally

## 📈 Scaling Considerations

As your platform grows:

1. **Database**
   - Upgrade Supabase plan
   - Add read replicas
   - Optimize queries
   - Add indexes

2. **Hosting**
   - Upgrade Vercel plan
   - Enable edge functions
   - Use ISR for static pages

3. **Payments**
   - Upgrade Stripe plan
   - Enable advanced features
   - Add fraud prevention

## 💰 Cost Estimation

### Free Tier (Development)
- Vercel: Free (hobby)
- Supabase: Free (500MB database)
- Stripe: Free (test mode)
- **Total: $0/month**

### Production (Small Practice)
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- Stripe: 2.9% + $0.30 per transaction
- **Total: ~$45/month + transaction fees**

### Production (Large Practice)
- Vercel Enterprise: Custom
- Supabase Team: $599/month
- Stripe: Volume pricing
- **Total: Custom pricing**

## 🎉 Go Live Checklist

- [ ] Database schema deployed
- [ ] All environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Stripe webhooks working
- [ ] Email sending configured
- [ ] Error tracking enabled
- [ ] Analytics set up
- [ ] Backup strategy in place
- [ ] Documentation updated
- [ ] Team trained
- [ ] Support system ready

## 📞 Support

Need help deploying?
- Check Vercel documentation
- Review Supabase guides
- Consult Stripe docs
- Open GitHub issue

---

Happy deploying! 🚀