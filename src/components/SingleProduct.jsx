/* 
<SingleProduct key={pObj.id} price={pObj.price} image={pObj.image}>
  germanto suris
</SingleProduct>
*/

function SingleProduct(props) {
  return (
    <li className='singleProduct'>
      <img src={props.image} alt={props.children} />
      <h3>{props.children}</h3>
      <p className='singleP__price'>$ {props.price}</p>
    </li>
  );
}
export default SingleProduct;
