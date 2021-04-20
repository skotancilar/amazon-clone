import React from 'react'
import styled from 'styled-components'
import CartItem from '../cartItem'
import { db } from '../../firebase'

const CartItems = ({ cartItems }) => {

   const deleteItem = (id) => {
      db.collection('cartItems').doc(id).delete();
   }

   const renderCartItems = () => {
      return (
         cartItems.map((item) => (

            item.product.quantity ? <CartItem
               key={item.id}
               id={item.id}
               item={item.product}
            /> : deleteItem(item.id)

         )))
   }

   return (
      <Container>
         <Title>Shopping Cart</Title>
         <hr />

         <ItemsContainer >
            {
               cartItems.length
                  ?
                  renderCartItems()
                  :
                  <h3>Your cart is empty</h3>
            }
         </ItemsContainer>
      </Container>
   )
}

export default CartItems

const Container = styled.div`
   background-color: white;
   flex: 0.7;
   margin-right: 18px;
   padding:20px;
`
const Title = styled.h1`
   margin-bottom: 8px;
`
const ItemsContainer = styled.div`
   display: flex;
   flex-direction: column;
`
