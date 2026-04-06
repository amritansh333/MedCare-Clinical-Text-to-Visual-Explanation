'use client';

import { motion } from 'framer-motion';
import { User, Mail, ShieldCheck, History, Activity, HeartPulse, Award, LogOut, ChevronRight, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const user = {
    name: 'Jane Cooper',
    email: 'jane.cooper@medcare.ai',
    id: 'MC-72948-AX',
    reportsAnalysed: 24,
    status: 'Verified Patient',
    memberSince: 'Mar 2024'
  };

  const recentActivities = [
    { type: 'Analysis', condition: 'Diabetes Mellitus', date: 'Oct 2, 2026', time: '14:24' },
    { type: 'Analysis', condition: 'Hypertension', date: 'Sep 28, 2026', time: '09:12' },
    { type: 'Consultation', condition: 'Migraine Symptoms', date: 'Sep 15, 2026', time: '11:45' }
  ];

  return (
    <div className="py-32 lg:py-48 bg-transparent min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-20 items-start">
           
           {/* Sidebar Info */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="lg:col-span-1 space-y-10"
           >
              <div className="glass p-12 rounded-[60px] border border-white/10 shadow-3xl text-center relative overflow-hidden">
                 <div className="w-32 h-32 rounded-[40px] bg-gradient-to-tr from-primary to-secondary mx-auto mb-10 flex items-center justify-center shadow-2xl relative">
                    <User className="w-16 h-16 text-white" />
                    <div className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-white text-primary border-4 border-background shadow-xl">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                 </div>
                 <h2 className="text-4xl font-black italic tracking-tighter   mb-4">{user.name}</h2>
                 <p className="text-sm font-black text-foreground/40 tracking-widest   mb-10 italic">{user.id}</p>
                 
                 <div className="flex items-center justify-center space-x-3 px-6 py-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary mb-12">
                    <Award className="w-5 h-5 fill-secondary" />
                    <span className="text-xs font-black   tracking-tighter italic">Verified Member v4</span>
                 </div>

                 <div className="w-full h-px bg-border my-10" />

                 <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                       <p className="text-3xl font-black italic tracking-tighter  ">{user.reportsAnalysed}</p>
                       <p className="text-[10px] font-black   text-foreground/30 italic tracking-widest">Reports</p>
                    </div>
                    <div>
                       <p className="text-3xl font-black italic tracking-tighter  ">5K+</p>
                       <p className="text-[10px] font-black   text-foreground/30 italic tracking-widest">Points</p>
                    </div>
                 </div>
              </div>

              <div className="glass p-10 rounded-[50px] border border-border space-y-4">
                 <button className="w-full p-6 flex items-center justify-between rounded-3xl bg-accent/20 hover:bg-accent/40 transition-all font-black italic tracking-tighter   italic group">
                    <div className="flex items-center space-x-4">
                       <Settings className="w-5 h-5 text-primary" />
                       <span>Account Control</span>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
                 <button className="w-full p-6 flex items-center justify-between rounded-3xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all font-black italic tracking-tighter   italic group">
                    <div className="flex items-center space-x-4">
                       <LogOut className="w-5 h-5" />
                       <span>Terminate Session</span>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
              </div>
           </motion.div>

           {/* Main Activity Area */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-2 space-y-16"
           >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                 <div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter   italic leading-none mb-6">Patient <br /><span className="text-primary underline decoration-indigo-500/20 decoration-[30px] underline-offset-10">Interface</span></h1>
                    <p className="text-xl font-bold italic text-foreground/40   tracking-widest">Live clinical dashboard for Jane Cooper.</p>
                 </div>
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-16 h-16 rounded-[24px] border-4 border-background bg-card flex items-center justify-center font-black text-primary text-xl shadow-2xl">
                          <Activity className="w-8 h-8" />
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-10 border-t-4 border-border pt-16">
                 <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-black tracking-tighter   italic flex items-center space-x-4">
                       <History className="w-8 h-8 text-secondary" />
                       <span>Recent Historical Data</span>
                    </h3>
                    <button className="text-secondary font-black italic tracking-tighter underline underline-offset-4   italic">Export All Data</button>
                 </div>

                 <div className="space-y-6">
                    {recentActivities.map((act, i) => (
                       <div key={i} className="glass p-10 rounded-[50px] border border-border flex items-center justify-between group hover:border-primary/50 transition-all">
                          <div className="flex items-center space-x-8">
                             <div className="w-16 h-16 rounded-3xl bg-accent/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                <HeartPulse className="w-8 h-8 text-primary" />
                             </div>
                             <div>
                                <h4 className="text-2xl font-black tracking-tighter   italic">{act.condition}</h4>
                                <p className="text-[10px] font-black text-foreground/30   tracking-[0.4em] italic mb-1">{act.type}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-sm font-black italic tracking-tighter  ">{act.date}</p>
                             <p className="text-[10px] font-black text-foreground/20   tracking-[0.2em] italic">{act.time}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="p-16 rounded-[80px] bg-primary relative overflow-hidden shadow-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                 <div className="space-y-4">
                    <h3 className="text-4xl font-black italic tracking-tighter   text-white leading-none italic">MedCare Plus <br /><span className="text-indigo-200">Expansion Ready</span></h3>
                    <p className="text-white/60 font-black tracking-widest   italic text-sm">Scale your health understanding with premium data tiers.</p>
                 </div>
                 <button className="bg-white text-black px-12 py-6 rounded-[30px] font-black italic   tracking-tighter shadow-2xl hover:scale-105 active:scale-95 transition-all">Upgrade Portal Access</button>
              </div>

           </motion.div>
        </div>
      </div>
    </div>
  );
}
