import { Http } from '@/app/core/services/http/http.client';
import { NewsContextModel, NewsDataModel,CommentsDataModel, NewsModel, NewsQuery, UserDataModel } from '../../domain/model/model';
import { Repository } from '../../domain/repository/repository';

export default class ApiDataSourceImpl implements Repository {
  async getData(query?: NewsQuery) {
    const res = await Http.get<NewsDataModel[]>('/public/v2/posts', query);
    return res.data;
  }

  async getUsers() {
    const res = await Http.get<UserDataModel[]>('/public/v2/users');
    return res.data;
  }

  async getComments() {
    const res = await Http.get<CommentsDataModel[]>('/public/v2/comments');
    return res.data;
  }

  async getDataById(id: string) {
    const res = await Http.get<NewsDataModel>(`/public/v2/posts/${id}`);
    return res.data;
  }

  async createData(data: NewsContextModel) {
    const res = await Http.post<NewsModel>('/public/v2/posts', data);
    return res.data;
  }

  async deleteData(id: string) {
    const res = await Http.delete<NewsModel>(`/public/v2/posts${id}`);
    return res.data;
  }

  async updateData(id: string, data: NewsContextModel) {
    const res = await Http.put<NewsModel>(`/public/v2/posts${id}`, data);
    return res.data;
  }
}
