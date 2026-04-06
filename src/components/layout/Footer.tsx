'use client';

import Link from 'next/link';
import { Activity, Mail, Phone, MapPin, Globe, ArrowRight, ShieldCheck, Database, FileText, MonitorCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-4 bg-background border-t border-foreground/10 text-primary no-italic relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-full border-l border-foreground/5 bg-foreground/5 -z-10" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
          
          <div className="max-w-2xl space-y-5">
            <Link href="/" className="flex items-center space-x-4">
              <Activity className="h-6 w-8 stroke-[3px]" />
              <span className="text-3xl font-black tracking-tighter">
                MediCare.ai
              </span>
            </Link>
            
            <p className="text-2xl font-black tracking-extratight leading-[0.9] select-none text-foreground/40">
              Simplifying medical reports with AI-powered insights and making healthcare information clear, accessible, and understandable
            </p>

            <div className="flex flex-col space-y-1 border-l-4 border-primary pl-8 text-[13px] font-black tracking-[0.1em] opacity-40">
               <span>This platform provides AI-generated insights for informational purposes only.</span>
               <span>It does not replace professional medical advice, diagnosis, or treatment.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-24 lg:gap-10 font-inter-tight font-black tracking-widest text-[14px]">
            <div className="space-y-5">
              <span className="text-primary/40 block pb-4 border-b border-foreground/10">Navigation</span>
              <ul className="space-y-1">
                <li><Link href="/" className="hover:text-foreground/40 transition-all">Home</Link></li>
                <li><Link href="/analyze" className="hover:text-foreground/40 transition-all">Solution</Link></li>
                <li><Link href="/case-studies" className="hover:text-foreground/40 transition-all">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-foreground/40 transition-all">About Us</Link></li>
              </ul>
            </div>
            <div className="space-y-5">
              <span className="text-primary/40 block pb-4 border-b border-foreground/10">Core Features</span>
              <ul className="space-y-1">
                <li><Link href="/analyze" className="hover:text-foreground/40 transition-all">Report Analysis</Link></li>
                <li><Link href="/analyze" className="hover:text-foreground/40 transition-all">AI Explanations</Link></li>
                <li><Link href="/analyze" className="hover:text-foreground/40 transition-all">Video & Audio Guidance</Link></li>
              </ul>
            </div>
            <div className="space-y-5">
              <span className="text-primary/40 block pb-4 border-b border-foreground/10">Support</span>
              <ul className="space-y-1">
                <li className="flex items-center space-x-3"><Mail className="w-3.5 h-3.5" /><span>help@medicare.ai</span></li>
                <li className="flex items-center space-x-3"><Phone className="w-3.5 h-3.5" /><span>+91-9876-543-210</span></li>
                <li className="flex items-center space-x-3"><MapPin className="w-3.5 h-3.5" /><span>Kanpur, UP, India</span></li>
                <li><Link href="/contact" className="hover:text-foreground/40 transition-all">@   Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-4 pt-16 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-10 font-inter-tight font-black   tracking-widest text-[10px] text-foreground/20">
           <div className="flex items-center space-x-12">
              <span>© 2026 MEDCARE — SYSTEMIC CLINICAL ANALYTICS</span>
              <div className="hidden md:flex space-x-6 text-primary">
                 <MonitorCheck className="w-4 h-4 cursor-pointer hover:opacity-50" />
                 <Globe className="w-4 h-4 cursor-pointer hover:opacity-50" />
                 <Activity className="w-4 h-4 cursor-pointer hover:opacity-50" />
              </div>
           </div>
           <div className="flex items-center space-x-8">
              <span className="flex items-center space-x-2"><ShieldCheck className="w-3.5 h-3.5" /> <span>HOSPITAL ENCRYPTED SHA-512</span></span>
              <span className="flex items-center space-x-2"><Database className="w-3.5 h-3.5" /> <span>LOCAL INSTANCE v4.21</span></span>
           </div>
        </div>
      </div>
    </footer>
  );
}
