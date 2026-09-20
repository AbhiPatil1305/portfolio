import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { socials } from '../data/socials';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // API NOTE: This is a simulation. Connect your actual backend (e.g., EmailJS, Formspree, custom API) here.
    setTimeout(() => {
      setStatus('error'); // By default we fail it to show the user they need an API
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold leading-[1.1] tracking-tight mb-6 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">
            Have an idea?<br />
            <span className="text-accent">Let's build it.</span>
          </h2>
          <p className="text-lg text-secondaryText mb-12 max-w-md">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            {socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-secondaryText hover:text-primaryText transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-surface border border-borderDark flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-colors">
                  <social.icon size={20} />
                </div>
                <span className="font-medium font-space text-lg">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface border border-borderDark rounded-3xl p-8 md:p-10"
        >
          {status === 'error' && (
            <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-medium">
                <AlertCircle size={18} /> API Connection Required
              </div>
              <p className="text-sm opacity-90">
                Form submission is currently running in simulation mode. Please connect a backend service (like EmailJS or Formspree) in <code>Contact.tsx</code> to send real emails.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-xs underline mt-2 w-fit"
              >
                Try again
              </button>
            </div>
          )}

          {status === 'success' ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-space font-bold">Message Sent!</h3>
              <p className="text-secondaryText">Thank you for reaching out. I'll get back to you shortly.</p>
              <button onClick={() => { setStatus('idle'); setFormData({name:'', email:'', message:''}); }} className="mt-4 text-accent hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondaryText mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.name ? 'border-red-500/50' : 'border-borderDark focus:border-accent'} focus:outline-none focus:ring-1 ${errors.name ? 'focus:ring-red-500/50' : 'focus:ring-accent'} transition-all text-primaryText`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondaryText mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.email ? 'border-red-500/50' : 'border-borderDark focus:border-accent'} focus:outline-none focus:ring-1 ${errors.email ? 'focus:ring-red-500/50' : 'focus:ring-accent'} transition-all text-primaryText`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondaryText mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${errors.message ? 'border-red-500/50' : 'border-borderDark focus:border-accent'} focus:outline-none focus:ring-1 ${errors.message ? 'focus:ring-red-500/50' : 'focus:ring-accent'} transition-all text-primaryText resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primaryText text-background rounded-xl font-medium hover:bg-white/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
