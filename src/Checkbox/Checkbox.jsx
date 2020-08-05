import React, { Fragment } from 'react';

const Checkbox = ({ option, onChange, isChecked }) => {
    return (
        <Fragment>
            <label
                htmlFor={option}>
                {option}
            </label>
            <input
                type='checkbox'
                value={option}
                onChange={onChange}
                checked={!!isChecked}
            />
        </Fragment>
    )
}

export default Checkbox;