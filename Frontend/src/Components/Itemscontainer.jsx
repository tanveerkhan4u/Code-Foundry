import React from 'react'
import Item from './Item'
import { PopularCategories, Legal, Company,Support} from './Menu'

const Itemscontainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 bg-[#344593] gap-6 sm:px-8 px-5 py-16 text-center'>
      <Item  Links={PopularCategories} title='PopularCategories' />
      <Item   Links={Legal} title='Legal'/>
      <Item   Links={Company} title='Company'/>
      <Item   Links={Support} title='Support'/>
      
    </div>
  )
};

export default Itemscontainer
