import './widgetRight.css';

const WidgetRight = () => {
  const Button = ({ type }) => {
    return <button className={`widgetRtButton ${type}`}>{ type }</button>
  };

  return (
    <div className='homeWidgetRight'>
      <h3 className="widgetRtTitle">Latest Transactions</h3>
      <table className="widgetRtTable">
        <thead>
          <tr className="widgetRtTr">
            <th className="widgetRtTh">Customer</th>
            <th className="widgetRtTh">Date</th>
            <th className="widgetRtTh">Amount</th>
            <th className="widgetRtTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetRtTr">
            <td className="widgetRtUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetRtUserImg" />
              <span className="widgetRtUserName">Stepheny McMan</span>
            </td>
            <td className="widgetRtDate">21 Nov 2022</td>
            <td className="widgetRtAmount">$125</td>
            <td className="widgetRtStatus">
              <Button type='Approved' />
            </td>
          </tr>
          <tr className="widgetRtTr">
            <td className="widgetRtUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetRtUserImg" />
              <span className="widgetRtUserName">Sarah Taylor</span>
            </td>
            <td className="widgetRtDate">21 Nov 2022</td>
            <td className="widgetRtAmount">$125</td>
            <td className="widgetRtStatus">
              <Button type='Pending' />
            </td>
          </tr>
          <tr className="widgetRtTr">
            <td className="widgetRtUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetRtUserImg" />
              <span className="widgetRtUserName">Stepheny McMan</span>
            </td>
            <td className="widgetRtDate">21 Nov 2022</td>
            <td className="widgetRtAmount">$125</td>
            <td className="widgetRtStatus">
              <Button type='Approved' />
            </td>
          </tr>
          <tr className="widgetRtTr">
            <td className="widgetRtUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetRtUserImg" />
              <span className="widgetRtUserName">Stepheny McMan</span>
            </td>
            <td className="widgetRtDate">21 Nov 2022</td>
            <td className="widgetRtAmount">$125</td>
            <td className="widgetRtStatus">
              <Button type='Rejected' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetRight;