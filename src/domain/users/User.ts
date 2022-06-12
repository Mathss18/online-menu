export class User{
  private name: string;
  private email: string;
  private password: string;
  private isActive: boolean;

  constructor(name: string, email: string, password: string, isActive: boolean){
    this.name = name;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
  }
  save(): void{
    console.log("Salvando usuário...");
  }

  get Name(): string{
    return this.name;
  }
}