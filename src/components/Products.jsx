import { useState, useEffect } from 'react';
import './Products.css';
import SingleProduct from './SingleProduct';

function Products(props) {
  // komponentas kuris parsisiuncia duomenis
  // 1. sugeneruojam komponenta su tusciu masyvu be duomenu
  const [mainProductsArray, setMainProductsArray] = useState([]);
  // 2. tik sugeneravus useEffecte parsiunciam duomenis
  useEffect(() => {
    getProducts();
  }, []);
  // 3. parsiuntus atnaujinam tuscia state masyva su gautais duomenimis
  // react pats nubraizo pakeitimus html

  async function getProducts() {
    let url = 'https://golden-whispering-show.glitch.me';
    url = '/api/products.json';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    // irasyti i state gautus produktus
    setMainProductsArray(dataInJs);
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className='unlisted grid--pr'>
        {/* mapinti per mainProductsArray ir generuoti li */}
        {mainProductsArray.map((pObj) => (
          <SingleProduct>{pObj.title}</SingleProduct>
        ))}
      </ul>
    </div>
  );
}
export default Products;
