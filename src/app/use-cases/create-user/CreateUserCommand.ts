import { User } from "../../../domain/users/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepositoty";
import { ICommand } from "../ICommand";

export class CreateUserCommand implements ICommand {
  constructor(
    private createUserRepositoty: ICreateUserRepository,
    private user: User
  ) {}

  execute(): void {
    this.createUserRepositoty.create(this.user);
  }
}
