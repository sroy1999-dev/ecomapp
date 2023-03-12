import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { setDataProduct } from './redux/productSlice';

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`); 
      const resData = await res.json();
      console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  console.log(productData);
  return (
    <div>
      <Header />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
