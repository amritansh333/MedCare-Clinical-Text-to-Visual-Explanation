'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, HeartPulse, Stethoscope, Activity, ArrowRight, User, Award, Globe, Hospital } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Metropolitan Hospital Group',
    impact: 'Reduced Diagnostic Anxiety by 84%',
    summary: 'Implementation of MedCare AI in patient waiting rooms to explain basic report parameters before physician consultation.',
    metric: '50k+ Patients Served',
    color: 'bg-primary'
  },
  {
    title: 'Rural Health Initiative v2.0',
    impact: 'Bridge the Medical Gap in remote zones',
    summary: 'Localized AI analysis of blood reports for health workers in zones with limited specialist availability.',
    metric: '92% Satisfaction rate',
    color: 'bg-secondary'
  },
  {
    title: 'Elite Health Care Network',
    impact: 'Instant Pre-consultation clarity',
    summary: 'Personalized patient dashboards explaining chronic condition trends like Glucose and BP variations.',
    metric: 'Digital Health Award 2025',
    color: 'bg-indigo-600'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="py-32 lg:py-4 bg-transparent min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-40">
           <span className="text-primary font-black   tracking-widest text-sm mb-6 inline-block">Real Impact</span>
           <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter   italic">Case <span className="text-secondary">Studies</span></h1>
           <p className="text-2xl text-foreground/40 max-w-2xl mx-auto italic font-bold leading-relaxed">
             How MedCare AI is revolutionizing healthcare accessibility on a global scale.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 items-center mb-60">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-10 bg-primary/10 rounded-[80px] blur-[100px] -z-10" />
              <div className="glass p-12 lg:p-20 rounded-[60px] border border-white/10 shadow-3xl">
                 <Hospital className="w-20 h-20 text-primary mb-10" />
                 <h2 className="text-5xl font-black tracking-tighter italic   mb-10 leading-tight">Digital Transformation in Hospitals</h2>
                 <p className="text-xl text-foreground/60 leading-relaxed italic mb-12">
                   Leading medical centers use MedCare AI to bridge the understanding gap between technical clinical assessments and patient experience, ensuring clarity before every consultation.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                       <Award className="w-8 h-8 text-secondary" />
                       <span className="text-2xl font-black tracking-tighter italic">Award Winning Accuracy</span>
                    </div>
                    <div className="flex items-center space-x-4">
                       <Globe className="w-8 h-8 text-primary" />
                       <span className="text-2xl font-black tracking-tighter italic">Global Scalability</span>
                    </div>
                 </div>
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="grid grid-cols-1 gap-10"
           >
              {caseStudies.map((caseStudy, i) => (
                <div key={i} className="glass p-10 rounded-[40px] border border-border group hover:bg-accent/5 transition-all">
                   <div className={cn("w-16 h-1 w-full rounded-full mb-6", caseStudy.color)} />
                   <h3 className="text-3xl font-black tracking-tighter   italic mb-4">{caseStudy.title}</h3>
                   <p className="text-lg font-black text-primary   tracking-widest mb-4 italic">{caseStudy.impact}</p>
                   <p className="text-lg text-foreground/50 border-l-4 border-border pl-8 pt-2 leading-relaxed italic mb-8 font-bold">
                     {caseStudy.summary}
                   </p>
                   <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-black text-foreground/30   tracking-widest italic">{caseStudy.metric}</span>
                      <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/20">
                         <ArrowRight className="w-6 h-6" />
                      </button>
                   </div>
                </div>
              ))}
           </motion.div>
        </div>

        <section className="py-1 bg-transparent border-t border-border/10">
           <div className="text-center mb-32">
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter   mb-6">Use Cases Integration</h2>
              <div className="w-20 h-2 bg-primary/40 mx-auto" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="glass p-16 rounded-[60px] border border-border relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                    <User className="w-20 h-20 text-primary" />
                 </div>
                 <h3 className="text-3xl font-black tracking-tighter italic   mb-6">Personal Wellness</h3>
                 <p className="text-lg text-foreground/50 leading-relaxed italic font-bold">Understand seasonal allergies, blood chemistry, and persistent symptoms immediately without waiting for a specialty appointment.</p>
              </div>
              <div className="glass p-16 rounded-[60px] border border-border relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Activity className="w-20 h-20 text-secondary" />
                 </div>
                 <h3 className="text-3xl font-black tracking-tighter italic   mb-6">Chronic Management</h3>
                 <p className="text-lg text-foreground/50 leading-relaxed italic font-bold">Track variations in Glucose, BP, and Thyroid levels with simple explanations for every data deviation.</p>
              </div>
              <div className="glass p-16 rounded-[60px] border border-border relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Stethoscope className="w-20 h-20 text-indigo-600" />
                 </div>
                 <h3 className="text-3xl font-black tracking-tighter italic   mb-6">Clinic Support</h3>
                 <p className="text-lg text-foreground/50 leading-relaxed italic font-bold">Health professionals use our summaries to educate patients and ensure they adhere to follow-up protocols.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';
