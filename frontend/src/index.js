import React from 'react';
import ReactDOM from 'react-dom/client';
 import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { Provider } from 'react-redux';
import store from './Store'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path ='/' element={<App/>}>
     <Route index={true} path ='/' element={<HomeScreen/>}/>
     <Route path ='/product/:id' element={<ProductScreen/>}/>
     <Route path ='/cart' element={<CartScreen/>}/>
  </Route>
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>
);


reportWebVitals();
