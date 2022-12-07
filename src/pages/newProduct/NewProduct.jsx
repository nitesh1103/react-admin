import './newProduct.css';

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h2 className="newProductTitle">New Product</h2>
      <form className="newProductForm">
        <div className="newProductFields">
          <label>Image</label>
          <input type="file" className='newProductFile' />
        </div>
        <div className="newProductFields">
          <label>Name</label>
          <input type="text" placeholder='Apple Airpods' />
        </div>
        <div className="newProductFields">
          <label>Stock</label>
          <input type="text" placeholder='123' />
        </div>
        <div className="newProductFields">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className='newProductCreateBtn'>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;