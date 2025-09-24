'use client';

import type { Dictionary } from '@/lib/get-dictionary';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

type AboutSectionProps = {
  dictionary: Dictionary['about'];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-card">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="mx-auto max-w-3xl text-center" variants={itemVariants}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            {dictionary.title}
          </h2>
          <p className="mt-4 text-foreground/80 md:text-lg">{dictionary.description}</p>
        </motion.div>

        <motion.div className="relative mt-12" variants={containerVariants}>
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          <div className="space-y-12">
            {dictionary.timeline.map((item, index) => (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                </div>
                <div
                  className={`flex w-full items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className="w-full max-w-md px-4 md:w-1/2 md:px-8">
                    <Card className="shadow-md transition-shadow duration-300 hover:shadow-lg hover:scale-105">
                      <CardHeader>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                        <CardDescription className="pt-2">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
