import img from './images/without-bg.png';

export default function Logo() {
  return (
    <img 
      src={img} 
      alt="Logo" 
      className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 max-w-full rounded-full"
    />
  );
}
