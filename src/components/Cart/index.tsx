import type { IProduct } from "../../models/Product";
import CartItem from "../CartItem";
import './style.css';
import { useState } from 'react';


const products: IProduct[] = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {

  const [cartProducts, setCartProducts] = useState<IProduct[]>(products);

  const handleAmountChange = (index: number, amount: number) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = amount;
    setCartProducts(newProducts);
  }

  let productCount = 0;
  cartProducts.forEach((product) => {productCount += product.amount})

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {productCount}</span>
      </div>
      <div className="cart__items">
        {products.map((product, idx) => (
          <CartItem
            key={product.name}
            product={product}
            onAmountChange={(newAmount) => {handleAmountChange(idx, newAmount)}}
          />
        ))}
      </div>
    </div>
  )
};

export default Cart;
