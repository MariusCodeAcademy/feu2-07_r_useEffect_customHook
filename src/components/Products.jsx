import { useState, useEffect } from 'react';
import './Products.css';

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
    const url = 'https://golden-whispering-show.glitch.me';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    // irasyti i state gautus produktus
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className='unlisted grid--pr'>
        {/* mapinti per mainProductsArray ir generuoti li */}
        <li className='singleProduct'>one</li>
        <li className='singleProduct'>one</li>
        <li className='singleProduct'>one</li>
      </ul>
    </div>
  );
}
export default Products;
