import {
  NewsDataModel,
  UserDataModel,
  NewsModel,
} from '../model/model';

export interface Repository {
  getUsers(): Promise<UserDataModel[]>;
  getDataById(id: string): Promise<NewsDataModel>;
  createData(data: UserDataModel): Promise<NewsModel>;
  deleteData(id: string): Promise<NewsModel>;
  updateData(id: string, data: UserDataModel): Promise<UserDataModel>;
}
