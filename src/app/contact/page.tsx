'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, User } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
           <p className="text-lg text-foreground/70 leading-relaxed italic">
             Questions or feedback? We’d love to hear from you.
           </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
             <div className="bg-white p-12 rounded-3xl border border-border shadow-soft text-center group">
                <div className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                   <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-foreground/70 mb-8 italic">
                   Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button
                   onClick={() => setSubmitted(false)}
                   className="text-primary font-bold hover:underline"
                >
                   Send another message
                </button>
             </div>
          ) : (
             <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-soft space-y-8">
                <div className="space-y-2">
                   <label className="text-sm font-bold   tracking-widest text-foreground flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>Full Name</span>
                   </label>
                   <input
                      type="text"
                      required
                      className="w-full p-4 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Jane Doe"
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold   tracking-widest text-foreground flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email Address</span>
                   </label>
                   <input
                      type="email"
                      required
                      className="w-full p-4 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="jane@example.com"
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold   tracking-widest text-foreground flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Your Message</span>
                   </label>
                   <textarea
                      required
                      rows={6}
                      className="w-full p-4 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                   />
                </div>

                <button
                   type="submit"
                   className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-xl font-bold text-lg transition-all transform active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center space-x-3"
                >
                   <Send className="w-5 h-5" />
                   <span>Send Message</span>
                </button>
             </form>
          )}
        </div>
      </div>
    </div>
  );
}
