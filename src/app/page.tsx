import { Hero, Testimonials, FAQSection } from '@/components/home/HomeComponents';
import { Target, ShieldCheck, PlayCircle, HelpCircle, ArrowRight, User, Stethoscope, CheckCircle2, HeartPulse, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col relative no-italic">
      <Hero />
      
      {/* Mid-section with Waverly Editorial Dividers */}
      <section className="py-48 bg-background no-italic border-b border-foreground/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
           <div className="flex flex-col lg:flex-row items-stretch border border-foreground/10 h-auto lg:h-[600px]">
              
              <div className="lg:w-1/2 p-24 lg:p-20 space-y-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-foreground/10">
                 <div className="flex items-center space-x-6 text-[15px] font-black tracking-[0.4em] text-primary">
                    <Stethoscope className="w-6 h-6 stroke-[3px]" />
                    <span>Smart Medical Interpretation Engine</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black tracking-extratight leading-none text-primary">From Complexity <br />To Clarity</h2>
                 <p className="text-xl font-bold text-foreground/40 leading-[1.4] tracking-widest max-w-sm">
                    Medical reports are often difficult to understand. MediCare.ai breaks down technical terminology into easy explanations so you know exactly what your report means.
                 </p>
                 <Link href="/case-studies" className="inline-flex items-center space-x-6 text-[14px] font-black border-b-2 border-primary hover:bg-primary hover:text-primary-foreground hover:px-10 py-4 transition-all tracking-widest group">
                    <span>Explore Case Insights</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-500" />
                 </Link>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 grid-rows-2 bg-foreground/5 overflow-hidden">
  {[
    {
      title: "1. INPUT PROCESSING",
      desc: "User enters symptoms or medical report. System extracts key clinical data."
    },
    {
      title: "2. AI SCRIPT GENERATION",
      desc: "AI converts medical data into simplified explanation and structured insights."
    },
    {
      title: "3. MULTIMEDIA GENERATION",
      desc: "Text is transformed into audio narration and visual explanation video."
    },
    {
      title: "4. RENDERING OUTPUT",
      desc: "Final video, audio, and explanation are displayed in an interactive interface."
    }
  ].map((item, i) => (
    <div
      key={i}
      className="border-b border-r border-foreground/10 h-full min-h-[300px] flex flex-col items-center justify-center 
      bg-primary text-primary-foreground 
      hover:bg-background hover:text-primary 
      transition-all duration-500"
    >
      <Activity className="w-16 h-16 mb-6 transition-colors duration-500" />
      
      <span className="text-[16px] font-black tracking-widest text-center">
        {item.title}
      </span>

      <p className="mt-4 text-[12px] font-bold tracking-widest text-center max-w-[220px] leading-relaxed opacity-80">
        {item.desc}
      </p>
    </div>
  ))}
</div>

               

           </div>
        </div>
      </section>

      <Testimonials />
      
      <FAQSection />

      {/* Overhauled Access/Join section with Waverly Editorial Boldness */}
      <section className="py-48 bg-primary no-italic overflow-hidden relative">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-32">
               <div className="max-w-4xl space-y-12">
                  
                  <h2 className="text-7xl md:text-[5rem] font-black tracking-extratight text-primary-foreground leading-[0.8]   select-none">
                     Take Control Of Your<br/> Health <br/>Information
                  </h2>
               </div>
               
               <div className="w-full max-w-2xl bg-primary-foreground/5 p-16 lg:p-24 border border-primary-foreground/10 space-y-16 shadow-[0_80px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div>
                    <h3 className="text-3xl font-black   tracking-tighter text-primary-foreground mb-4">Get Started</h3>
                    <p className="text-[12px] font-bold text-primary-foreground/40   tracking-[0.3em]">Analyze your report, understand your condition, and make informed decisions with confidence using MediCare.ai.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <input 
                      type="text" 
                      placeholder="Enter your symptoms below to begin analysis." 
                      className="w-full bg-primary-foreground/10 text-primary-foreground p-8 text-[14px] font-black tracking-widest outline-none border border-primary-foreground/20 focus:border-primary-foreground/60 transition-all   placeholder:text-primary-foreground/20"
                    />
                    <button className="w-full bg-primary-foreground text-primary p-10 font-black text-xl hover:opacity-90 active:scale-[0.98] transition-all   tracking-[0.2em] shadow-3xl">
                       Analyze Report
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
