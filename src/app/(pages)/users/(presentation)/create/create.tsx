'use client';
import { FaXmark } from 'react-icons/fa6';
import useForm from '../store/store.form';
import VM from '../vm/vm';
import { NotifyService, ToastifyService } from '@/app/core/services/notify/notifyService';
import { HandleError } from '@/app/core/services/handleError/handleError';

const Create = ({ setIsCreate, isCreate }: { setIsCreate: Function; isCreate: boolean }) => {
  const { createData } = VM();
  const [form, setForm] = useForm();
  const toastifyService = new ToastifyService();
  const notifyService = new NotifyService();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      gender: form.gender,
      status: form.status,
    };
    notifyService.confirmationCreate().then((res) => {
      if (res) {
        createData(payload)
          .then(() => {
            toastifyService.successCreate();
            // Reset form fields
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
            setIsCreate(!isCreate)
          })
          .catch((err) => {
            HandleError(err);
          });
      }
    });
  };

  const handleCancel = () => {
    setForm({
      ...form,
      id: '',
      name: '',
      email: '',
      gender: '',
      status: '',
      isUpdate: false,
      isCreate: false,
    });
    setIsCreate(!isCreate)
  };

  return (
    <div className="absolute w-full h-full top-0 bg-black/30">
      <div className="w-full h-full relative flex justify-center">
        <form className="lg:w-1/2 h-2/3 bg-white my-5 flex flex-col gap-y-2 lg:gap-y-4 p-6 lg:p-14 rounded-lg mx-10 text-sm lg:text-base relative">
          <span className="flex flex-col gap-y-2">
            <p className="font-medium">Nama Lengkap</p>
            <input
              id="name"
              type="text"
              className="w-full h-10 rounded-lg outline-none bg-gray-100 hover:border hover:border-black px-2"
              placeholder="Masukkan Nama Lengkap"
              onChange={handleChange}
              defaultValue={form.name}
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
              defaultValue={form.email}
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
              <option value={`${form.gender ? form.gender : ''}`} disabled selected>
                {form.gender ? form.gender : 'Select gender'}
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
              <option value={`${form.status ? form.status : ''}`} disabled selected>
                {form.status ? form.status : 'Select Status'}
              </option>
              <option value="Active">Active</option>
              <option value="In-Active">In-Active</option>
            </select>
          </span>
          {/* Button */}
          <div className="w-ful flex items-center gap-x-4 mt-4">
            <button
              onClick={handleCancel}
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
            onClick={() => setIsCreate(!isCreate)}
            className="absolute top-3 right-5 text-red-600 hover:text-red-700 transition-all">
            <FaXmark size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
