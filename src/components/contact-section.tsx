'use client';

import type { Dictionary } from '@/lib/get-dictionary';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ContactSectionProps = {
  dictionary: Dictionary['contact'];
};

export function ContactSection({ dictionary }: ContactSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-16 md:py-24 bg-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container max-w-3xl mx-auto text-center">
        <motion.div variants={itemVariants}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            {dictionary.title}
          </h2>
          <p className="mt-4 text-foreground/80 md:text-lg max-w-2xl mx-auto">
            {dictionary.description}
          </p>

          <div className="mt-12">
            <p className="text-lg font-medium text-foreground mb-8">{dictionary.connect}</p>
            <div className="flex items-center justify-center gap-8 md:gap-12">
              <Link
                href="https://github.com/wellsla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:scale-110"
              >
                <Github className="h-8 w-8 md:h-10 md:w-10" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/welliton-slaviero-61aa86243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:scale-110"
              >
                <Linkedin className="h-8 w-8 md:h-10 md:w-10" />
              </Link>
              <Link
                href="mailto:welliton.slaviero@hotmail.com"
                aria-label="Email"
                className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:scale-110"
              >
                <Mail className="h-8 w-8 md:h-10 md:w-10" />
              </Link>
              <Link
                href="tel:+5554996947884"
                aria-label="Phone"
                className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:scale-110"
              >
                <Phone className="h-8 w-8 md:h-10 md:w-10" />
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-foreground/60">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  welliton.slaviero@hotmail.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +55 (54) 99694-7884
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
