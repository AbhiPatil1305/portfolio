import { socials } from '../data/socials';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderDark bg-surface/50 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-xl font-space font-bold tracking-tight mb-2">
            Abhishek<span className="text-accent">Patil.</span>
          </a>
          <p className="text-sm text-secondaryText text-center md:text-left max-w-sm">
            Building digital experiences that matter. Software Developer and UI/UX Designer.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map(social => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noreferrer" 
              className="text-secondaryText hover:text-primaryText transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-borderDark/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondaryText/60">
        <p>&copy; {currentYear} Abhishek Patil. All rights reserved.</p>
        <p>Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
