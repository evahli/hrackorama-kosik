import type {IProduct} from "../../models/Product";
import Amount from "../Amount";
import CartProduct from "../CartProduct";
import './style.css';
import { useState } from 'react';


interface ICartItemProps {
  product: IProduct;
  onAmountChange: (amount:number) => void
}

const CartItem = ({ product, onAmountChange }: ICartItemProps) => {


    /*const handleAmountChange = (newCount: number) => {
      setCount(newCount)
    }*/

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} onAmountChange={onAmountChange} />
    </div>
  )
};

export default CartItem;
