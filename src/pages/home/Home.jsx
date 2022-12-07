import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetLeft from '../../components/widgetLeft/WidgetLeft';
import WidgetRight from '../../components/widgetRight/WidgetRight';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title='Active User Details' dataKey='Active User' grid />
      <div className="homeWidgets">
        <WidgetLeft />
        <WidgetRight />
      </div>
    </div>
  );
};

export default Home;