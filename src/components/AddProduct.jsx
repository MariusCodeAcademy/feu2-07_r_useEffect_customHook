import { useState } from 'react';
function AddProduct(props) {
  // sukurti handleSubmit funkcija
  // paleisti ja patekiant forma
  // sustabdyti perkrovima

  // const [inputs, setInputs] = useState({
  //   title: '',
  //   imageUrl: '',
  //   price: '',
  // });

  const [titleValue, setTitleValue] = useState('');

  function titleInputHadler(event) {
    setTitleValue(event.target.value);
  }

  const [imageUrl, setImageUrl] = useState('');

  function imageInputHandler(e) {
    setImageUrl(e.target.value);
  }

  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form>
        <input
          type='text'
          onChange={titleInputHadler}
          value={titleValue}
          placeholder='title'
        />
        <input
          onChange={imageInputHandler}
          value={imageUrl}
          type='text'
          placeholder='image url'
        />
        <input type='number' step={0.01} placeholder='price' />
        <button type='submit'>Create</button>
      </form>

      <p>
        Title: {titleValue}
        <br />
        ImageUrl: {imageUrl} <br />
        Price: <br />
      </p>
    </fieldset>
  );
}
export default AddProduct;
