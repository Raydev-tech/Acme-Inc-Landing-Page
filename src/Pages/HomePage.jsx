import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layers, BarChart3, Users, Workflow, ShieldCheck, LifeBuoy, Star, CheckCircle2 } from "lucide-react";
import FAQSection from "./FAQSection";
import NewsletterSection from "./NewsletterSection";

// Optional: SVG icon (arrow right)
const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Optional: CheckCircle icon
const CheckCircleIcon = () => (
  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
  </svg>
);

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
   
  const features = [
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools and apps for a smooth workflow.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights with real-time data and comprehensive reports.",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with your team from anywhere in the world.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Automated Workflows",
      description: "Save time with automated processes and customizable templates.",
      icon: <Workflow className="h-6 w-6" />,
    },
    {
      title: "Secure Platform",
      description: "Rest easy knowing your data is protected with enterprise-grade security.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <LifeBuoy className="h-6 w-6" />,
    },
  ];
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we manage our projects. The team collaboration features are outstanding!",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "We've seen a 40% increase in productivity since implementing this solution. The automated workflows are a game-changer.",
      author: "Michael Chen",
      role: "CTO, GrowthStartup",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "The analytics dashboard gives us insights we never had before. It's helped us make better business decisions.",
      author: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      quote:
        "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it.",
      author: "David Kim",
      role: "Operations Manager, ServicePro",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
  ];
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams just getting started.",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 email support",
        "10GB storage",
        "2 projects",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with more needs.",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Unlimited projects",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large organizations with complex requirements.",
      features: [
        "Unlimited team members",
        "Enterprise-grade analytics",
        "Dedicated account manager",
        "500GB storage",
        "Unlimited projects",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
    },
  ];
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
              New Features for 2025
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Transform Your Business with Our Platform
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Our all-in-one solution helps you manage tasks, collaborate with your team, and grow your business faster than ever before.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="h-12 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center transition">
                Get Started for Free
                <ArrowRightIcon />
              </button>
              <button className="h-12 px-6 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition">
                View Demo
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
              <CheckCircleIcon />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircleIcon />
              <span>14-day free trial</span>
              <span className="mx-2">•</span>
              <CheckCircleIcon />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <img
                src="https://media.istockphoto.com/id/638952924/photo/checking-on-sales.webp?a=1&b=1&s=612x612&w=0&k=20&c=IBvVQsf0oqdmgcLHIoK4_L6sjIVk28L3nvrdqzKADtM="
                alt="Product screenshot"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Our platform provides all the tools you need to manage your business efficiently and scale with confidence.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="rounded-full bg-blue-100 p-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by Thousands of Businesses
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Don't just take our word for it. Here's what our customers have to say about our platform.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium leading-none">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 md:text-xl">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col border rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition ${
                plan.popular ? "border-blue-600 shadow-lg" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-gray-500">{plan.description}</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500"> /month</span>
              </div>
              <ul className="space-y-2 text-sm flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FAQSection />
    <NewsletterSection />
    </>
  );
};

export default HomePage;
