import {useEffect, useState} from "react";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  const changeIsScrolledBg = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeIsScrolledBg);
    return () => {
      window.removeEventListener("scroll", changeIsScrolledBg);
    };
  }, []);

  const footerClasses = `relative footer w-full bottom-0 h-auto py-8 bg-transparent flex transition-all  duration-1000 flex justify-around pt-4 text-slate-800 ${isScrolled? 'active' : ''}`

  return (
      <footer className={footerClasses}>
        <div className="absolute top-0 border w-3/4 h-1 border-t-2 border-transparent bg-gradient-to-r from-transparent via-slate-800 opacity-50 to-transparent backdrop-blur animate-fadeBorder"/>
        <div>Copyright</div>
        <div className="flex gap-14">
        
        </div>
      </footer>
  );
};

export default Footer;
