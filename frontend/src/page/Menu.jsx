import React from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const params = useParams();
  console.log(params.filterby);
  return (
    <div>Menu</div>
  )
}

export default Menu;