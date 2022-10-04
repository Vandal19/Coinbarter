import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'
import { useSelector } from "react-redux";

const ProductMeta = ({ id, matches }) => {
  const products = useSelector(state => state.products.value.products);

  const product = products.find((value) => value.id === id)

  return (
    <>
    <ProductMetaWrapper  >
      <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2} sx={{fontSize: 15}}>
        {product.brand_name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
    </>
  )
}

export default ProductMeta
