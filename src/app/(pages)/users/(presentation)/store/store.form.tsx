import { atom, useAtom } from 'jotai';

const store = atom({
  id: '',
  name: '',
  email: '',
  gender: '',
  status: '',
});

const useForm = () => useAtom(store);

export default useForm;
