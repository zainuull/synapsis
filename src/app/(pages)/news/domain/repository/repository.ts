import {
  NewsContextModel,
  NewsDataModel,
  CommentsDataModel,
  UserDataModel,
  NewsModel,
  NewsQuery,
} from '../model/model';

export interface Repository {
  getData(query?: NewsQuery): Promise<NewsDataModel[]>;
  getUsers(): Promise<UserDataModel[]>;
  getComments(): Promise<CommentsDataModel[]>;
  getDataById(id: string): Promise<NewsDataModel>;
  createData(data: NewsContextModel): Promise<NewsModel>;
  deleteData(id: string): Promise<NewsModel>;
  updateData(id: string, data: NewsContextModel): Promise<NewsModel>;
}
