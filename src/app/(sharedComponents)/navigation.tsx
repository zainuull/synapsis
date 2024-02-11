'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname()

  return (
    <div className="w-full h-20 bg-slate-50 flex items-center justify-center">
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-semibold">
          <span className="text-blue-600">Synapsis </span>Submission
        </h1>
        <div className="flex items-center gap-x-4">
          <Link href={'/news'} className={`${pathname == '/news' || pathname == '/' ? 'text-blue-600' : 'text-black'}`}>News</Link>
          <Link href={'/users'} className={`${pathname == '/users' ? 'text-blue-600' : 'text-black'}`}>Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
