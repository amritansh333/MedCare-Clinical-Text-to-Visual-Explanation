'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="py-40 min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent">
         <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="glass p-16 lg:p-24 rounded-[80px] border border-white/10 shadow-3xl text-center relative group overflow-hidden">
           <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
           
           <div className="flex items-center justify-center space-x-3 mb-10">
              <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-2xl">
                 <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-black italic tracking-tighter   whitespace-nowrap">ACCESS PORTAL</span>
           </div>

           <h1 className="text-5xl font-black italic tracking-tighter   mb-6 underline decoration-primary/20 decoration-8">Login</h1>
           <p className="text-xl font-bold italic text-foreground/40 mb-12   tracking-widest">Global Med-Encryption Tier v3</p>

           <form className="space-y-8">
              <div className="relative group/input">
                 <div className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-accent/20">
                    <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <input 
                    type="email" 
                    placeholder="Enter Verified Email" 
                    className="w-full p-8 pl-24 rounded-[40px] bg-card/40 border border-border outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-black italic text-xl shadow-inner placeholder:text-foreground/20"
                 />
              </div>

              <div className="relative group/input">
                 <div className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-accent/20">
                    <Lock className="w-5 h-5 text-primary" />
                 </div>
                 <input 
                    type="password" 
                    placeholder="Security Credential" 
                    className="w-full p-8 pl-24 rounded-[40px] bg-card/40 border border-border outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-black italic text-xl shadow-inner placeholder:text-foreground/20"
                 />
              </div>

              <div className="flex items-center justify-between px-8 text-sm font-black italic tracking-widest text-primary/60   group cursor-pointer hover:text-primary transition-colors">
                 <span>Forgot Credentials?</span>
                 <ShieldCheck className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <button className="w-full py-8 rounded-[40px] bg-primary text-white font-black text-2xl   italic tracking-tighter shadow-3xl hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center space-x-4 border-t-2 border-white/20">
                 <LogIn className="w-8 h-8" />
                 <span>Unlock Access</span>
              </button>
           </form>

           <p className="mt-12 text-lg font-black italic text-foreground/30   tracking-widest">
              New across healthcare edge? <Link href="/auth/signup" className="text-primary hover:underline ml-2">Request Onboarding</Link>
           </p>
        </div>
      </motion.div>
    </div>
  );
}
