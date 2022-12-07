import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, MailOutline, ChatBubbleOutline, DynamicFeed, WorkOutline, BarChart, Report } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarMenuTitle">Dashboard</h3>
          <ul className="sidebarMenuList">
            <Link to='/' className='link'>
              <li className='sidebarMenuListItem active'>
                <LineStyle />
                <span className='sidebarMenuLink'>Home</span>
              </li>
            </Link>
            <li className="sidebarMenuListItem">
              <Timeline />
              <span className='sidebarMenuLink'>Analytics</span>
            </li>
            <li className="sidebarMenuListItem">
              <TrendingUp />
              <span className='sidebarMenuLink'>Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarMenuTitle">Quick Menu</h3>
          <ul className="sidebarMenuList">
            <Link to='/users' className='link'>
              <li className="sidebarMenuListItem">
                <PermIdentity />
                <span className='sidebarMenuLink'>Users</span>
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className="sidebarMenuListItem">
                <Storefront />
                <span className='sidebarMenuLink'>Products</span>
              </li>
            </Link>
            <li className="sidebarMenuListItem">
              <AttachMoney />
              <span className='sidebarMenuLink'>Transactions</span>
            </li>
            <li className="sidebarMenuListItem">
              <BarChart />
              <span className='sidebarMenuLink'>Reports</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarMenuTitle">Notifications</h3>
          <ul className="sidebarMenuList">
            <li className="sidebarMenuListItem">
              <MailOutline />
              <span className='sidebarMenuLink'>Mail</span>
            </li>
            <li className="sidebarMenuListItem">
              <DynamicFeed />
              <span className='sidebarMenuLink'>Feedback</span>
            </li>
            <li className="sidebarMenuListItem">
              <ChatBubbleOutline />
              <span className='sidebarMenuLink'>Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarMenuTitle">Staff</h3>
          <ul className="sidebarMenuList">
            <li className="sidebarMenuListItem">
              <WorkOutline />
              <span className='sidebarMenuLink'>Manage</span>
            </li>
            <li className="sidebarMenuListItem">
              <Timeline />
              <span className='sidebarMenuLink'>Analytics</span>
            </li>
            <li className="sidebarMenuListItem">
              <Report />
              <span className='sidebarMenuLink'>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;