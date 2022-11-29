import { useState } from 'react';
import useInput from './../hooks/useInput';
function AddProduct(props) {
  // sukurti handleSubmit funkcija
  // paleisti ja patekiant forma
  // sustabdyti perkrovima

  // const [titleValue, setTitle] = useInput();
  const title = useInput('');
  const image = useInput('');
  const price = useInput('');

  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form>
        <input
          type='text'
          onChange={title.setter}
          value={title.value}
          placeholder='title'
        />
        <input
          onChange={image.setter}
          value={image.value}
          type='text'
          placeholder='image url'
        />
        <input
          type='number'
          step={0.01}
          onChange={price.setter}
          value={price.value}
          placeholder='price'
        />
        <button type='submit'>Create</button>
      </form>

      <p>
        Title: {title.value}
        <br />
        ImageUrl: {image.value} <br />
        Price: {price.value}
        <br />
      </p>
    </fieldset>
  );
}
export default AddProduct;
