import React, {Component} from 'react';

class InputReadOnly extends Component {
    render() {
        const {label, value, color} = this.props;

        return (
            <div style={{minWidth:"50px", maxWidth:"250px"}}>
                <label htmlFor="">{label}</label>
                <input type="text" value={value} style={{color: color, fontWeight: "bold"}} readOnly/>
            </div>
        );
    }
}

export default InputReadOnly;
