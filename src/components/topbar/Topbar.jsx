import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">nitsadmin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconWrapper">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconWrapper">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconWrapper">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topbarAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;