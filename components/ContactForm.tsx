import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactFormData } from '../types';
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GeometricPattern } from './GeometricPattern';

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (data.honeypot) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Data:', data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-slate-950 border border-slate-800 rounded-lg px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all text-sm";
  const labelClasses = "block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 ml-1";

  return (
    <section id="enquire" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-cyan/10"></div>
      
      {/* Dense Geometric Patterns for Background */}
      <GeometricPattern type="B" className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[120%] text-brand-cyan opacity-20 rotate-180" flipped />
      <GeometricPattern type="A" className="absolute top-0 right-0 w-[50%] h-[100%] text-brand-teal opacity-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row"
        >
          
          {/* Form Side */}
          <div className="p-8 md:p-12 lg:p-16 w-full lg:w-3/5 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Request a Quote</h2>
            <p className="text-slate-400 mb-10 font-light leading-relaxed">
              Ready to upgrade your facility? Fill out the details below and our technical team will provide a bespoke proposal within 24 hours.
            </p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-cyan/10 border border-brand-cyan/30 p-10 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-brand-cyan rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-cyan/20">
                  <CheckCircle className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Enquiry Received</h3>
                <p className="text-slate-300 mb-8 max-w-sm">We've got your details. One of our specialists will be in touch shortly to discuss your requirements.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input type="text" className="honey-pot" tabIndex={-1} autoComplete="off" {...register('honeypot')} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                    <input id="name" {...register('name', { required: 'Name is required' })} className={inputClasses} placeholder="e.g. David Smith" />
                    {errors.name && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" } })} className={inputClasses} placeholder="e.g. david@school.edu" />
                    {errors.email && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                    <input id="phone" type="tel" {...register('phone', { required: 'Phone is required' })} className={inputClasses} placeholder="e.g. 07700 900000" />
                    {errors.phone && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="organization" className={labelClasses}>Organization</label>
                    <input id="organization" {...register('organization')} className={inputClasses} placeholder="e.g. St. Mary's College" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Project Requirements</label>
                  <textarea id="message" rows={4} {...register('message')} className={`${inputClasses} resize-none`} placeholder="Describe your space, approximate dimensions, or specific safety needs..."></textarea>
                </div>

                {errorMsg && <p className="text-red-400 text-sm text-center bg-red-900/20 py-2 rounded border border-red-900/50">{errorMsg}</p>}

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accentHover hover:to-brand-accent text-brand-dark font-bold py-5 rounded-lg shadow-lg shadow-brand-accent/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin" /> Processing...</>
                  ) : (
                    <>Submit Enquiry <ArrowRight size={20}/></>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="relative w-full lg:w-2/5 flex flex-col order-1 lg:order-2">
             <div className="absolute inset-0">
                <img src="https://i.ibb.co/R4VmQpBt/Balco-SAFEWALL-1.jpg" alt="Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 lg:bg-gradient-to-l lg:from-slate-900 lg:via-slate-900/80 lg:to-slate-900/40"></div>
             </div>
             
             <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-end">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg">Call Us</h4>
                        <p className="text-slate-300">03300 564554</p>
                        <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 5pm</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg">Email Us</h4>
                        <p className="text-slate-300">sales@balco-sports.co.uk</p>
                        <p className="text-slate-500 text-sm mt-1">Fast response guarantee</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 flex-shrink-0">
                        <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg">Visit Us</h4>
                        <p className="text-slate-300">Unit 8, Bumpers Farm Ind Est,<br/>Chippenham, SN14 6RB</p>
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