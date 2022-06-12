import { Product } from "../products/Product";
import { User } from "../users/User";

export class Cart{
  private user: User;
  private products: Product[];

  constructor(user: User, products: Product[]){
    this.user = user;
    this.products = products;
  }

  getTotalPrice(): number{
    let totalPrice: number = 0;
    for(const product of this.products){
      totalPrice += product.Price;
    }
    return totalPrice;
  }
}