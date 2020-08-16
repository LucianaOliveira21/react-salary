import React, {Component} from 'react';
import "./styles.css";
import InputValue from "./components/InputValue/InputValue";
import InputReadOnly from "./components/inputReadOnly/InputReadOnly";
import {calculateSalaryFrom} from "./helpers/salary";
import Bar from "./components/bar/Bar";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            fullSalary: 3900,
        };

        this.render();
    }

    handleChangeSalary = (newSalary) => {
        this.setState({
            fullSalary: newSalary,
        });
    }

    render() {
        const {fullSalary} = this.state;
        const {baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary, percentINSS, percentIRPF, percentNetSalary} = calculateSalaryFrom(fullSalary);

        return (
            <div className="container">
                <h1 style={{textAlign: "center"}}>React Salário</h1>
                <InputValue fullSalary={fullSalary} onChangeSalary={this.handleChangeSalary}/>

                <div className="rowInfo">
                    <InputReadOnly label="Base INSS" value={baseINSS} />
                    <InputReadOnly label="Desconto INSS" value={`${discountINSS} (${percentINSS}%)`} color="#e67e22" />
                    <InputReadOnly label="Base IRPF" value={baseIRPF } />
                    <InputReadOnly label="Desconto IRPF" value={`${discountIRPF} (${percentIRPF}%)`} color="#c0392b" />
                    <InputReadOnly label="Salário Líquido" value={`${netSalary} (${percentNetSalary}%)`} color="#16a085" />
                </div>

                <div className="bar">
                    <Bar value={percentINSS} color="#e67e22"/>
                    <Bar value={percentIRPF} color="#c0392b"/>
                    <Bar value={percentNetSalary} color="#16a085"/>
                </div>
            </div>
        );
    }
}
