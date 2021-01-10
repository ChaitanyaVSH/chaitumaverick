import React from 'react';
import './layout.scss';
 
export const BoxBorderStyle = {
    default: 'ds-box-border--default',
    light: 'ds-box-border--light',
    thick: 'ds-box-border--thick',
}
 
export const BoxStyle = {
    default: 'ds-box--default',
    doubleSpace: 'ds-box--double-space',
    noSpace: 'ds-box--no-space'
}

export const BoxWidthStyle = {
    default: 'ds-box-width-default',
    mediumWidth: 'ds-box-width-medium',
    largeWidth: 'ds-box-width-large'
}
 
export const Page = ({children, fullWidth=true}) => {
    const classNames = `ds-page ${fullWidth ? 'ds-page--fullwidth' : ''}`;
    return (<div className={classNames}>
        {children}
    </div>);
 
};
 
export const Flex = ({ children, lastElRight, lastElLeft, marginTop}) => {
    const classNames = `flex ${lastElRight ? 'flex-align-right' : ''} ${lastElLeft ? 'flex-align-left' : ''} ${marginTop ? 'flex-margin-top' : ''}`;
    return (<div className={classNames}> 
        {children}
    </div>);
};
 
export const Box = ({
    children, borderStyle=BoxBorderStyle.default, boxStyle=BoxStyle.default, boxWidth=BoxWidthStyle.default }) => {
    
    
    const classNames = `ds-box ${borderStyle} ${boxStyle} ${boxWidth}` ;
    return (<div className={classNames}>
        {children}
    </div>);
};