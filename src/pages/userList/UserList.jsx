import { useState } from 'react';
import { Link } from 'react-router-dom';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';

const UserList = () => {
  const [ userDataArr, setUserDataArr ] = useState(userRows);

  const handleDeleteUser = (userId) => {
    setUserDataArr( userDataArr.filter((user) => user.id !== userId) );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={ params.row.avatar } alt="" className="userListUserImg" />
            <span className="userListUserName">{ params.row.user }</span>
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListStatus">
            <span
              className={params.row.status === 'active' ? 'userListStatusDot green' : 'userListStatusDot red'}
            ></span>
            <span className="userListStatusText">{ params.row.status }</span>
          </div>
        );
      },
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={`/users/edit/${params.row.id}`}>
              <button className='userListActionEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListActionDelete'
              onClick={ () => handleDeleteUser(params.row.id) }
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={ userDataArr }
        columns={ columns }
        pageSize={ 8 }
        checkboxSelection
        disableSelectionOnClick />
    </div>
  );
};

export default UserList;