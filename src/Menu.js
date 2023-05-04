import React from 'react';


const Menu = ({items}) => {
  return (
    <div className="section-center">
        {items.map((eachItem)=>{
          return (
            <article className="menu-item" key={eachItem.id}>
              <img src={eachItem.img} alt="" className='photo' />
              <div className="item-info">
                <header>
                  <h4>{eachItem.title}</h4>
                  <h4 className="price">{eachItem.price}</h4>
                </header>
                <div className="item-text">
                  <p>{eachItem.desc}</p>
                </div>
              </div>
            </article>
          )
        })}
       </div>
  );
};

export default Menu;
