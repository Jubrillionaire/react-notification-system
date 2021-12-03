import React from 'react';
import PropTypes from 'prop-types';
import { ToastButtons } from './ButtonStyled';

const Button = props => {
    const { label, className, handleClick } = props;

    return (
        <>
            <ToastButtons
                className={className}
                onClick={handleClick}
            >
                {label}
            </ToastButtons>
        </>
    );

}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

export default Button;
