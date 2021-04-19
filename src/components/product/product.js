import React from 'react'
import styled from 'styled-components'

const Product = () => {
   return (
      <Container>
         <Title>
            Ipad Pro 16"
         </Title>
         <Price>
            $1499
         </Price>
         <Rating>
            ⭐⭐⭐⭐⭐
         </Rating>
         <Image src="https://m.media-amazon.com/images/I/7132gNvUteL._AC_UL320_.jpg" />
         <AddToCartButton>
            Add To Cart
         </AddToCartButton>
      </Container>
   )
}

export default Product

const Container = styled.div`
   background-color: white;
   z-index:1;
   flex:1;
   padding: 20px;
   margin: 10px;
   max-height: 400px;
   display: flex;
   flex-direction: column;
`
const Title = styled.span`

`
const Price = styled.span`
   font-weight:500;
   margin-top: 3px;
`

const Rating = styled.div`

`

const Image = styled.img`
   max-height: 200px;
   object-fit:contain;
   margin: 8px;
`

const AddToCartButton = styled.button`
   width: 100px;
   height: 30px;
   background-color: #f0c14b;
   border: 2px solid #a88734;
   border-radius: 2px;
   align-self:center;
`