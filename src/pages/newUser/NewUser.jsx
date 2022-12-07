import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h2 className="newUserTitle">New User</h2>
      <form className="newUserForm">
        <div className="newUserFormFieldsGroup">
          <div className="newUserFormField">
            <label>Username</label>
            <input type="text" placeholder='john' />
          </div>
          <div className="newUserFormField">
            <label>Full Name</label>
            <input type="text" placeholder='John Smith' />
          </div>
        </div>
        <div className="newUserFormFieldsGroup">
          <div className="newUserFormField">
            <label>Email</label>
            <input type="email" placeholder='user@example.com' />
          </div>
          <div className="newUserFormField">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="newUserFormFieldsGroup">
          <div className="newUserFormField">
            <label>Phone</label>
            <input type="text" placeholder='+1 234 567 890' />
          </div>
          <div className="newUserFormField">
            <label>Address</label>
            <input type="text" placeholder='New York | USA' />
          </div>
        </div>
        <div className="newUserFormFieldsGroup">
          <div className="newUserFormField">
            <label>Gender</label>
            <div className="newUserRadioGroup">
              <input type="radio" name='gender' id='male' value='male' />
              <label for="male">Male</label>
              <input type="radio" name='gender' id='female' value='female' />
              <label for="female">Female</label>
              <input type="radio" name='gender' id='other' value='other' />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserFormField">
            <label>Active</label>
            <select className='newUserSelectGroup' name='active' id='active'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button type="submit" className='newUserCreateBtn'>Create</button>
      </form>
    </div>
  );
};

export default NewUser;