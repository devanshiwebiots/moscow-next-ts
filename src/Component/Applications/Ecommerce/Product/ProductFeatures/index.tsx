import React from 'react'
import ProductTotal from './ProductTotal/ProductTotal'
import ProductSidebar from './ProductSidebar/ProductSidebar'

const ProductFeatures = () => {
  return (
    <div className="feature-products">
        <ProductTotal />
        <ProductSidebar/>
    </div>
  )
}

export default ProductFeatures