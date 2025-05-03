"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("interests", formData.interests.join(", "));

      // Replace with your own endpoint to handle the form submission (e.g., your backend API)
      await fetch("/your-api-endpoint", {
        method: "POST",
        body: formDataToSubmit,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interests: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Get More Information</h2>
          <p className="text-gray-600 text-center mb-8">
            Register to receive our catalog and get exclusive offers
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                Your registration has been received. We&apos;ll be in touch soon with more information.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-6">
                <p className="block text-gray-700 font-medium mb-2">I&apos;m interested in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="Women's Clothing"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Women&apos;s Clothing
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="Men's Clothing"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Men&apos;s Clothing
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="Accessories"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Accessories
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="New Collections"
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    New Collections
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Register Now"
                )}
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                By registering, you agree to receive marketing communications from us. You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
