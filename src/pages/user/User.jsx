import { 
  CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

const User = () => {
  return (
    <div className='user'>
      <div className="userTitleWrapper">
        <span className="userTitle">Edit User</span>
        <Link to='/users/create'>
          <button className="userCreateBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userInfoBox">
          <div className="userInfoTop">
            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userInfoTopImg" />
            <div className="userInfoTopTitle">
              <span className="userInfoTopName">Anna Becker</span>
              <span className="userInfoTopJob">Software Developer</span>
            </div>
          </div>
          <div className="userInfoBottom">
            <span className="userInfoBottomTitle">Account Details</span>
            <div className="userInfoBottomDetails">
              <PermIdentity className='userInfoBottomIcon' />
              <span className="userInfoBottomText">annabeck99</span>
            </div>
            <div className="userInfoBottomDetails">
              <CalendarToday className='userInfoBottomIcon' />
              <span className="userInfoBottomText">24.11.2002</span>
            </div>

            <span className="userInfoBottomTitle">Contact</span>
            <div className="userInfoBottomDetails">
              <PhoneAndroid className='userInfoBottomIcon' />
              <span className="userInfoBottomText">+1 928 374 191</span>
            </div>
            <div className="userInfoBottomDetails">
              <MailOutline className='userInfoBottomIcon' />
              <span className="userInfoBottomText">annabeck99@gmail.com</span>
            </div>
            <div className="userInfoBottomDetails">
              <LocationSearching className='userInfoBottomIcon' />
              <span className="userInfoBottomText">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdateBox">
          <h3 className="userUpdateTitle">Edit</h3>
          <form className="userUpdateForm">
            <div className="userUpdateFormLeft">
              <div className="userUpdateFieldGroup">
                <label>Username</label>
                <input type="text" placeholder='annabeck99' />
              </div>
              <div className="userUpdateFieldGroup">
                <label>Full Name</label>
                <input type="text" placeholder='Anna Becker' />
              </div>
              <div className="userUpdateFieldGroup">
                <label>Email</label>
                <input type="email" placeholder='annabeck99@gmail.com' />
              </div>
              <div className="userUpdateFieldGroup">
                <label>Phone</label>
                <input type="text" placeholder='+1 928 374 191' />
              </div>
              <div className="userUpdateFieldGroup">
                <label>Address</label>
                <input type="text" placeholder='New York | USA' />
              </div>
            </div>
            <div className="userUpdateFormRight">
              <div className="userUpdateUpload">
                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                <label htmlFor="userUpdateFile">
                  <Publish className='userUpdateFileIcon' />
                </label>
              </div>
              <input type="file" id="userUpdateFile" style={{ display: 'none' }} />
              <button type='submit' className='userUpdateBtn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;