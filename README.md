# Practice Management Platform

A complete, production-ready practice management solution for health and wellness practitioners. Built with Next.js 14, Supabase, and Stripe.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Features

### Core Functionality
- **📅 Online Booking System** - Client self-scheduling with customizable availability
- **👥 Client Management** - Comprehensive patient records, history, and notes
- **📆 Appointment Calendar** - Multi-practitioner schedule management
- **💳 Billing & Payments** - Integrated invoicing with Stripe payment processing
- **📋 Charting/EMR** - Electronic medical records and clinical notes
- **👨‍⚕️ Multi-Practitioner Support** - Team management and role-based access
- **📊 Analytics Dashboard** - Revenue tracking and performance metrics
- **🔔 Automated Reminders** - Email/SMS appointment notifications
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### Technical Features
- **⚡ Server-Side Rendering** - Fast page loads with Next.js 14 App Router
- **🔐 Secure Authentication** - Supabase Auth with row-level security
- **💾 PostgreSQL Database** - Robust data storage with Supabase
- **💰 Payment Processing** - Stripe integration for secure payments
- **🎨 Modern UI** - Tailwind CSS with custom components
- **📝 TypeScript** - Type-safe development
- **🚀 Easy Deployment** - One-click deploy to Vercel

## 📋 Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier available)
- A Stripe account (test mode available)
- Git installed

## 🛠️ Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/digitalalloca/practice-management-platform.git
cd practice-management-platform
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API
3. Copy your project URL and anon key
4. Go to SQL Editor and run the schema from \`supabase/schema.sql\`

### 4. Set Up Stripe

1. Create an account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Enable test mode for development

### 5. Configure Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### 6. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/digitalalloca/practice-management-platform)

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
practice-management-platform/
├── app/                      # Next.js 14 App Router
│   ├── api/                 # API routes
│   │   ├── clients/        # Client management endpoints
│   │   ├── appointments/   # Appointment endpoints
│   │   └── invoices/       # Invoice endpoints
│   ├── dashboard/          # Main application
│   │   ├── calendar/       # Calendar view
│   │   ├── clients/        # Client management
│   │   ├── invoices/       # Billing & invoices
│   │   └── settings/       # Settings
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── lib/                     # Utilities
│   ├── supabase/           # Supabase client
│   └── stripe/             # Stripe client
├── supabase/               # Database
│   └── schema.sql          # Database schema
├── public/                 # Static assets
└── package.json            # Dependencies
\`\`\`

## 🗄️ Database Schema

The platform uses PostgreSQL with the following main tables:

- **practices** - Practice/clinic information
- **users** - Practitioners and staff
- **clients** - Patient records
- **appointments** - Scheduled appointments
- **services** - Service catalog
- **invoices** - Billing records
- **invoice_items** - Line items
- **payments** - Payment transactions
- **client_notes** - Clinical notes and charts
- **availability_templates** - Practitioner schedules

## 🔐 Security Features

- Row-level security (RLS) in Supabase
- Secure authentication with Supabase Auth
- PCI-compliant payment processing with Stripe
- Environment variable protection
- HTTPS enforcement in production
- SQL injection prevention
- XSS protection

## 💳 Payment Integration

The platform integrates with Stripe for:
- One-time payments
- Invoice generation
- Payment tracking
- Refund processing
- Subscription management (optional)

## 📱 Responsive Design

Fully responsive interface that works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Branding
- Update colors in \`tailwind.config.ts\`
- Replace logo in \`public/\`
- Modify landing page in \`app/page.tsx\`

### Features
- Add new pages in \`app/dashboard/\`
- Create API routes in \`app/api/\`
- Extend database schema in \`supabase/schema.sql\`

## 📊 Analytics & Reporting

Built-in analytics for:
- Revenue tracking
- Appointment statistics
- Client retention
- Practitioner performance
- Payment trends

## 🔄 API Endpoints

### Clients
- \`GET /api/clients\` - List all clients
- \`POST /api/clients\` - Create new client
- \`PUT /api/clients/[id]\` - Update client
- \`DELETE /api/clients/[id]\` - Delete client

### Appointments
- \`GET /api/appointments\` - List appointments
- \`POST /api/appointments\` - Create appointment
- \`PUT /api/appointments/[id]\` - Update appointment
- \`DELETE /api/appointments/[id]\` - Cancel appointment

### Invoices
- \`GET /api/invoices\` - List invoices
- \`POST /api/invoices\` - Create invoice
- \`PUT /api/invoices/[id]\` - Update invoice
- \`POST /api/invoices/[id]/send\` - Send invoice

## 🧪 Testing

\`\`\`bash
# Run type checking
npm run type-check

# Run linting
npm run lint
\`\`\`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💼 Commercial Use

This platform is fully resellable and can be white-labeled for your business. You can:
- Rebrand and resell to clients
- Offer as SaaS with your own pricing
- Customize for specific industries
- Add your own features

## 🆘 Support

For issues and questions:
- Open an issue on GitHub
- Check the documentation
- Review existing issues

## 🗺️ Roadmap

- [ ] Mobile apps (iOS/Android)
- [ ] Advanced reporting
- [ ] Telehealth integration
- [ ] Insurance billing
- [ ] Multi-location support
- [ ] API webhooks
- [ ] Third-party integrations

## 📚 Documentation

For detailed documentation, visit the [Wiki](https://github.com/digitalalloca/practice-management-platform/wiki).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js, Supabase, and Stripe