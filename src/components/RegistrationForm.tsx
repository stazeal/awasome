'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

// Define types for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updatedInterests = checked
        ? [...prev.interests, value]
        : prev.interests.filter(i => i !== value);
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // For Netlify Forms with Next.js v5+
      const formData = new FormData(e.currentTarget);
      formData.append('form-name', 'registration-form');
      formData.append('interests', formData.getAll('interests').join(', '));
      
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
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
                Your registration has been received. We&apos;ll be in touch soon.
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
              method="POST"
              onSubmit={handleSubmit}
              name="registration-form"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="registration-form" />
              <p style={{ display: 'none' }}>
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
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
                  id="email"
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
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <p className="block text-gray-700 font-medium mb-2">I&apos;m interested in:</p>
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
                  Women&apos;s Clothing
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
                  Men&apos;s Clothing
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
    </section>
  );
};

export default RegistrationForm;