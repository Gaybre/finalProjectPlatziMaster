import React from 'react';

import Icon from './Icon';

const IconButton = (props) => {
  const { iconName, size, colorIcon, handleClick, bgColor, space, type } = props;
  return (
    <button 
        onClick={handleClick} 
        style={{backgroundColor: ` ${bgColor} `, padding : `${space}`, boxShadow: `var(--Box-Shadow-no-color) ${bgColor}`}} 
        className={`icon-button icon-button--${type}`}>
        <Icon iconName={iconName} size={size} color={colorIcon} />
    </button>
  );
};

export default IconButton;
