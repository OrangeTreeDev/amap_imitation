import React from 'react';
import './index.css';

class TextButton extends React.Component {
  render() {
    const {icon, text, size, color, spacing} = this.props;
    const span = <span style={{marginLeft: spacing, verticalAlign: 'middle'}}>{text}</span>;
    return (
      <a className="button text-button" style={{fontSize: size, color: color}}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={icon}></use>
        </svg>
        { text && span }
      </a>
    );
  }
}

export default TextButton;
