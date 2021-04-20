import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'

const CartItem = ({ id, item }) => {

   const { name, price, image, quantity } = item

   let options = []

   for (let i = 0; i < Math.max(item.quantity + 1, 20); i++) {
      options.push(<option value={i} key={i}>Qty:{i}</option>)
   }

   const changeQuantity = (newQuantity) => {
      db.collection('cartItems').doc(id).update({
         quantity: parseInt(newQuantity)
      })
   }

   const deleteItem = (e) => {
      e.preventDefault();
      db.collection('cartItems').doc(id).delete();
   }

   return (
      <Container>
         <ImageContainer>
            <img src={image} alt="item" />
         </ImageContainer>

         <CartItemInfo>
            <CartItemInfoTop>
               <h2>{name}</h2>
            </CartItemInfoTop>
            <CartItemInfoBottom>
               <CartItemQuantityContainer>
                  <select name="quantity" value={quantity}
                     onChange={(e) => changeQuantity(e.target.value)}>
                     {options}
                  </select>
               </CartItemQuantityContainer>
               <CartItemDeleteContainer
                  onClick={deleteItem} >
                  Delete
               </CartItemDeleteContainer>
            </CartItemInfoBottom>
         </CartItemInfo>
         <CartItemPrice>
            ${price}
         </CartItemPrice>
      </Container>
   )
}

export default CartItem

const Container = styled.div`
   padding: 12px 0;
   display: flex;
   border-bottom: 1px solid #ddd

`
const CartItemInfo = styled.div`
   flex-grow: 1;
   `

const ImageContainer = styled.div`
   width: 180px;
   height: 180px;
   flex-shrink:0;
   flex-grow:0;
   margin-right: 16px;
   img{
      object-fit: contain;
      height: 100%;
      width: 100%;
   }
`

const CartItemInfoTop = styled.div`
   color: #007185;
   h2{
      font-size: 18px;
   }
`
const CartItemInfoBottom = styled.div`
   display: flex;
   margin-top: 4px;
   align-items: center;
   `
const CartItemQuantityContainer = styled.div`
   select {
      border-radius: 8px;
      background-color: #F0F2F2;
      padding: 4px;
      box-shadow: 0 2px 5px rgba(13, 13, 13,.15);

      :focus{
         outline: none;
      }
   }
`
const CartItemDeleteContainer = styled.div`
   color: #007185;
   margin-left:16px;
   cursor: pointer; 
`
const CartItemPrice = styled.div`
   font-size: 18px;
   font-weight: 700;
   margin-left: 16px;
   `