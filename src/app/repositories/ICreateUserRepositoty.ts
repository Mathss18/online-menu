import { User } from "../../domain/users/User";

export interface ICreateUserRepository {
  create(user: User): Promise<User>;
}