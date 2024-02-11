'use client';
import Image from 'next/image';
import VM from '../vm/vm';
import { useEffect, useState } from 'react';
import { NewsDataModel } from '../../domain/model/model';
import Pagination from './pagination';
import Link from 'next/link';
import useDataStore from '../store/store.datas';
import { useRouter } from 'next/navigation';

const Post = () => {
  const [, setDatas] = useDataStore();
  const { getData, posts, getUsers, getComments, users, comments } = VM();
  const temp = posts || [];
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    getData();
    getUsers();
    getComments();
  }, []);

  // Combine users, posts, and comments based on relationships
  const combinedData = temp.map((post) => {
    const user = users?.find((user) => user.id === post.user_id);
    const postComments = comments?.filter((comment) => comment.post_id === post.id);
    return { ...post, user, comments: postComments };
  });

  const perPage = 5;
  const totalPage =
    temp.length % perPage == 0 ? +temp.length / perPage : Math.floor(temp.length / perPage + 1);

  const result = combinedData.slice((page - 1) * perPage, perPage * page);

  const handleDetail = (data: NewsDataModel) => {
    setDatas(data);
    router.push(`/news/detail/${data.id}`);
  };

  return (
    <>
      {result?.map((data: NewsDataModel, idx: number) => {
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
                {data.title}
                <span className="text-gray-800 font-normal text-sm">
                  {data.body?.slice(0, 500)}....
                </span>
              </h1>
              <button
                onClick={() => handleDetail(data)}
                className="w-32 p-1 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">
                Read More
              </button>
            </span>
            <span className="col-span-1 border-l border-black p-4 flex flex-col items-center justify-center">
              <p className="font-semibold"> {data.user?.name}</p>
              <p className="text-gray-600">{data.user?.status}</p>
            </span>
          </div>
        );
      })}
      <Pagination pageNow={page} totalPage={+totalPage} setPage={setPage} />
    </>
  );
};

export default Post;
