import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from '../product'
import { db } from '../../firebase'

function Home() {
   const [products, setProducts] = useState([])
   const getProducts = () => {
      db.collection('products').onSnapshot(snapshot => {
         let tempProduct = []

         tempProduct = snapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data()
         })
         );
         setProducts(tempProduct);
      })
   }

   useEffect(() => {
      getProducts();
   }, [])

   console.log(products);
   const renderProducts = products?.map((data) => {
      return (
         <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            imgUrl={data.product.imgUrl}
            key={data.id}
         />
      )
   }
   )

   return (
      <div>
         <Container>
            <Banner>

            </Banner>
            <Content>
               {renderProducts}
            </Content>
         </Container>
      </div>
   )
}

export default Home

const Container = styled.div`
   max-width: 1500px;
   margin: 0 auto;
`
const Banner = styled.div`
   background-image: url('https://i.imgur.com/SYHeuYM.jpg');
   min-height: 600px;
   background-position:center;
   background-size: cover;
   mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
   margin-top: -350px;
   padding: 0 10px;
   display: flex;
`