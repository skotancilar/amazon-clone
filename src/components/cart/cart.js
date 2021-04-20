import React from 'react'
import styled from 'styled-components'
import CartItems from '../cartItems'
import CartTotal from '../cartTotal'

const Cart = ({ cartItems }) => {

   const getTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
         total += (item.product.price * item.product.quantity);
      });
      return total.toFixed(2);
   }

   const getCount = () => {
      let count = 0;
      cartItems.forEach((item) => {
         count += item.product.quantity
      })
      return count;
   }

   return (
      <Container>
         <CartItems cartItems={cartItems} />
         <CartTotal
            getCount={getCount}
            getTotalPrice={getTotalPrice} />
      </Container>
   )
}

export default Cart

const Container = styled.div`
   display: flex;
   padding: 14px 18px 0;
   align-items:flex-start;
`