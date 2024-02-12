'use client';
import { useEffect, useState } from 'react';
import Post from './(presentation)/(components)/post';
import Create from './(presentation)/create/create';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import VM from './(presentation)/vm/vm';
import { UserDataModel } from './domain/model/model';
import useForm from './(presentation)/store/store.form';
import Update from './(presentation)/update/update';

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getUsers, users } = VM();
  const [form, setForm] = useForm();
  const temp = users || [];
  const [isCreate, setIsCreate] = useState<boolean>(false);

  useEffect(() => {
    getUsers().then(() => {
      setForm({ ...form, isUpdate: false, isCreate: false, isDeleted: false });
    });
  }, [form.isCreate, form.isUpdate, form.isDeleted]);

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = temp.filter((item: UserDataModel) => {
    return (
      item.name &&
      item.email &&
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleCreate = () => {
    setIsCreate(!isCreate);
    setForm((prevForm) => ({
      ...prevForm,
      id: '',
      name: '',
      email: '',
      gender: '',
      status: '',
      isUpdate: false,
      isCreate: true,
      isDeleted: false,
    }));
  };

  return (
    <div className="w-full h-full">
      {/* Search */}
      <div className="w-full flex items-center gap-x-4 px-4 my-5 lg:my-10">
        <div className="w-4/5 h-10 bg-gray-200 rounded-lg hover:border hover:border-black flex items-center gap-x-2 px-4">
          <HiMiniMagnifyingGlass size={20} />
          <input
            onChange={handleSearchChange}
            placeholder="search"
            className="w-full outline-none bg-transparent"
          />
        </div>
        <button
          onClick={handleCreate}
          className="text-white bg-blue-600 rounded-lg w-1/4 h-10 hover:bg-blue-700 transition-all">
          Create
        </button>
      </div>
      <Post temp={filteredData} />
      {isCreate && <Create setIsCreate={setIsCreate} isCreate={isCreate} />}
    </div>
  );
};

export default UsersPage;
