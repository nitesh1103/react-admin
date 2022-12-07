import './productList.css';
import { productRows } from '../../dummyData';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [ products, setProducts ] = useState(productRows);

  const handleDeleteProduct = (id) => {
    setProducts( products.filter((product) => product.id !== id) );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img src={ params.row.photo } alt="" className="productListProdImg" />
            { params.row.product }
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 120 },
    { 
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListStatus">
            <span 
            className={params.row.status === 'Active' ? 'productListStatusDot green' : 'productListStatusDot red'}></span>
            { params.row.status }
          </div>
        );
      },
    },
    { field: 'price', headerName: 'Price', width: 160 },
    { 
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productListActions">
            <Link to={`/products/edit/${params.row.id}`}>
              <button className="productListActionEdit">Edit</button>
            </Link>
            <DeleteOutline 
              className='productListDeleteBtn'
              onClick={ () => handleDeleteProduct(params.row.id) } 
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={ products }
        columns={ columns }
        pageSize={ 8 }
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;