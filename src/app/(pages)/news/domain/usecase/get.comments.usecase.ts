import { Repository } from '../repository/repository';

export class GetCommentsUseCase {
  constructor(private Repo: Repository) {}

  async invoke() {
    return this.Repo.getComments();
  }
}
