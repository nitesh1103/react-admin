import Chart from '../../components/chart/Chart';
import './product.css';
import { productSalesData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='product'>
      <div className="productTitleWrapper">
        <h2 className="productTitle">Product</h2>
        <Link to='/products/create'>
          <button className="productCreateBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart 
            data={ productSalesData }
            title='Sales Perfomance (last 3 months)'
            dataKey='Sales' 
          />
        </div>
        <div className="productTopRight">
          <div className="productTopRightTitleWrapper">
            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productTopRightImg" />
            <div className="productTopRightName">Apple Airpods</div>
          </div>
          <ul className="productTopRightInfoList">
            <li className="productTopRightInfoItem">
              <span className="productTopRightInfoItemKey">id:</span>
              <span className="productTopRightInfoItemValue">232</span>
            </li>
            <li className="productTopRightInfoItem">
              <span className="productTopRightInfoItemKey">sales:</span>
              <span className="productTopRightInfoItemValue">2321</span>
            </li>
            <li className="productTopRightInfoItem">
              <span className="productTopRightInfoItemKey">active:</span>
              <span className="productTopRightInfoItemValue green">yes</span>
            </li>
            <li className="productTopRightInfoItem">
              <span className="productTopRightInfoItemKey">in stock:</span>
              <span className="productTopRightInfoItemValue red">no</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <div className="productFormFields">
              <label>Product Name</label>
              <input type="text" value='Apple Airpods' className='productFormInput' />
            </div>
            <div className="productFormFields">
              <label>In Stock</label>
              <select name="inStock" id="inStock" className='productFormSelect'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormFields">
              <label>Active</label>
              <select name="active" id="active" className='productFormSelect'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish className='productUploadFile' />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button type='submit' className="productFormUpdateBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;