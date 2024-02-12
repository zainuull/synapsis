'use client';
import Image from 'next/image';
import VM from '../vm/vm';
import { useEffect, useState } from 'react';
import { UserDataModel } from '../../domain/model/model';
import Pagination from './pagination';
import useDataStore from '../store/store.datas';
import Update from '../update/update';
import { NotifyService, ToastifyService } from '@/app/core/services/notify/notifyService';
import { HandleError } from '@/app/core/services/handleError/handleError';
import useForm from '../store/store.form';
import ToastNotify from '@/app/core/services/notify/toast';

const Post = ({ temp }: { temp: UserDataModel[] }) => {
  const [, setDatas] = useDataStore();
  const { deleteData } = VM();
  const [page, setPage] = useState<number>(1);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const notifyService = new NotifyService();
  const toastifyService = new ToastifyService();
  const [form, setForm] = useForm();

  const perPage = 5;
  const totalPage =
    temp.length % perPage == 0 ? +temp.length / perPage : Math.floor(temp.length / perPage + 1);

  const result = temp.slice((page - 1) * perPage, perPage * page);

  const handleDetail = (data: UserDataModel) => {
    setDatas(data);
    setIsMenu(!isMenu);
  };

  const handleDelete = (id: string) => {
    notifyService.confirmationDelete().then((res) => {
      if (res) {
        deleteData(id)
          .then(() => {
            toastifyService.successDelete();
            setForm({ ...form, isDeleted: true });
          })
          .catch((err) => {
            HandleError(err);
          });
      }
    });
  };

  return (
    <div className="relative">
      {result.length ? (
        <>
          {result?.map((data: UserDataModel, idx: number) => {
            return (
              <div
                key={idx}
                className="w-full grid grid-cols-1 lg:grid-cols-5 lg:gap-x-4 border-y border-gray-700 p-4 lg:p-10 my-5 text-sm lg:text-base">
                <Image
                  src={'/assets/foto1.jpg'}
                  alt=""
                  width={300}
                  height={300}
                  className="col-span-1 w-full"
                />
                <span className="px-2 flex flex-col gap-y-4 col-span-3">
                  <h1 className="flex flex-col font-semibold lg:text-xl">
                    {data.name}
                    <span className="text-gray-500 text-xs lg:text-sm">{data.email}</span>
                  </h1>
                  <div className="flex items-center gap-x-2">
                    <button
                      onClick={() => handleDetail(data)}
                      className="w-32 p-1 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(data.id || '')}
                      className="w-32 p-1 text-center bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all">
                      Delete
                    </button>
                  </div>
                </span>
                <span className="col-span-1 border-l border-black p-4 flex flex-col lg:items-center justify-center">
                  <p className="font-semibold"> {data.gender}</p>
                  <p className="text-gray-600">{data.status}</p>
                </span>
              </div>
            );
          })}
        </>
      ) : (
        <div className="my-20">
          <h1 className="text-2xl text-gray-400 w-full text-center">Not have a data .....</h1>
        </div>
      )}
      {result.length ? <Pagination pageNow={page} totalPage={+totalPage} setPage={setPage} /> : null}
      {/* Form Update */}
      {isMenu && <Update isMenu={isMenu} setIsMenu={setIsMenu} />}
      <ToastNotify />
    </div>
  );
};

export default Post;
