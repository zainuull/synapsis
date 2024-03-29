import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  email: '',
  gender: '',
  status: '',
  isUpdate: false,
  isCreate: false,
  isDeleted: false,
});

const useForm = () => useAtom(store);

export default useForm;
