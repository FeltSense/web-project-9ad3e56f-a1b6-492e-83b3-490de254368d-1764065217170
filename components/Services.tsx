'use client'

import { Flame, Users, TrendingUp, Shield } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Flame,
      title: 'Rate & Discover',
      description: 'Instantly rate profiles and discover trending content. Our intelligent algorithm surfaces the most engaging posts and people in real-time.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Social Connections',
      description: 'Build meaningful connections with people who share your interests. Match with others based on mutual ratings and shared preferences.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Viral Leaderboards',
      description: 'Compete for top spots on daily, weekly, and all-time leaderboards. Track your popularity score and climb the ranks as you engage.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Safe & Authentic',
      description: 'Advanced verification and moderation keep the community genuine. Report inappropriate content instantly with our 24/7 safety team.',
      gradient: 'from-slate-600 to-slate-800'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Everything You Need to Go Viral
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            HotOrNot gives you powerful tools to showcase yourself, connect with others, and build your social presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon with Gradient */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-normal leading-relaxed text-slate-600 mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-900 transition-colors duration-300 group/link"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join HotOrNot Today
          </a>
        </div>
      </div>
    </section>
  );
