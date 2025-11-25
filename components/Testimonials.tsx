'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=47",
      quote: "HotOrNot completely transformed how I engage with my audience. The instant feedback is addictive and the community is incredibly supportive. Best social platform I've used in years!",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Digital Marketer",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote: "The authenticity here is refreshing. Real opinions from real people without the algorithm chaos. It's become my go-to for testing content ideas and connecting with my target audience.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Lifestyle Blogger",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote: "I've tried every social platform out there, but HotOrNot stands out. The voting system is genius and the engagement rates are through the roof. My follower growth has been incredible!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Loved by Creators Everywhere
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied users who are building authentic connections and growing their presence on HotOrNot
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 font-normal leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
