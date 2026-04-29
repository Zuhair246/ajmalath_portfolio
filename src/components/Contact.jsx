import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    
    // We are using Web3Forms as the easiest way to receive emails directly without a backend.
    const form = e.target;
    const formData = new FormData(form);
    
    // IMPORTANT: We now fetch the access key from the .env file!
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Success");
        form.reset();
      } else {
        setStatus("Error");
        console.error("Form error:", data);
      }
    } catch (error) {
      setStatus("Error");
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f7efe3] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#9a6a3b] uppercase">Get in Touch</h2>
            <h3 className="mb-6 font-serif text-3xl font-bold text-[#2a1d14] md:text-5xl">
              Let's Talk.
            </h3>
            <p className="mb-12 text-lg text-[#5e4633]">
              Ready to take your leadership and wellbeing to the next level? Reach out to discuss how we can work together to achieve your professional and personal goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eadbc6]">
                  <Mail className="h-5 w-5 text-[#9a6a3b]" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#8a6a4c]">Email</p>
                  <p className="font-medium text-[#2a1d14]">ajmalath29@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eadbc6]">
                  <MapPin className="h-5 w-5 text-[#9a6a3b]" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#8a6a4c]">Location</p>
                  <p className="font-medium text-[#2a1d14]">Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form className="rounded-[2rem] border border-[#e7dccb] bg-[#fffdf9] p-8 shadow-[0_24px_60px_rgba(72,48,28,0.12)] md:p-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5e4633]">First Name</label>
                  <input type="text" name="First Name" required className="w-full rounded-xl border border-[#e2d5c3] bg-[#f9f3ea] px-4 py-3 text-[#2a1d14] outline-none transition-all focus:border-[#b98a5a] focus:bg-white focus:ring-2 focus:ring-[#eadbc6]" placeholder="" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#5e4633]">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full rounded-xl border border-[#e2d5c3] bg-[#f9f3ea] px-4 py-3 text-[#2a1d14] outline-none transition-all focus:border-[#b98a5a] focus:bg-white focus:ring-2 focus:ring-[#eadbc6]" placeholder="" />
                </div>
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-[#5e4633]">Email Address</label>
                <input type="email" name="Email" required className="w-full rounded-xl border border-[#e2d5c3] bg-[#f9f3ea] px-4 py-3 text-[#2a1d14] outline-none transition-all focus:border-[#b98a5a] focus:bg-white focus:ring-2 focus:ring-[#eadbc6]" placeholder="xyz@gmail.com" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-[#5e4633]">Whatsapp Number</label>
                <input type="phone" name="Whatsapp Number" required className="w-full rounded-xl border border-[#e2d5c3] bg-[#f9f3ea] px-4 py-3 text-[#2a1d14] outline-none transition-all focus:border-[#b98a5a] focus:bg-white focus:ring-2 focus:ring-[#eadbc6]" placeholder="Add country code also" />
              </div>
              <div className="mb-8">
                <label className="mb-2 block text-sm font-medium text-[#5e4633]">Message</label>
                <textarea rows="4" name="Message" required className="w-full resize-none rounded-xl border border-[#e2d5c3] bg-[#f9f3ea] px-4 py-3 text-[#2a1d14] outline-none transition-all focus:border-[#b98a5a] focus:bg-white focus:ring-2 focus:ring-[#eadbc6]" placeholder="How can I help you ?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#7b4f2f] py-4 font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-colors duration-300 hover:bg-[#94613a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "Success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl border border-[#d6ccb8] bg-[#f4ede2] p-3 text-center font-medium text-[#5b6b45]">
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "Error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl border border-[#ead0c4] bg-[#fbf1ea] p-3 text-center font-medium text-[#9b5c43]">
                  Something went wrong. Please specify your access key or try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
