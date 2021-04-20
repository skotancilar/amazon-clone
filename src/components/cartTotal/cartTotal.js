import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

const CartTotal = ({ getCount, getTotalPrice }) => {

   return (
      <Container>
         <SubTotal>
            Sub Total ({getCount()} items): <br />
            <NumberFormat value={getTotalPrice()} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />
         </SubTotal>
         <CheckOutButton>Proceed To Checkout</CheckOutButton>
      </Container>
   )
}

export default CartTotal

const Container = styled.div`
   background-color: white;
   flex: 0.3;
   padding:20px;
`
const SubTotal = styled.h2`
   margin-bottom: 16px;
`
const CheckOutButton = styled.button`
   background-color: #f0c14b;
   width: 100%;
   padding: 4px 8px;
   border: 2px solid #a88734;
   border-radius: 4px;
   cursor: pointer;
   font-size: 18px;
   :hover {
      background: #ddb347;
   }
`