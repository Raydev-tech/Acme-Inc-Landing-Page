import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime during the trial period with no obligation.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer:
      "The number of team members you can add depends on your plan. The Starter plan allows up to 5 members, Professional up to 20, and Enterprise has no limit. You can always upgrade if you need to add more team members.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profits, educational institutions, and open-source projects. Please contact our sales team for more information about these discounts.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We use industry-standard encryption, regular security audits, and follow best practices for data protection. All data is stored in secure, SOC 2 compliant data centers, and we offer features like two-factor authentication and single sign-on for additional security.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include access to our help center and email support. Professional plans and above include priority support with faster response times. Enterprise plans come with a dedicated account manager for personalized assistance.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">FAQ</div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 md:text-xl">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
