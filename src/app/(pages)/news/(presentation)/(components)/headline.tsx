import Image from 'next/image';

const Headline = () => {
  return (
    <div className="w-full h-96 bg-blue-800 flex flex-col justify-center items-center text-white px-12 gap-y-2">
      <h1>Our News</h1>
      <p>Get the latest updates news</p>
      <Image src={'/assets/foto2.jpg'} alt="" width={300} height={300} className='w-4/5 h-[250px] object-cover'/>
      <span className="font-semibold">Collaboration to develop Technology</span>
    </div>
  );
};

export default Headline;
