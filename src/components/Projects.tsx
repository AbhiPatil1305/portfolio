import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import ImageCarousel from './ui/ImageCarousel';

export default function Projects() {
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
              {/* Project Image Placeholder */}
              <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-surface border border-borderDark relative group group-hover/card:border-accent/30 group-hover/card:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="font-space font-bold tracking-widest text-accent uppercase">View Project</p>
                </div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#27272A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-secondaryText/50 font-space text-2xl font-bold bg-surface/50">
                  {project.images && project.images.length > 0 ? (
                    <ImageCarousel images={project.images} />
                  ) : (
                    project.imagePlaceholder
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-2xl md:text-3xl font-space font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-primaryText font-medium mb-4">{project.description}</p>
                
                <div className="space-y-4 mb-8 text-secondaryText">
                  <div>
                    <strong className="text-primaryText">Problem:</strong> {project.problem}
                  </div>
                  <div>
                    <strong className="text-primaryText">Solution:</strong> {project.solution}
                  </div>
                  <div>
                    <strong className="text-primaryText">Role:</strong> {project.contribution}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
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
                  
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-borderDark rounded-lg font-medium hover:bg-borderDark/50 transition-colors text-primaryText">
                      Source <Github size={18} />
                    </a>
                  ) : (
                    <button disabled className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-borderDark rounded-lg font-medium cursor-not-allowed text-secondaryText opacity-50">
                      Source <Github size={18} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
