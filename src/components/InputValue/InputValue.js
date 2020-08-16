import React, {Component} from 'react';

class InputValue extends Component {
    handleInputChange = (event) => {
        const newSalary = event.target.value;

        this.props.onChangeSalary(newSalary);
    }

    render() {
        const {fullSalary} = this.props;
        return (
            <div>
                <label htmlFor="">Salário Bruto</label>
                <input type="number" value={fullSalary} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default InputValue;
