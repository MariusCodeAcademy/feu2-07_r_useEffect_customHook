function SingleProduct(props) {
  return (
    <li className='singleProduct'>
      <img src='' alt='pav' />
      <h3>{props.children}</h3>
      <p className='singleP__price'>🇪🇺 500</p>
    </li>
  );
}
export default SingleProduct;
