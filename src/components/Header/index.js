import React from 'react';
import './index.css';
import {Tabs, Button} from 'antd-mobile';

// class Header extends React.Component {
  
//   render() {
//     const buttons = [
//       {icon: '#icon-shiliangzhinengduixiang-', text: '地图'},
//       {icon: '#icon-luxian', text: '路线'},
//       {icon: '#icon-fujin', text: '附近'},
//     ].map(({icon, text}) => {
//       const iconElement = <svg className="icon" aria-hidden="true">
//         <use xlinkHref={icon}></use>
//       </svg>;
//       return <Button className="button" icon={iconElement}>{text}</Button>
//     });
//     return (
//       <div className="header">
//         <div className="logo">
//           <svg className="icon" aria-hidden="true">
//             <use xlinkHref=""></use>
//           </svg>
//           <span>高德地图</span>
//         </div>
//         <div className="nav">
//           {buttons}
//         </div>
//       </div>
//     );
//   }
// }

// export default Header;

export default class Header extends React.Component {
  render() {
    const tabs = [
      {icon: '#icon-shiliangzhinengduixiang-', text: '地图'},
      {icon: '#icon-luxian', text: '路线'},
      {icon: '#icon-fujin', text: '附近'},
    ].map(({icon, text}) => {
      const iconElement = <svg className="icon" aria-hidden="true">
        <use xlinkHref={icon}></use>
      </svg>;
      return {title: <Button className="tabBtn" icon={iconElement}>{text}</Button>};
    });
    return (
      <div className="header">
        <div className="logo">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-gaodeditu"></use>
          </svg>
        </div>
        <Tabs tabs={tabs} animated={false}>
        </Tabs>
      </div>
    )
  }
}
