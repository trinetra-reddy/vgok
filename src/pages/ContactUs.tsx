import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:Event) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you can replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("Your message has been successfully sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>
      </div>

      {/* VGuarantee Brief */}
      {/* <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About VGuarantee – Ensuring Secure Transactions</h3>
        <p className="text-lg text-gray-700">
          VGuarantee is a trusted platform dedicated to safeguarding digital transactions and protecting users from fraud. 
          As a secure intermediary, we facilitate safe and reliable exchanges, particularly when dealing with unknown parties.
        </p>
      </div> */}

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13ca82] placeholder-gray-500" // Primary color
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13ca82] placeholder-gray-500" // Primary color
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13ca82] placeholder-gray-500" // Primary color
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 text-white font-semibold rounded-lg ${isSubmitting ? "bg-gray-400" : "bg-[#13ca82] hover:bg-[#0d9c66]"}`}> {/* Primary color */}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Submission Status */}
        {submissionStatus && (
          <div className="mt-6 text-center text-green-600 font-semibold">{submissionStatus}</div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
