'use client';

import { useState } from 'react';
import { AnalyzeForm, ResultDisplay, SkeletonLoader } from '@/components/analyze/AnalyzeComponents';
import { AnalysisResult } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertCircle, Sparkles, Activity } from 'lucide-react';

export default function AnalyzePage() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [promptText, setPromptText] = useState('');

  return (
    <div className="py-20 lg:py-4 bg-background min-h-screen relative no-italic">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        <div className="flex flex-col items-center mb-20 text-center">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="px-5 py-2 rounded-md bg-white border border-border text-maroon mb-8 text-[11px] font-bold tracking-widest shadow-sm"
           >
              <span>Analyze Your Medical Reports Here!</span>
           </motion.div>
           <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight   text-maroon">MEDCARE <br />ANALYSIS PORTAL</h1>
           <p className="text-[16px] text-foreground/40 max-w-2xl mx-auto font-medium leading-relaxed mb-12 tracking-wide opacity-80">
             Paste your symptoms or upload your medical report to receive AI-driven insights, explanations, and guided recommendations.
           </p>
        </div>

        <div className="flex flex-col items-center">
           {!result && !loading && (
              <AnalyzeForm onResult={setResult} onLoading={setLoading} onPromptText={setPromptText} />
           )}

           <AnimatePresence mode="wait">
             {loading && (
               <motion.div 
                 key="skeleton"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="w-full"
               >
                 <SkeletonLoader />
               </motion.div>
             )}
             
             {result && !loading && (
               <motion.div 
                 key="result"
                 className="w-full flex flex-col items-center"
               >
                 <div className="w-full max-w-6xl flex justify-start mb-10">
                    <button
                      onClick={() => { setResult(null); setPromptText(''); }}
                      className="group flex items-center space-x-3 px-8 py-3 rounded-md border border-border bg-white font-bold tracking-widest   transition-all hover:bg-maroon hover:text-white"
                    >
                      <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                      <span className="text-[12px]">NEW ANALYSIS</span>
                    </button>
                 </div>
                 <ResultDisplay result={result} promptText={promptText} />
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {!loading && !result && (
           <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl mx-auto mt-32 p-10 lg:p-14 border border-red-100 bg-red-50/20 rounded-lg flex flex-col md:flex-row items-center gap-10 text-center md:text-left relative"
           >
              <div className="p-4 rounded-full bg-red-100 shadow-sm">
                 <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <div className="space-y-4">
                 <p className="font-bold text-lg text-red-600   tracking-tighter">Clinical Precaution Required</p>
                 <p className="text-[13px] text-red-950/40 font-bold tracking-widest">
                    MediCare.ai provides AI-generated insights for informational purposes only and should not be considered a substitute for professional medical advice.
                 </p>
              </div>
           </motion.div>
        )}
      </div>
    </div>
  );
}
