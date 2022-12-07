import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className='featuredItems'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$ 2,454</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className='featuredIcon down' />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$ 4,789</span>
          <span className="featuredMoneyRate">
            -1.75
            <ArrowDownward className='featuredIcon down' />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyWrapper">
          <span className="featuredMoney">$ 2,023</span>
          <span className="featuredMoneyRate">
            +2.1 
            <ArrowUpward className='featuredIcon up' />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;