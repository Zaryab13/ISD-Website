
import {arrow} from '../assets';
import {Link} from 'react-router-dom'
import {styles} from '../styles';


const Hero = () => {
  return (
    <div className={`${styles.paddingX} h-[100vh] flex flex-col min-h-[50%] justify-center items-center text-center`}>
      <h1 className="text-5xl text-slate-800 text-opacity-90 font-bold">Empowering Futures, Illuminating Minds</h1>
      <p className='pt-8 max-w-xl text-slate-800 text-opacity-75'>Our Mission is to empower future of young minds by seemlessly <br /> integrating English Excellence with Digital Proficiency <br />Illumination the path to success</p>
      <Link to="/about" className='mt-8 relative'>
        <button className='border border-black shadow-lg rounded-md py-3 px-2 text-slate-800 font-semibold hover:backdrop-blur-lg'>Check Out Our Achievements <img className='inline w-5 h-5' src={arrow} alt="" /></button>
      </Link>
    </div>
  );
};

export default Hero;
