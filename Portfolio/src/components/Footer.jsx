import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ justifyContent:'end', textAlign: 'center'  }} className="w-full py-6 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            <Github size={36} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            <Linkedin size={36} />
          </a>
          <a 
            href="mailto:example@email.com" 
            className="hover:text-slate-400 transition-colors"
          >
            <Mail size={36} />
          </a>
        </div>
        <p className="text-center mt-4 text-sm">
          © {new Date().getFullYear()} Lenworth Miller. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;