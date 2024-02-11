import { NewsContextModel } from '../model/model';
import { Repository } from '../repository/repository';

export class CreateDataUseCase {
  constructor(private Repo: Repository) {}

  async invoke(data: NewsContextModel) {
    return this.Repo.createData(data);
  }
}
