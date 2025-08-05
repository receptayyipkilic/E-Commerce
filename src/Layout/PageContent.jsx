import React from 'react'
import Blog from '../PageContent/Blog'
import Clients from '../PageContent/Clients'
import Content from '../PageContent/Content'
import Features from '../PageContent/Features'
import ProductCard from '../PageContent/ProductCard'
import ShopCard from '../PageContent/ShopCard'

function PageContent() {
  return (
    <div className="w-full">
 <Clients />
<ShopCard />
<ProductCard />
<Content />
<Features />
<Blog />
    </div>
  )
}

export default PageContent