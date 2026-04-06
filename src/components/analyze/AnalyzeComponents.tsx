'use client';

import { useState, useEffect } from 'react';
import { Upload, MessageSquare, Loader2, Send, FileText, CheckCircle2, History, ShieldCheck, PlayCircle, Star, AlertTriangle, Activity, Stethoscope, ChevronRight, Hash, Database, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnalysisResult } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const labelStyle = "text-[12px] font-bold   tracking-[0.1em] text-primary/60 mb-3 block";

export function AnalyzeForm({ onResult, onLoading, onPromptText }: { onResult: (result: AnalysisResult) => void, onLoading: (loading: boolean) => void, onPromptText: (text: string) => void }) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input && !file) return;
    
    setLoading(true);
    onLoading(true);
    onPromptText(input);

    // Initial 5.5 second artificially proper skeleton delay
    const start = Date.now();
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      
      const elapsed = Date.now() - start;
      const targetDelay = 5500; // 5.5 seconds for "Proper" clinical feel

      if (elapsed < targetDelay) {
         await new Promise(resolve => setTimeout(resolve, targetDelay - elapsed));
      }
      
      onResult(data);
    } catch (error) {
      console.error('Diagnostic error:', error);
    } finally {
      setLoading(false);
      onLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-10 lg:p-16 bg-white border border-border rounded-lg shadow-xl relative no-italic overflow-hidden"
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
           <label className={cn(labelStyle, "flex items-center space-x-2")}>
             <MessageSquare className="w-4 h-4" />
             <span>Provide Patient Symptoms or Medical Text</span>
           </label>
           <textarea
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className="user-input-text w-full h-48 p-6 rounded-md border border-border bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none text-[16px] placeholder:text-foreground/20 shadow-inner"
             placeholder="Enter your symptoms or medical report below to begin analysis."
           />
        </div>

        <div className="space-y-4">
           <label className={cn(labelStyle, "flex items-center space-x-2")}>
             <Upload className="w-4 h-4" />
             <span>Upload Supportive Clinical Asset (PDF/Image)</span>
           </label>
           <div className="relative group cursor-pointer h-24">
              <input
                 type="file"
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                 onChange={(e) => setFile(e.target.files?.[0] || null)}
                 accept=".pdf,image/*"
              />
              <div className={cn(
                 "w-full h-full border border-dashed border-border group-hover:border-primary flex items-center justify-center transition-all bg-slate-50/50 rounded-md",
                 file ? "border-primary bg-primary/5" : ""
              )}>
                 <Upload className={cn("w-5 h-5 mr-3 text-foreground/40", file ? "text-primary" : "group-hover:text-primary")} />
                 <p className="text-[14px] font-medium opacity-40">
                    {file ? file.name : "Secure Drop-zone for Medical Documentation"}
                 </p>
              </div>
           </div>
        </div>

        <button
          type="submit"
          disabled={loading || (!input && !file)}
          className={cn(
            "w-full py-5 rounded-md font-bold text-[15px]   tracking-widest flex items-center justify-center space-x-4 transition-all shadow-md active:scale-95 group",
            loading || (!input && !file) 
              ? "bg-slate-100 text-slate-400 border border-slate-200 shadow-none cursor-not-allowed" 
              : "bg-primary text-white hover:opacity-90"
          )}
        >
          {loading ? (
             <div className="flex items-center space-x-3">
               <Loader2 className="w-5 h-5 animate-spin" />
               <span>SYNTHESIZING CLINICAL DATA...</span>
             </div>
          ) : (
            <>
              <span>Initiate Report Synthesis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 space-y-12 p-12 border border-border bg-white rounded-lg animate-pulse no-italic">
       <div className="flex items-center space-x-6">
          <div className="w-12 h-12 rounded-md bg-slate-100" />
          <div className="space-y-3 flex-1">
             <div className="h-4 w-1/3 bg-slate-100 rounded" />
             <div className="h-6 w-full bg-slate-100 rounded" />
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
             <div className="h-32 w-full bg-slate-50 rounded" />
             <div className="h-32 w-full bg-slate-50 rounded" />
          </div>
          <div className="space-y-6">
             <div className="h-40 w-full bg-slate-50 rounded" />
          </div>
       </div>

       <div className="flex flex-col items-center py-10 opacity-100">
          <Activity className="w-12 h-12 text-primary animate-bounce" />
          <p className="text-[12px] font-bold text-primary   tracking-[0.5em] mt-6">Deep Context Synthesis in Progress...</p>
       </div>
    </div>
  );
}

export function ResultDisplay({ result, promptText }: { result: AnalysisResult, promptText: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto mt-20 relative no-italic mb-32"
    >
      <div className="bg-white border border-border rounded-lg shadow-2xl overflow-hidden relative">
          {/* User Input Mirror */}
          <div className="p-8 border-b border-border bg-slate-50/50">
             <span className="text-[11px] font-bold text-slate-400   tracking-widest mb-3 block">User Provided Analysis Data</span>
             <p className="user-input-text text-xl font-medium leading-relaxed italic border-l-4 border-slate-200 pl-6 py-1 select-all">
                {promptText}
             </p>
          </div>

          <div className="p-10 lg:p-14 border-b border-border flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-md bg-maroon flex items-center justify-center shadow-lg">
                   <Activity className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-1">
                   <span className="text-[11px] font-bold   tracking-[0.2em] text-maroon/70">Clinical Mapping Result</span>
                   <h2 className="text-3xl font-black text-black-data   tracking-tight">ANALYSIS COMPLETED</h2>
                </div>
             </div>
             
             <div className={cn(
                "px-6 py-2 rounded-md font-bold text-[14px]   border",
                result.riskLevel === 'High' ? "text-red-600 border-red-100 bg-red-50" :
                result.riskLevel === 'Medium' ? "text-orange-600 border-orange-100 bg-orange-50" :
                "text-green-600 border-green-100 bg-green-50"
             )}>
                RISK STATUS: {result.riskLevel}
             </div>
          </div>

          <div className="p-10 lg:p-14 space-y-12">
             <div className="space-y-2">
                <span className={labelStyle}>Primary Identified Condition</span>
                <h3 className="text-5xl font-black text-maroon   tracking-tight leading-none">{result.disease}</h3>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-slate-100 pt-12">
                <div className="space-y-10">
                   <div className="space-y-4">
                      <h4 className="text-[12px] font-black flex items-center tracking-widest   gap-3 text-black">
                         <div className="w-1.5 h-4 bg-maroon" />
                         Diagnostic Summary
                      </h4>
                      <p className="text-[16px] font-medium text-black leading-relaxed">
                         {result.summary}
                      </p>
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-[12px] font-black flex items-center tracking-widest   gap-3 text-black">
                         <div className="w-1.5 h-4 bg-maroon" />
                         Management Protocol
                      </h4>
                      <div className="grid gap-3">
                         {result.medication.map((m, i) => (
                            <div key={i} className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded">
                               <span className="text-[14px] font-black text-black   tracking-tight">{m.name}</span>
                               <span className="text-[12px] font-bold text-slate-400  ">{m.dosage}</span>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="space-y-5">
                      <h4 className="text-[12px] font-black flex items-center tracking-widest   gap-3 text-red-600">
                         <AlertTriangle className="w-4 h-4" />
                         Clinical Precautions
                      </h4>
                      <div className="space-y-3">
                          {result.precautions.map((p, i) => (
                            <div key={i} className="text-[14px] font-bold text-black p-5 bg-red-50/30 border border-red-100 border-l-4 leading-relaxed rounded-r-md">
                               {p}
                            </div>
                          ))}
                      </div>
                   </div>

                   <div className="space-y-5">
                      <h4 className="text-[12px] font-black flex items-center tracking-widest   gap-3 text-black">
                         <PlayCircle className="w-4 h-4" />
                         Visual Guidance Node
                      </h4>
                      <div className="aspect-video w-full rounded-md overflow-hidden bg-black relative shadow-lg group">
                         <video
                            src={result.videoPath}
                            className="w-full h-full object-cover"
                            controls
                            poster={result.imagePath}
                         />
                      </div>
                   </div>
                </div>
             </div>
          </div>
      </div>
    </motion.div>
  );
}
