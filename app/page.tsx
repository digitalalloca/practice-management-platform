import Link from 'next/link';
import { Calendar, Users, FileText, CreditCard, BarChart3, Clock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: 'Online Booking',
      description: 'Let clients book appointments 24/7 with your customizable booking page'
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Comprehensive client profiles with history, notes, and documents'
    },
    {
      icon: FileText,
      title: 'Charting & EMR',
      description: 'Digital charting and electronic medical records for better care'
    },
    {
      icon: CreditCard,
      title: 'Billing & Payments',
      description: 'Integrated invoicing and payment processing with Stripe'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track your practice performance with detailed reports'
    },
    {
      icon: Clock,
      title: 'Schedule Management',
      description: 'Manage multiple practitioners and locations effortlessly'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">PracticePro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Practice Management Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to run your health and wellness practice efficiently. 
            From online booking to billing, we've got you covered.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="btn btn-primary text-lg px-8 py-3">
              Start Free Trial
            </Link>
            <Link href="/demo" className="btn btn-secondary text-lg px-8 py-3">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need in One Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> 1 Practitioner
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> 100 Clients
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Online Booking
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Basic Reporting
                </li>
              </ul>
              <Link href="/signup?plan=starter" className="btn btn-secondary w-full">
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="card border-2 border-primary-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> 5 Practitioners
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Unlimited Clients
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Advanced Features
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Priority Support
                </li>
              </ul>
              <Link href="/signup?plan=professional" className="btn btn-primary w-full">
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Unlimited Everything
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Custom Integration
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> Dedicated Support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> SLA Guarantee
                </li>
              </ul>
              <Link href="/contact" className="btn btn-secondary w-full">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-6 w-6" />
                <span className="text-xl font-bold">PracticePro</span>
              </div>
              <p className="text-gray-400">
                Complete practice management for health and wellness professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/demo">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PracticePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}