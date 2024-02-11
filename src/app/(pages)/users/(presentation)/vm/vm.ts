import { useState } from 'react';
import {
  NewsDataModel,
  UserDataModel,
} from '../../domain/model/model';
import ApiDataSourceImpl from '../../data/api/api.data.source';
import {
  CreateDataUseCase,
  DeleteDataUseCase,
  GetDataByIdUseCase,
  UpdateDataUseCase,
  GetUsersUseCase,
} from '../../domain/usecase';

export default function VM() {
  const [users, setUsers] = useState<UserDataModel[]>();
  const [dataById, setDataById] = useState<NewsDataModel>();

  //data source
  const dataSourceImpl = new ApiDataSourceImpl();

  //use case
  const getUsersUseCase = new GetUsersUseCase(dataSourceImpl);
  const getDataByIdUseCase = new GetDataByIdUseCase(dataSourceImpl);
  const createDataUseCase = new CreateDataUseCase(dataSourceImpl);
  const deleteDataUseCase = new DeleteDataUseCase(dataSourceImpl);
  const updateDataUseCase = new UpdateDataUseCase(dataSourceImpl);

  //function
  async function getUsers() {
    setUsers(await getUsersUseCase.invoke());
  }

  async function getDataById(id: string) {
    setDataById(await getDataByIdUseCase.invoke(id));
  }

  async function createData(data: UserDataModel) {
    await createDataUseCase.invoke(data);
  }

  async function deleteData(id: string) {
    await deleteDataUseCase.invoke(id);
  }

  async function updateData(id: string, data: UserDataModel) {
    await updateDataUseCase.invoke(id, data);
  }

  return {
    users,
    dataById,
    getUsers,
    getDataById,
    createData,
    deleteData,
    updateData,
  };
}
