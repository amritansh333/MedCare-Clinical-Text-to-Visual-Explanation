import { HeartPulse, Target, ShieldCheck, HelpCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20 bg-transparent min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About MediCare.ai</h1>
           <p className="text-lg md:text-xl text-foreground/70 leading-relaxed italic">
             Merging bleeding-edge AI with medical intelligence to simplify patient understanding.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>Our Mission</span>
                 </h2>
                 <p className="text-foreground/70 leading-relaxed italic">
                    Our mission is to simplify medical understanding for everyone, regardless of their medical background. We believe that every patient should have the tools to understand their own health data at their fingertips.
                 </p>
              </div>

              <div className="space-y-4">
                 <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <HelpCircle className="w-6 h-6 text-secondary" />
                    <span>Why MedCare AI?</span>
                 </h2>
                 <p className="text-foreground/70 leading-relaxed italic">
                    Medical reports are often filled with jargon that can be confusing and stressful for patients. MedCare AI bridge the gap between technical data and human understanding, providing immediate clarity when it matters most.
                 </p>
              </div>
           </div>

           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white p-10 rounded-3xl border border-border shadow-soft flex flex-col items-center">
                 <HeartPulse className="w-20 h-20 text-primary mb-6 animate-pulse" />
                 <h3 className="text-xl font-bold mb-4">Educational Impact</h3>
                 <p className="text-center text-sm text-foreground/60 leading-relaxed italic">
                    By making health information accessible, we empower users to have better conversations with their doctors and take proactive steps in their health journey.
                 </p>
              </div>
           </div>
        </div>

        <div className="mt-24 p-12 rounded-3xl bg-gray-50 border border-border text-center">
           <h2 className="text-3xl font-bold mb-6">Important Medical Note</h2>
           <p className="text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed italic">
              MedCare AI is an information-only tool designed to help you understand your reports better. It is <span className="text-primary font-bold">NOT</span> a replacement for a professional doctor. Artificial intelligence can make mistakes or overlook context that a trained medical professional would see. Always prioritize consultation with your healthcare provider for any diagnosis or treatment plan.
           </p>
           <div className="flex items-center justify-center space-x-3 mt-8">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold   tracking-widest text-green-700 underline">Safety First</span>
           </div>
        </div>
      </div>
    </div>
  );
}
