import { Http } from '@/app/core/services/http/http.client';
import {
  NewsContextModel,
  NewsDataModel,
  CommentsDataModel,
  NewsModel,
  NewsQuery,
  UserDataModel,
} from '../../domain/model/model';
import { Repository } from '../../domain/repository/repository';

export default class ApiDataSourceImpl implements Repository {
  async getUsers() {
    const res = await Http.get<UserDataModel[]>('/public/v2/users');
    return res.data;
  }

  async getDataById(id: string) {
    const res = await Http.get<NewsDataModel>(`/public/v2/users/${id}`);
    return res.data;
  }

  async createData(data: UserDataModel) {
    const res = await Http.post<NewsModel>('/public/v2/users', data);
    return res.data;
  }

  async deleteData(id: string) {
    const res = await Http.delete<NewsModel>(`/public/v2/users/${id}`);
    return res.data;
  }

  async updateData(id: string, data: UserDataModel) {
    const res = await Http.patch<UserDataModel>(`/public/v2/users/${id}`, data);
    return res.data;
  }
}
