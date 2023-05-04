import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let allCategories = ["all" , ...new Set(items.map((each)=>{
  return each.category
}))]



function App() {

  const [menuItems , setMenuItems] = useState(items)
  // eslint-disable-next-line no-unused-vars
  const [categories , setCategories] = useState(allCategories)


  const filterItems = (category) =>{
    
    if(category === "all"){
      setMenuItems(items)
      return;
    }
    let newItems = items.filter((eachItem)=>{
      return eachItem.category === category
    })
    setMenuItems(newItems)

  }



  return(
    <main>
      <section className='menu section'>
       <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
       </div>

       <Categories filterItems={filterItems} categories={categories} />

       <Menu items={menuItems}/>

       
        
      </section>
    </main>
  )
}

export default App;
