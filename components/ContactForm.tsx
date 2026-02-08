import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactFormData } from '../types';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeometricPattern } from './GeometricPattern';

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Honeypot check
    if (data.honeypot) {
      // Silently fail for bots
      console.log('Bot detected');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    // Simulate network request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // In a real app, post to backend API here
      console.log('Form Data:', data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="py-24 bg-gradient-to-b from-slate-900 to-brand-teal relative overflow-hidden">
      {/* Background decoration - Top Shape reused at Top Left for Balance */}
      <GeometricPattern className="absolute top-[-30%] left-[-20%] w-[70%] h-[150%] text-brand-teal opacity-30 rotate-180" flipped />
      
      {/* Existing skew decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col md:flex-row"
        >
          
          {/* Form Side */}
          <div className="p-8 md:p-12 w-full md:w-3/5 order-2 md:order-1 bg-slate-900">
            <h2 className="text-3xl font-bold text-white mb-6">Get a Quote Today</h2>
            <p className="text-slate-400 mb-8 text-sm">
              Fill out the form below and our team will get back to you within 24 hours with a bespoke solution and pricing.
            </p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enquiry Sent!</h3>
                <p className="text-slate-300 mb-6">Thank you. We have received your details and will contact you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-accent hover:text-white font-medium underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot field (hidden) */}
                <input 
                  type="text" 
                  className="honey-pot" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  {...register('honeypot')} 
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input 
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                    <input 
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      placeholder="07700 900000"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-1">Organisation</label>
                    <input 
                      id="organization"
                      {...register('organization')}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      placeholder="School / Center Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Project Details</label>
                  <textarea 
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements (dimensions, room type, etc.)..."
                  ></textarea>
                </div>

                {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-4 rounded-lg shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Info Side with Graphic Background */}
          <div className="relative w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center border-l border-slate-700 order-1 md:order-2 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.ibb.co/R4VmQpBt/Balco-SAFEWALL-1.jpg" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-900/80"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                    <p className="text-white font-medium">03300 564554</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                    <p className="text-white font-medium">sales@balco-sports.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Head Office</p>
                    <p className="text-white font-medium">
                      Unit 8, Bumpers Farm Ind Est,<br/>
                      Chippenham, SN14 6RB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};