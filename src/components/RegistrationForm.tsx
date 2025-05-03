'use client';
import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updatedInterests = checked
        ? [...prev.interests, value]
        : prev.interests.filter(i => i !== value);
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'registration-form');
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('interests', formData.interests.join(', '));

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: [],
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
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
                Your registration has been received. We'll be in touch soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="registration-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Required for Netlify to detect the form */}
              <input type="hidden" name="form-name" value="registration-form" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <p className="block text-gray-700 font-medium mb-2">I'm interested in:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Women's Clothing"
                    checked={formData.interests.includes("Women's Clothing")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Women's Clothing
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Men's Clothing"
                    checked={formData.interests.includes("Men's Clothing")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Men's Clothing
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                {loading ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Hidden form so Netlify can register it */}
      <form name="registration-form" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="interests" />
      </form>
    </section>
  );
};

export default RegistrationForm;
