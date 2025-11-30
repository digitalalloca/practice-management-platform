# Reselling Guide

This guide explains how to white-label and resell the Practice Management Platform.

## 🎯 Business Model Options

### 1. SaaS Subscription Model
Charge clients monthly/annual fees:
- **Starter**: $49-99/month
- **Professional**: $99-199/month
- **Enterprise**: $299+/month or custom

### 2. One-Time License
Sell perpetual licenses:
- **Single Practice**: $2,000-5,000
- **Multi-Location**: $5,000-15,000
- **Enterprise**: $15,000+

### 3. Custom Development
Charge for customization:
- **Setup & Training**: $500-2,000
- **Custom Features**: $100-200/hour
- **Integration Work**: $150-300/hour
- **Ongoing Support**: $200-500/month

## 🏷️ White-Labeling Steps

### 1. Branding

**Update Logo & Name**
\`\`\`typescript
// app/page.tsx and app/dashboard/layout.tsx
<span className="text-xl font-bold">Your Brand Name</span>
\`\`\`

**Change Colors**
\`\`\`typescript
// tailwind.config.ts
colors: {
  primary: {
    500: '#YOUR_COLOR',
    600: '#YOUR_COLOR',
    // ... other shades
  }
}
\`\`\`

**Update Metadata**
\`\`\`typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Your Brand - Practice Management",
  description: "Your custom description",
};
\`\`\`

### 2. Domain Setup

1. Purchase domain for your brand
2. Point to your Vercel deployment
3. Update \`NEXT_PUBLIC_APP_URL\` in environment variables

### 3. Email Customization

Update all email templates in Supabase:
- Welcome emails
- Password resets
- Appointment reminders
- Invoice notifications

Replace with your branding and support contact.

### 4. Legal Pages

Create/update:
- Terms of Service
- Privacy Policy
- HIPAA Compliance (if applicable)
- Service Level Agreement (SLA)

## 💼 Client Onboarding Process

### Step 1: Initial Setup (30-60 minutes)

1. **Create Client Account**
   - Set up Supabase project for client
   - Configure database
   - Set up authentication

2. **Deploy Instance**
   - Fork repository for client
   - Deploy to Vercel
   - Configure custom domain

3. **Configure Stripe**
   - Create Stripe Connect account for client
   - Set up payment processing
   - Configure webhooks

### Step 2: Data Migration (1-4 hours)

If client has existing data:
\`\`\`sql
-- Import clients
COPY clients FROM 'clients.csv' WITH CSV HEADER;

-- Import appointments
COPY appointments FROM 'appointments.csv' WITH CSV HEADER;
\`\`\`

### Step 3: Training (2-4 hours)

Provide training on:
- Dashboard navigation
- Client management
- Appointment scheduling
- Billing & invoicing
- Reporting

### Step 4: Go Live

- Final testing
- Data verification
- Launch announcement
- Monitor for issues

## 📊 Pricing Calculator

### Cost Structure

**Your Costs (per client):**
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- Support time: ~2 hours/month @ $50/hour = $100
- **Total Cost: ~$145/month**

**Your Pricing:**
- Charge: $299/month
- **Profit: $154/month per client**

**With 10 clients:**
- Revenue: $2,990/month
- Costs: $1,450/month
- **Profit: $1,540/month**

**With 50 clients:**
- Revenue: $14,950/month
- Costs: $7,250/month
- **Profit: $7,700/month**

## 🎨 Customization Services

### Common Client Requests

1. **Custom Branding** ($500-1,000)
   - Logo integration
   - Color scheme
   - Custom fonts
   - Email templates

2. **Industry-Specific Features** ($1,000-5,000)
   - Chiropractic templates
   - Massage therapy forms
   - Physical therapy protocols
   - Mental health notes

3. **Integrations** ($1,000-3,000 each)
   - QuickBooks
   - Xero
   - Mailchimp
   - Zapier
   - Insurance verification

4. **Advanced Features** ($2,000-10,000)
   - Telehealth video
   - Mobile apps
   - Patient portal
   - Inventory management
   - Lab integrations

## 📈 Marketing Strategy

### Target Markets

1. **Solo Practitioners**
   - Massage therapists
   - Chiropractors
   - Counselors
   - Acupuncturists

2. **Small Clinics**
   - Physical therapy
   - Dental practices
   - Veterinary clinics
   - Wellness centers

3. **Multi-Location Practices**
   - Franchise operations
   - Corporate wellness
   - Healthcare networks

### Marketing Channels

1. **Direct Outreach**
   - LinkedIn prospecting
   - Industry conferences
   - Local business groups
   - Professional associations

2. **Content Marketing**
   - Blog about practice management
   - YouTube tutorials
   - Case studies
   - Comparison guides

3. **Paid Advertising**
   - Google Ads (high intent keywords)
   - Facebook/Instagram (targeting practitioners)
   - LinkedIn Ads (B2B)

4. **Partnerships**
   - Accounting firms
   - Business consultants
   - Industry associations
   - Equipment suppliers

## 💡 Value Propositions

### For Clients

**vs. Jane.app ($99-299/month):**
- ✅ Lower cost
- ✅ Full customization
- ✅ No per-practitioner fees
- ✅ Own your data
- ✅ White-label option

**vs. Building In-House:**
- ✅ 90% cheaper
- ✅ Immediate deployment
- ✅ Proven solution
- ✅ Ongoing updates
- ✅ Support included

## 📋 Client Agreement Template

### Service Agreement Outline

1. **Services Provided**
   - Software license
   - Hosting & maintenance
   - Support hours included
   - Update schedule

2. **Client Responsibilities**
   - Provide content/branding
   - Timely feedback
   - Payment terms
   - Data backup

3. **Pricing & Payment**
   - Monthly/annual fee
   - Setup fee
   - Additional services
   - Payment schedule

4. **Support & Maintenance**
   - Response times
   - Support channels
   - Included hours
   - Emergency support

5. **Termination**
   - Notice period
   - Data export
   - Refund policy

## 🔧 Technical Support

### Support Tiers

**Basic Support (included)**
- Email support
- 48-hour response time
- Bug fixes
- Security updates

**Premium Support (+$200/month)**
- Priority email/chat
- 4-hour response time
- Phone support
- Monthly check-ins

**Enterprise Support (custom)**
- Dedicated account manager
- 1-hour response time
- 24/7 emergency support
- Custom SLA

## 📊 Reporting for Clients

Provide monthly reports:
- System uptime
- User activity
- Revenue processed
- Support tickets resolved
- Feature requests status

## 🚀 Scaling Your Business

### Automation

1. **Onboarding**
   - Automated deployment scripts
   - Self-service setup wizard
   - Video tutorials

2. **Support**
   - Knowledge base
   - Chatbot for common questions
   - Community forum

3. **Billing**
   - Automated invoicing
   - Payment reminders
   - Usage tracking

### Team Building

As you grow:
- **5-10 clients**: Solo operation
- **10-25 clients**: Hire support person
- **25-50 clients**: Add developer
- **50+ clients**: Build full team

## 💰 Revenue Projections

### Year 1
- Month 1-3: 3 clients = $897/month
- Month 4-6: 8 clients = $2,392/month
- Month 7-9: 15 clients = $4,485/month
- Month 10-12: 25 clients = $7,475/month
- **Year 1 Total: ~$45,000**

### Year 2
- Steady growth to 50 clients
- **Year 2 Total: ~$150,000**

### Year 3
- Scale to 100+ clients
- Add team members
- **Year 3 Total: $300,000+**

## 📞 Sales Script

### Discovery Call

"Hi [Name], I help [specialty] practitioners streamline their practice management. Currently, how are you handling appointments and billing?"

**Pain Points to Listen For:**
- Manual scheduling
- Double bookings
- Payment tracking issues
- No-shows
- Disorganized client records

**Pitch:**
"I have a solution that's like Jane.app but customized for your practice at half the cost. It includes online booking, client management, billing, and more. Can I show you a quick demo?"

### Demo Structure (15 minutes)

1. **Dashboard** (2 min) - Show overview
2. **Calendar** (3 min) - Book appointment
3. **Client Management** (3 min) - Add client
4. **Invoicing** (3 min) - Create invoice
5. **Mobile View** (2 min) - Show responsiveness
6. **Q&A** (2 min)

### Closing

"Based on what you've seen, does this solve your main challenges? I can have you up and running in 48 hours. Shall we get started?"

## 🎓 Training Materials

Create for clients:
- Video tutorials (10-15 videos)
- PDF user guides
- Quick reference cards
- FAQ document
- Best practices guide

## ⚖️ Legal Considerations

### Required Agreements

1. **Software License Agreement**
2. **Service Level Agreement (SLA)**
3. **Data Processing Agreement (DPA)**
4. **HIPAA Business Associate Agreement (BAA)** - if handling PHI

### Compliance

- HIPAA (healthcare data)
- GDPR (EU clients)
- PCI DSS (payment processing)
- SOC 2 (enterprise clients)

## 🎯 Success Metrics

Track:
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (LTV)
- Churn rate
- Net Promoter Score (NPS)
- Support ticket volume

## 📚 Resources

- [Stripe Atlas](https://stripe.com/atlas) - Business formation
- [Baremetrics](https://baremetrics.com) - SaaS metrics
- [Intercom](https://intercom.com) - Customer support
- [Calendly](https://calendly.com) - Sales calls

---

Ready to start reselling? Follow this guide and you'll be profitable in no time! 💰