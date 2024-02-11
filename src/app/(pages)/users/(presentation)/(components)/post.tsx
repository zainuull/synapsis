'use client';
import Image from 'next/image';
import VM from '../vm/vm';
import { useEffect, useState } from 'react';
import { UserDataModel } from '../../domain/model/model';
import Pagination from './pagination';
import useDataStore from '../store/store.datas';
import Update from '../update/update';

const Post = () => {
  const [, setDatas] = useDataStore();
  const { getUsers, users } = VM();
  const temp = users || [];
  const [page, setPage] = useState<number>(1);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const perPage = 5;
  const totalPage =
    temp.length % perPage == 0 ? +temp.length / perPage : Math.floor(temp.length / perPage + 1);

  const result = temp.slice((page - 1) * perPage, perPage * page);

  const handleDetail = (data: UserDataModel) => {
    setDatas(data);
    setIsMenu(!isMenu);
  };

  return (
    <div className="relative">
      {result?.map((data: UserDataModel, idx: number) => {
        return (
          <div
            key={idx}
            className="w-full grid grid-cols-5 gap-x-4 border-y border-gray-700 p-10 my-5">
            <Image
              src={'/assets/foto1.jpg'}
              alt=""
              width={300}
              height={300}
              className="col-span-1"
            />
            <span className="px-2 flex flex-col gap-y-4 col-span-3">
              <h1 className="flex flex-col font-semibold text-xl">
                {data.name}
                <span className="text-gray-800 font-normal text-sm">
                  {data.email?.slice(0, 500)}....
                </span>
              </h1>
              <div className="flex items-center gap-x-2">
                <button
                  onClick={() => handleDetail(data)}
                  className="w-32 p-1 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">
                  Update
                </button>
                <button
                  onClick={() => handleDetail(data)}
                  className="w-32 p-1 text-center bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all">
                  Delete
                </button>
              </div>
            </span>
            <span className="col-span-1 border-l border-black p-4 flex flex-col items-center justify-center">
              <p className="font-semibold"> {data.gender}</p>
              <p className="text-gray-600">{data.status}</p>
            </span>
          </div>
        );
      })}
      <Pagination pageNow={page} totalPage={+totalPage} setPage={setPage} />
      {/* Form Update */}
      {isMenu && <Update isMenu={isMenu} setIsMenu={setIsMenu} />}
    </div>
  );
};

export default Post;
