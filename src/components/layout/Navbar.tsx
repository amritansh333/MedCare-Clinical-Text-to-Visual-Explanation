'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Activity, ArrowRight } from 'lucide-react';
import { useState, useEffect, FC } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = {
name: string;
href: string;
};

const navItems: NavItem[] = [
{ name: 'Home', href: '/' },
{ name: 'Solution', href: '/analyze' },
{ name: 'Case Studies', href: '/case-studies' },
{ name: 'About Us', href: '/about' },
{ name: 'Contact', href: '/contact' },
];

const Navbar: FC = () => {
const pathname = usePathname();
const [isOpen, setIsOpen] = useState<boolean>(false);
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState<boolean>(false);
const [scrolled, setScrolled] = useState<boolean>(false);

useEffect((): void => {
setMounted(true);
}, []);

useEffect((): (() => void) => {
const handleScroll = (): void => {
setScrolled(window.scrollY > 10);
};


window.addEventListener('scroll', handleScroll);
return (): void => window.removeEventListener('scroll', handleScroll);


}, []);

return (
<nav
className={cn(
"relative sticky top-0 z-50 h-24 flex items-center no-italic transition-all duration-500",
scrolled
? "bg-background/10 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-30"
: "bg-background"
)}
> <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full"> <div className="flex justify-between h-full items-center  font-inter-tight font-black tracking-tighter">


      <div className="flex items-center space-x-12">
        <Link href="/" className="flex items-center space-x-3 group">
          <Activity className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-primary leading-none">
            MediCare.ai
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8 border-l border-foreground/10 pl-12 h-10">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[12px] font-bold tracking-widest transition-opacity hover:opacity-50",
                pathname === item.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-10 h-10">
        <button
          onClick={(): void => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-foreground/40 hover:text-primary transition-colors focus:outline-none"
        >
          {mounted &&
            (theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            ))}
        </button>

        <div className="w-px h-full bg-foreground/10 mx-4" />

        <Link
          href="/auth/login"
          className="flex items-center space-x-2 text-[12px] font-bold tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors"
        >
          <span>Sign in</span>
        </Link>

        <Link
          href="/analyze"
          className="bg-primary text-primary-foreground px-8 py-4 text-[12px] font-black tracking-widest hover:bg-primary/90 transition-all border border-primary flex items-center gap-3"
        >
          <span>Try it Now!</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="lg:hidden flex items-center space-x-6">
        <button
          onClick={(): void => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-foreground/40"
        >
          {mounted &&
            (theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            ))}
        </button>

        <button
          onClick={(): void => setIsOpen(!isOpen)}
          className="text-foreground/60 hover:text-primary focus:outline-none"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  </div>

  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '100vh', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="lg:hidden fixed inset-0 z-[100] bg-background p-10 flex flex-col pt-32 no-italic overflow-hidden"
      >
        <button
          onClick={(): void => setIsOpen(false)}
          className="absolute top-8 right-8 text-foreground/40"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col space-y-8 font-inter-tight font-black text-5xl   tracking-tighter">
          {navItems.map((item: NavItem, i: number) => (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={item.href}
                onClick={(): void => setIsOpen(false)}
                className={cn(
                  "block transition-all hover:pl-4",
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/30"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto pb-20 border-t border-foreground/10 pt-10">
          <Link
            href="/analyze"
            onClick={(): void => setIsOpen(false)}
            className="bg-primary text-primary-foreground w-full py-8 text-center text-xl font-black tracking-widest block   shadow-2xl"
          >
            Begin Analysis Protocol
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>


);
};

export default Navbar;
