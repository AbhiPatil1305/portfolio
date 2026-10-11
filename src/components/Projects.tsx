import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from './ui/ImageCarousel';

type Project = typeof projects[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-borderDark rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface/80 backdrop-blur-sm border border-borderDark text-secondaryText hover:text-primaryText hover:bg-surface transition-all"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="w-full aspect-video rounded-t-2xl overflow-hidden bg-surface relative">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#27272A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute inset-0 flex items-center justify-center bg-surface/50">
              {project.images && project.images.length > 0 ? (
                <ImageCarousel images={project.images} imageContain={project.imageContain} imageBg={project.imageBg} />
              ) : (
                <span className="text-secondaryText/50 font-space text-2xl font-bold">{project.imagePlaceholder}</span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-space font-bold mb-2">{project.title}</h3>
            <p className="text-lg text-secondaryText mb-8">{project.description}</p>

            <div className="space-y-6 mb-8">
              <div className="p-4 rounded-xl bg-surface/50 border border-borderDark">
                <h4 className="text-sm font-space font-semibold text-accent uppercase tracking-wider mb-2">🔍 Problem</h4>
                <p className="text-secondaryText leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-borderDark">
                <h4 className="text-sm font-space font-semibold text-accent uppercase tracking-wider mb-2">💡 Solution</h4>
                <p className="text-secondaryText leading-relaxed">{project.solution}</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/50 border border-borderDark">
                <h4 className="text-sm font-space font-semibold text-accent uppercase tracking-wider mb-2">🛠️ My Role</h4>
                <p className="text-secondaryText leading-relaxed">{project.contribution}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-space font-semibold text-accent uppercase tracking-wider mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-borderDark">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Live Demo <ExternalLink size={18} />
                </a>
              ) : (
                <button disabled className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-secondaryText rounded-lg font-medium cursor-not-allowed border border-borderDark opacity-50">
                  Live Demo <ExternalLink size={18} />
                </button>
              )}

              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-borderDark rounded-lg font-medium hover:bg-borderDark/50 transition-colors text-primaryText">
                  Source <Github size={18} />
                </a>
              ) : (
                <button disabled className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-borderDark rounded-lg font-medium cursor-not-allowed text-secondaryText opacity-50">
                  Source <Github size={18} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">Featured Work</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-secondaryText max-w-xl">
              A selection of projects that showcase my ability to solve complex problems with clean, scalable code and intuitive design.
            </p>
          </div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} group/card hover:-translate-y-2 transition-transform duration-500`}
            >
              {/* Project Image — clickable to open modal */}
              <div
                className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-surface border border-borderDark relative group cursor-pointer group-hover/card:border-accent/30 group-hover/card:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <Eye size={20} className="text-accent" />
                    <p className="font-space font-bold tracking-widest text-accent uppercase">View Project</p>
                  </div>
                </div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#27272A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-secondaryText/50 font-space text-2xl font-bold bg-surface/50">
                  {project.images && project.images.length > 0 ? (
                    <ImageCarousel images={project.images} imageContain={project.imageContain} imageBg={project.imageBg} />
                  ) : (
                    project.imagePlaceholder
                  )}
                </div>
              </div>

              {/* Project Summary — clean & concise */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-2xl md:text-3xl font-space font-bold mb-3">{project.title}</h3>
                <p className="text-secondaryText mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 hover:scale-105 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primaryText text-background rounded-lg font-medium hover:bg-white/90 transition-colors">
                      Live Demo <ExternalLink size={18} />
                    </a>
                  ) : (
                    <button disabled className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-secondaryText rounded-lg font-medium cursor-not-allowed border border-borderDark opacity-50">
                      Live Demo <ExternalLink size={18} />
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent border border-accent/30 rounded-lg font-medium hover:bg-accent/20 transition-colors"
                  >
                    View Details <Eye size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
