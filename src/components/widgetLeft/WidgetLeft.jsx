import { Visibility } from '@material-ui/icons';
import './widgetLeft.css';

const WidgetLeft = () => {
  return (
    <div className='homeWidgetLeft'>
      <h3 className="widgetLtTitle">New Join Members</h3>
      <ul className="widgetLtList">
        <li className="widgetLtListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLtImg" />
          <div className="widgetLtInfo">
            <span className="widgetLtName">Anna Keller</span>
            <span className="widgetLtJob">Web Developer</span>
          </div>
          <button className="widgetLtBtn">
            <Visibility className='widgetLtIcon' />
          </button>
        </li>
        <li className="widgetLtListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLtImg" />
          <div className="widgetLtInfo">
            <span className="widgetLtName">Anna Keller</span>
            <span className="widgetLtJob">Web Developer</span>
          </div>
          <button className="widgetLtBtn">
            <Visibility className='widgetLtIcon' />
          </button>
        </li>
        <li className="widgetLtListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLtImg" />
          <div className="widgetLtInfo">
            <span className="widgetLtName">Anna Keller</span>
            <span className="widgetLtJob">Web Developer</span>
          </div>
          <button className="widgetLtBtn">
            <Visibility className='widgetLtIcon' />
          </button>
        </li>
        <li className="widgetLtListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLtImg" />
          <div className="widgetLtInfo">
            <span className="widgetLtName">Anna Keller</span>
            <span className="widgetLtJob">Web Developer</span>
          </div>
          <button className="widgetLtBtn">
            <Visibility className='widgetLtIcon' />
          </button>
        </li>
        <li className="widgetLtListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetLtImg" />
          <div className="widgetLtInfo">
            <span className="widgetLtName">Anna Keller</span>
            <span className="widgetLtJob">Web Developer</span>
          </div>
          <button className="widgetLtBtn">
            <Visibility className='widgetLtIcon' />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetLeft;