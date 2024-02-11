import { Repository } from '../repository/repository';

export class GetUsersUseCase {
  constructor(private Repo: Repository) {}

  async invoke() {
    return this.Repo.getUsers();
  }
}
