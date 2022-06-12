export class Product{
  private name: string;
  private price: number;
  private description: string;
  private isActive: boolean;

  constructor(name: string, price: number, description: string, isActive: boolean){
    this.name = name;
    this.price = price;
    this.description = description;
    this.isActive = isActive;
  }

  //getters e setters
  get Name(): string{
    return this.name;
  }
  set Name(name: string){
    this.name = name;
  }
  get Price(): number{
    return this.price;
  }
  set Price(price: number){
    this.price = price;
  }
  get Description(): string{
    return this.description;
  }
  set Description(description: string){
    this.description = description;
  }
  get IsActive(): boolean{
    return this.isActive;
  }
  set IsActive(isActive: boolean){
    this.isActive = isActive;
  }

}