'use client';

import type { Dictionary } from '@/lib/get-dictionary';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ExternalLink, Lock } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import { motion } from 'framer-motion';

type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const allPlaceholders: ImagePlaceholder[] = placeholderData.placeholderImages;

// Project links mapping
const projectLinks: Record<string, { url?: string; isPrivate: boolean }> = {
  'customer-service-manager': {
    url: 'https://play.google.com/store/apps/details?id=com.soluct.appgestoratendimentos&hl=en',
    isPrivate: false,
  },
  'real-estate-website': {
    url: 'https://confiancaavaliacoes.com.br/',
    isPrivate: false,
  },
  'rpg-sheet-creator': {
    url: 'https://github.com/wellsla/table-sheet-frontend',
    isPrivate: false,
  },
  'ml-expense-prediction': {
    url: 'https://docs.google.com/presentation/d/17e8jFqYFTk5XEBLBO53crdmKQJY1AHXk/edit?usp=sharing&ouid=105723829493913552066&rtpof=true&sd=true',
    isPrivate: false,
  },
  'unicred-invest': {
    isPrivate: true,
  },
  'solusjur': {
    isPrivate: true,
  },
};

type ProjectsSectionProps = {
  dictionary: Dictionary['projects'];
};

export function ProjectsSection({ dictionary }: ProjectsSectionProps) {
  const getPlaceholder = (id: string) => {
    return allPlaceholders.find((p) => p.id === id) || allPlaceholders[0];
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <TooltipProvider delayDuration={300}>
      <motion.section
        id="projects"
        className="w-full py-16 md:py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.div className="mx-auto max-w-3xl text-center" variants={itemVariants}>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              {dictionary.title}
            </h2>
            <p className="mt-4 text-foreground/80 md:text-lg">{dictionary.description}</p>
          </motion.div>

          <motion.div
            className="projects-grid mt-12"
            variants={containerVariants}
          >
            {dictionary.items.map((project) => {
              const placeholder = getPlaceholder(project.id);
              return (
                <motion.div key={project.id} variants={itemVariants} className="relative">
                  <Card className="project-card flex h-full flex-col overflow-hidden relative">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <Image
                        src={placeholder.imageUrl}
                        alt={project.title}
                        fill
                        className="project-image"
                        data-ai-hint={placeholder.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                      <CardDescription className="flex-grow pt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-medium">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        {(() => {
                          const projectLink = projectLinks[project.id];
                          if (projectLink?.isPrivate) {
                            return (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="pointer-events-auto"                                   
                                  >
                                    <Lock className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent side="left" className="z-50">
                                  <p>{dictionary.tooltips.privateProject}</p>
                                </TooltipContent>
                              </Tooltip>
                            );
                          } else if (projectLink?.url) {
                            return (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="transition-all hover:bg-accent hover:text-accent-foreground"
                                  >
                                    <Link
                                      href={projectLink.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent side="left" className="z-50">
                                  <p>{dictionary.tooltips.viewProject}</p>
                                </TooltipContent>
                              </Tooltip>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </TooltipProvider>
  );
}