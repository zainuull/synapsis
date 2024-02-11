'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import VM from '../../vm/vm';
import { useRouter } from 'next/navigation';
import { GoArrowLeft } from 'react-icons/go';
import { CiUser } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';
import useDataStore from '../../store/store.datas';
import { CommentsDataModel } from '@/app/(pages)/news/domain/model/model';

const DetailPage = ({ params }: { params: { id: string } }) => {
  const [dataById] = useDataStore();
  const router = useRouter();

  // useEffect(() => {
  //   if (params.id != dataById.id) {
  //     router.back();
  //   }
  // }, [params.id]);

  const handleBack = () => {
    router.back();
  };

  console.log('data', dataById);

  return (
    <div className="w-full min-h-screen flex flex-col gap-y-4 items-center px-6 pb-20">
      <button
        onClick={handleBack}
        className="mt-5 text-start w-4/5 flex items-center gap-x-2 hover:font-semibold transition-all">
        <GoArrowLeft size={20} />
        <span> Back</span>
      </button>
      <div className="w-full flex flex-col items-center text-center gap-y-4">
        <h1 className="w-4/5 text-2xl font-semibold">{dataById?.title}</h1>
        <p className="text-gray-600 flex items-center gap-x-2">
          <CiUser size={20} />
          <span> {dataById?.user?.name}</span>
        </p>
        <Image
          src={'/assets/foto1.jpg'}
          alt=""
          width={300}
          height={300}
          className="w-4/5 h-[500px] object-cover"
        />
      </div>
      <p className="w-4/5">{dataById?.body}</p>
      {/* Comments */}
      <h1 className="mt-10 text-2xl font-semibold">Comments</h1>
      <div className="w-4/5 border-y border-gray-700 p-10 my-5 flex flex-col gap-y-12">
        {dataById.comments?.length ? (
          <>
            {dataById?.comments?.map((data: CommentsDataModel, idx: number) => {
              return (
                <div key={idx} className="w-full flex items-center gap-x-4">
                  <div className="flex gap-x-2">
                    <span className="text-lg text-gray-500">0{idx + 1}</span>
                    <FaRegUserCircle size={45} />
                  </div>
                  <span className="px-2 flex flex-col gap-y-4 col-span-3">
                    <h1 className="flex flex-col font-semibold">
                      {data?.name}
                      <span className="text-gray-800 font-normal text-sm">{data.body}</span>
                    </h1>
                  </span>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1 className="text-2xl text-gray-400 w-full text-center">Nothing Comments.....</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
