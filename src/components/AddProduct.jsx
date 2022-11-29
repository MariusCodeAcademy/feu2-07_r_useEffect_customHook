function AddProduct(props) {
  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form>
        <input type='text' placeholder='title' />
        <input type='text' placeholder='image url' />
        <input type='number' step={0.01} placeholder='price' />
        <button type='submit'>Create</button>
      </form>

      <p>
        Title: <br />
        ImageUrl: <br />
        Price: <br />
      </p>
    </fieldset>
  );
}
export default AddProduct;
