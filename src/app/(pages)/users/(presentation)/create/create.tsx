'use client';
import { FaXmark } from 'react-icons/fa6';
import useForm from '../store/store.form';

const Create = ({ isMenu, setIsMenu }: { isMenu: boolean; setIsMenu: Function }) => {
  const [form, setForm] = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('form 2', form);
  };

  return (
    <div className="absolute w-full h-full top-0 bg-black/30">
      <div className="w-full h-full relative flex justify-center">
        <form className="w-1/2 min-h-1/2 bg-white absolute mt-20 flex flex-col gap-y-4 p-14 rounded-lg">
          <span className="flex flex-col gap-y-2">
            <p className="font-medium">Nama Lengkap</p>
            <input
              id="name"
              type="text"
              className="w-full h-10 rounded-lg outline-none bg-gray-100 hover:border hover:border-black px-2"
              placeholder="Masukkan Nama Lengkap"
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col gap-y-2">
            <p className="font-medium">Email</p>
            <input
              id="email"
              type="email"
              className="w-full h-10 rounded-lg outline-none bg-gray-100 hover:border hover:border-black px-2"
              placeholder="Masukkan Email"
              onChange={handleChange}
              required
            />
          </span>
          {/* Gender */}
          <span className="flex flex-col gap-y-2">
            <p className="font-medium">Gender</p>
            <select
              id="gender"
              onChange={handleChange}
              className="w-full h-10 rounded-lg outline-none bg-gray-100 hover:border hover:border-black px-2">
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </span>
          {/* Status */}
          <span className="flex flex-col gap-y-2">
            <p className="font-medium">Status</p>
            <select
              id="status"
              onChange={handleChange}
              className="w-full h-10 rounded-lg outline-none bg-gray-100 hover:border hover:border-black px-2">
              <option value="" disabled selected>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="In-Active">In-Active</option>
            </select>
          </span>
          {/* Button */}
          <div className="w-ful flex items-center gap-x-4 mt-4">
            <button
              onClick={() => setIsMenu(!isMenu)}
              className="text-red-600 bg-gray-200 rounded-lg w-1/4 py-3 hover:text-red-700 transition-all">
              Batal
            </button>
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-600 rounded-lg w-3/4 py-3 hover:bg-blue-700 transition-all">
              Create
            </button>
          </div>
          {/* Close Mark */}
          <button
            onClick={() => setIsMenu(!isMenu)}
            className="absolute top-3 right-5 text-red-600 hover:text-red-700 transition-all">
            <FaXmark size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
