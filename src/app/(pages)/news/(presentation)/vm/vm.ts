import { useState } from 'react';
import {
  NewsContextModel,
  NewsDataModel,
  UserDataModel,
  CommentsDataModel,
  NewsQuery,
} from '../../domain/model/model';
import ApiDataSourceImpl from '../../data/api/api.data.source';
import {
  CreateDataUseCase,
  DeleteDataUseCase,
  GetDataByIdUseCase,
  GetDataUseCase,
  UpdateDataUseCase,
  GetUsersUseCase,
  GetCommentsUseCase,
} from '../../domain/usecase';

export default function VM() {
  const [posts, setDatas] = useState<NewsDataModel[]>();
  const [users, setUsers] = useState<UserDataModel[]>();
  const [comments, setComments] = useState<CommentsDataModel[]>();
  const [dataById, setDataById] = useState<NewsDataModel>();

  //data source
  const dataSourceImpl = new ApiDataSourceImpl();

  //use case
  const getDataUseCase = new GetDataUseCase(dataSourceImpl);
  const getUsersUseCase = new GetUsersUseCase(dataSourceImpl);
  const getCommentsUseCase = new GetCommentsUseCase(dataSourceImpl);
  const getDataByIdUseCase = new GetDataByIdUseCase(dataSourceImpl);
  const createDataUseCase = new CreateDataUseCase(dataSourceImpl);
  const deleteDataUseCase = new DeleteDataUseCase(dataSourceImpl);
  const updateDataUseCase = new UpdateDataUseCase(dataSourceImpl);

  //function
  async function getData(query?: NewsQuery) {
    setDatas(await getDataUseCase.invoke(query));
  }

  async function getUsers() {
    setUsers(await getUsersUseCase.invoke());
  }

  async function getComments() {
    setComments(await getCommentsUseCase.invoke());
  }

  async function getDataById(id: string) {
    setDataById(await getDataByIdUseCase.invoke(id));
  }

  async function createData(data: NewsContextModel) {
    await createDataUseCase.invoke(data);
  }

  async function deleteData(id: string) {
    await deleteDataUseCase.invoke(id);
  }

  async function updateData(id: string, data: NewsContextModel) {
    await updateDataUseCase.invoke(id, data);
  }

  return {
    posts,
    users,
    comments,
    dataById,
    getData,
    getUsers,
    getComments,
    getDataById,
    createData,
    deleteData,
    updateData,
  };
}
