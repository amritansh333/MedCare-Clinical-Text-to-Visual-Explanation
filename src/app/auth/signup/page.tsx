'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowRight, ShieldCheck, HeartPulse, UserPlus, Stethoscope, Activity, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="py-40 min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent">
         <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl px-4"
      >
        <div className="glass p-16 lg:p-24 rounded-[100px] border border-white/10 shadow-3xl flex flex-col items-center relative overflow-hidden group">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-3xl bg-secondary flex items-center justify-center shadow-2xl">
                       <UserPlus className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-black italic tracking-tighter   whitespace-nowrap text-secondary">ONBOARDING V.2</span>
                 </div>

                 <h1 className="text-6xl font-black italic tracking-tighter   leading-tight">JOIN THE <br /><span className="text-primary underline decoration-indigo-500/20 underline-offset-10 decoration-8">ECOSYSTEM</span></h1>
                 <p className="text-xl font-bold italic text-foreground/40 leading-relaxed   tracking-widest max-w-sm">Secure your health parameters with enterprise-level encryption v3.99.</p>
                 
                 <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                       <CheckCircle2 className="w-6 h-6 text-secondary" />
                       <span className="text-lg font-black italic tracking-tighter  ">Instant Report Synthesis</span>
                    </div>
                    <div className="flex items-center space-x-4">
                       <CheckCircle2 className="w-6 h-6 text-secondary" />
                       <span className="text-lg font-black italic tracking-tighter  ">99.9% Clinical Precision</span>
                    </div>
                 </div>
              </div>

              <div className="bg-card/30 p-10 lg:p-16 rounded-[80px] border border-white/5 space-y-10 shadow-inner">
                 <form className="space-y-6">
                    <div className="relative group/input">
                       <div className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-accent/20">
                          <Activity className="w-5 h-5 text-primary" />
                       </div>
                       <input 
                          type="text" 
                          placeholder="Full Clinical Identity" 
                          className="w-full p-6 pl-20 rounded-[30px] bg-card/50 border border-border outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-black italic text-lg shadow-inner placeholder:text-foreground/20"
                       />
                    </div>
                    <div className="relative group/input">
                       <div className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-accent/20">
                          <Mail className="w-5 h-5 text-primary" />
                       </div>
                       <input 
                          type="email" 
                          placeholder="Verified Email Channel" 
                          className="w-full p-6 pl-20 rounded-[30px] bg-card/50 border border-border outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-black italic text-lg shadow-inner placeholder:text-foreground/20"
                       />
                    </div>
                    <div className="relative group/input">
                       <div className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-accent/20">
                          <Lock className="w-5 h-5 text-primary" />
                       </div>
                       <input 
                          type="password" 
                          placeholder="Secure Access Key" 
                          className="w-full p-6 pl-20 rounded-[30px] bg-card/50 border border-border outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-black italic text-lg shadow-inner placeholder:text-foreground/20"
                       />
                    </div>

                    <div className="flex items-center space-x-3 px-6 text-[10px] font-black italic   tracking-widest text-foreground/40 leading-relaxed mb-10 select-none">
                       <div className="w-4 h-4 rounded border border-primary/40 bg-primary/10 shrink-0" />
                       <p>I agree to the high-level security protocol and clinical data privacy acts under MedCare guidelines.</p>
                    </div>

                    <button className="w-full py-7 rounded-[40px] bg-secondary text-white font-black text-2xl   italic tracking-tighter shadow-3xl hover:bg-secondary/90 active:scale-95 transition-all flex items-center justify-center space-x-4 border-t-2 border-white/20">
                       <ArrowRight className="w-8 h-8" />
                       <span>Confirm Access</span>
                    </button>
                 </form>

                 <p className="mt-8 text-center text-sm font-black italic text-foreground/30   tracking-widest underline underline-offset-4 decoration-primary/20">
                    Already operational? <Link href="/auth/login" className="text-primary hover:scale-105 transition-all inline-block ml-2">Resume Session</Link>
                 </p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
