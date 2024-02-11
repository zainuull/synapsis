import { atom, useAtom } from 'jotai';
import { NewsDataModel } from '../../domain/model/model';
const data: NewsDataModel = {};
const store = atom(data);

const useDataStore = () => useAtom(store);

export default useDataStore;
