import React, {Component} from 'react';

class Bar extends Component {
    render() {
        const {value, color} = this.props;
        return (
            <div style={{
                marginTop: "40px",
                width: value + "%",
                backgroundColor: color,
                height: "20px"}}>
            </div>
        );
    }
}

export default Bar;
