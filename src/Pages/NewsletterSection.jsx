import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email."); // Show error toast
      return;
    }
    toast.success(`Subscribed with: ${email}`); // Show success toast
    setEmail("");
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
      data-aos="fade-up"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Stay Updated with Our Newsletter
            </h2>
            <p className="max-w-xl text-gray-600 md:text-lg">
              Get the latest news, updates, and tips delivered directly to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary">
                <Mail className="ml-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="#" className="underline underline-offset-2 hover:text-primary">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline underline-offset-2 hover:text-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default NewsletterSection;
