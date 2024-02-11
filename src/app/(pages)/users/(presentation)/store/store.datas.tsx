import { atom, useAtom } from 'jotai';
import { UserDataModel } from '../../domain/model/model';
const data: UserDataModel = {};
const store = atom(data);

const useDataStore = () => useAtom(store);

export default useDataStore;
