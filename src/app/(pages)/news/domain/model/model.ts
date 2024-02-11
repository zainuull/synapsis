import { IModel } from '@/app/core/interface/IModel';
import { IQueryModel } from '@/app/core/interface/IQueryModel';

export interface NewsModel extends IModel {
  totalData?: number;
  totalPage?: number;
  data?: NewsDataModel[];
}

export interface NewsDataModel {
  id?: string;
  user_id?: string;
  title?: string;
  body?: string;
  user? : UserDataModel
  comments?: CommentsDataModel[]
}

export interface UserDataModel {
  id?: string;
  name?: string;
  email?: string;
  gender?: string;
  status?: string;
}

export interface CommentsDataModel {
  id?: string;
  post_id?:string
  name?: string;
  email?: string;
  body?: string;
}

export interface NewsContextModel extends NewsDataModel {}

export interface NewsQuery extends IQueryModel {
  search?: string;
}
