'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Video Background Effect (using image as placeholder) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-2.5 mb-8 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-900">The Social Rating Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Rate. Connect.
            <span className="block mt-2 bg-gradient-to-r from-slate-600 via-slate-700 to-emerald-500 bg-clip-text text-transparent">
              Discover What's Hot
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-normal leading-relaxed text-slate-600 mb-12 max-w-3xl mx-auto">
            Join millions rating photos, discovering trends, and connecting with people who share your taste. The ultimate social experience for the modern age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-10 py-5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white rounded-xl px-10 py-5 transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '500M+', label: 'Ratings Given' },
              { value: '50M+', label: 'Photos Rated' },
              { value: '4.9/5', label: 'User Rating' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image/Visual */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80"
                alt="HotOrNot Platform Preview"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
              {/* Floating Rating Cards */}
              <div className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">🔥</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Hot Rating</div>
                    <div className="text-xs text-slate-600">+250 votes</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Trending</div>
                    <div className="text-xs text-slate-600">Top 10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}
