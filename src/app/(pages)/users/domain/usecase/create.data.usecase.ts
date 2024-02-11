import { UserDataModel } from '../model/model';
import { Repository } from '../repository/repository';

export class CreateDataUseCase {
  constructor(private Repo: Repository) {}

  async invoke(data: UserDataModel) {
    return this.Repo.createData(data);
  }
}
