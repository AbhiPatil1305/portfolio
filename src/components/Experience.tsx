import { motion } from 'framer-motion';
import { education, training } from '../data/experience';
import { GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 hover:text-accent hover:translate-x-2 transition-all duration-300 cursor-default inline-block">Education & Training</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-space font-bold mb-8 text-primaryText flex items-center gap-3">
              <GraduationCap className="text-accent" /> Education
            </h3>
            <div className="relative border-l-2 border-borderDark ml-3 md:ml-6 space-y-12 pb-4">
              {education.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-12 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:scale-125 group-hover:bg-white transition-all duration-300"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-space font-bold text-primaryText">{exp.role}</h3>
                    <span className="inline-block px-3 py-1 bg-surface border border-borderDark rounded-full text-sm font-medium text-secondaryText whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-md text-accent font-medium mb-4">{exp.organization}</h4>
                  <p className="text-secondaryText leading-relaxed mb-4">{exp.summary}</p>

                  {exp.responsibilities.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondaryText text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-borderDark mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-background border border-borderDark text-xs font-medium text-secondaryText">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training Section */}
          <div>
            <h3 className="text-2xl font-space font-bold mb-8 text-primaryText flex items-center gap-3">
              <Award className="text-accent" /> Training & Certifications
            </h3>
            <div className="relative border-l-2 border-borderDark ml-3 md:ml-6 space-y-12 pb-4">
              {training.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-12 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:scale-125 group-hover:bg-white transition-all duration-300"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-space font-bold text-primaryText">{exp.role}</h3>
                    <span className="inline-block px-3 py-1 bg-surface border border-borderDark rounded-full text-sm font-medium text-secondaryText whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-md text-accent font-medium mb-4">{exp.organization}</h4>
                  <p className="text-secondaryText leading-relaxed mb-4">{exp.summary}</p>

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-background border border-borderDark text-xs font-medium text-secondaryText">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
