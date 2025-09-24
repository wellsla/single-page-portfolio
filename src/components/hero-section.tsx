
'use client';

import type { Dictionary } from '@/lib/get-dictionary';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  dictionary: Dictionary['hero'];
};

export function HeroSection({ dictionary }: HeroSectionProps) {
  const profileImage = placeholderData.placeholderImages.find((p) => p.id === 'profile-picture');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="hero"
      className="w-full py-20 md:py-28 lg:py-36 bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
        <div className="text-center md:text-left">
          <motion.h1
            className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {dictionary.name}
          </motion.h1>
          <motion.p
            className="font-headline mt-4 text-2xl font-medium text-foreground md:text-3xl"
            variants={itemVariants}
          >
            {dictionary.title}
          </motion.p>
          <motion.p
            className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:mx-0 md:text-xl"
            variants={itemVariants}
          >
            {dictionary.subtitle}
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#projects">{dictionary.cta}</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="profile-container"
          variants={imageVariants}
        >
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt="Welliton Slaviero"
              fill
              className="profile-image"
              data-ai-hint={profileImage.imageHint}
              priority
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
