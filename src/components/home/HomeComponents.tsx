'use client';

import { ArrowRight, ShieldCheck, FileSearch, PlayCircle, Star, MessageCircle, HelpCircle, ChevronRight, CheckCircle2, HeartPulse, Activity, Globe, Award, Hospital, Target, User, TrendingUp, MonitorCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const sectionHeader = (title: string, subtitle: string) => (
  <div className="flex flex-col mb-16 text-left space-y-4 font-inter-tight">
    <span className="text-[12px] font-black   tracking-[0.6em] text-primary bg-primary/5 px-6 py-2.5 rounded-sm border border-primary/20 w-max">{title}</span>
    <h2 className="text-6xl md:text-8xl font-black tracking-extratight   leading-none text-primary">{subtitle}</h2>
    <div className="w-40 h-1 bg-primary/20 rounded-full" />
  </div>
);

export function Hero() {
  return (
    <section className="relative py-32 lg:py-8 bg-background overflow-hidden no-italic border-b border-foreground/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start space-y-12"
          >
             <div className="flex items-center space-x-4 text-[12px] font-black tracking-[0.4em] text-primary/60 border-l-4 border-primary pl-6 py-2">
                <span>AI-powered healthcare assistant — real-time report interpretation system</span>
             </div>
             
             <h3 className="text-7xl md:text-[5rem] font-black leading-[0.85] tracking-extratight text-primary">
                Understand Your<br />
                Medical Reports<br />
                Instantly
             </h3>
             
             <div className="flex flex-col lg:flex-row lg:items-end gap-16 w-full pt-12 border-t border-foreground/10 pb-12">
                <p className="text-xl font-bold text-foreground/40 max-w-sm leading-tight tracking-[0.1em] italic no-italic">
                   MediCare.ai helps you decode medical reports into simple language.
                </p>

                <div className="flex flex-col space-y-2 border-l border-foreground/10 pl-12">
                   <div className="text-4xl font-black text-primary tracking-tighter">97%</div>
                   <div className="text-[10px] font-black tracking-[0.2em] text-foreground/40">Interpretation Accuracy</div>
                </div>
                
                <div className="flex flex-col space-y-2 border-l border-foreground/10 pl-12 pr-12">
                   <p className="text-xl font-bold text-foreground/40 max-w-sm leading-tight tracking-[0.1em] italic no-italic">
                   No complex terms, no confusion — just clear insights, explanations, and guidance powered by AI.
                </p>
                </div>
             </div>

             <Link
              href="/analyze"
              className="bg-primary text-primary-foreground px-8 py-4 text-[12px] font-black tracking-widest hover:bg-primary/90 transition-all border border-primary flex items-center gap-3"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* RIGHT SIDE (UPDATED) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative h-[800px]  flex items-center justify-center"
          >
            <Image
              src="/bot1.png"
              alt="AI Medical Assistant"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    { name: 'Er. Rohan Sharma', role: 'SOFTWARE ENGINEER', text: 'EARLIER, I STRUGGLED TO UNDERSTAND MY REPORTS. MEDICARE.AI MADE EVERYTHING CLEAR IN SECONDS.', initial: 'JW' },
    { name: 'Ananya Verma', role: 'STUDENT', text: 'MAKES COMPLEX MEDICAL TERMS SIMPLE AND EASY TO UNDERSTAND.', initial: 'SM' },
    { name: 'Neha Gupta', role: 'WORKING PROFESSIONAL', text: 'HELPFUL INSIGHTS WITH CLEAR EXPLANATIONS AND GUIDANCE.', initial: 'EC' }
  ];

  return (
    <section className="py-48 bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {sectionHeader("Core Analysis System", "Everything You Need In One Place")}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-20 border-r border-foreground/10 first:border-l hover:bg-primary hover:text-primary-foreground group transition-colors duration-700">
               <div className="flex space-x-1 mb-16 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary group-hover:fill-white group-hover:text-white" />)}
               </div>
               <p className="text-3xl font-black tracking-extratight   leading-[1.1] mb-20 group-hover:border-b border-primary-foreground pb-12 h-48">"{t.text}"</p>
               <div className="flex flex-col space-y-2 border-l-4 border-primary group-hover:border-primary-foreground pl-10 py-2">
                  <h4 className="text-[14px] font-black   tracking-[0.2em]">{t.name}</h4>
                  <p className="text-[10px] font-black text-foreground/40 group-hover:text-primary-foreground/40   tracking-[0.4em]">{t.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    { q: 'Is this a medical diagnosis tool?', a: 'No. MediCare.ai is designed to assist understanding, not replace professional consultation.' },
    { q: 'What kind of inputs can I provide?', a: 'You can enter symptoms or upload medical report details for analysis.' },
    { q: 'How does the explanation work?', a: 'The system converts technical medical data into simplified, structured insights.' }
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-48 bg-foreground/5 relative no-italic border-y border-foreground/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-32">
           <div>
             {sectionHeader("Still Have Doubts?", "FAQs")}
             <p className="text-xl font-bold text-foreground/40 leading-relaxed max-w-md tracking-widest">
               Have questions about MediCare.ai? Here are some quick answers to help you understand how the platform works.
             </p>
           </div>
           
           <div className="flex flex-col space-y-8 bg-background p-20 border border-foreground/10 shadow-3xl">
              {faqs.map((faq, i) => (
                <div key={i} className="pb-8 border-b border-foreground/10 last:border-0 last:pb-0">
                  <button 
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-[14px] font-black   tracking-[0.4em] transition-all group-hover:pl-4 group-hover:text-primary">{faq.q}</span>
                    <div className="w-10 h-10 border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                       <ChevronRight className={cn("w-5 h-5 transition-transform duration-500", active === i ? "rotate-90" : "")} />
                    </div>
                  </button>
                  <AnimatePresence>
                     {active === i && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="pt-10 overflow-hidden"
                        >
                           <p className="text-[14px] font-bold text-foreground/60 leading-relaxed   tracking-[0.2em] border-l-2 border-primary pl-8">
                              {faq.a}
                           </p>
                        </motion.div>
                     )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
