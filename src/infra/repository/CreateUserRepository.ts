import { ICreateUserRepository } from "../../app/repositories/ICreateUserRepositoty";
import { User } from "../../domain/users/User";

export class UserRepositoryMemory implements ICreateUserRepository {
  users: User[] = [];

  create(user: User): Promise<User> {
    return Promise.resolve(new User("João", "joao@email.com", "123456", true));
  }
}
