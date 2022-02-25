import React from 'react';
import Axios from "axios"

export default class SbiApiComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            sbiList: []
        }
    }

    render() {
        return (
            <div>
                <h2>SBI Price Feed: </h2>
                <div className="card text-center" style={{ width: '250px', margin: '40px', display: 'inline-block' }}>
                    <div>
                        <p className="card-text"><b>HP: </b>{this.state.sbiList.HP}<br></br><b>DISPID: </b>{this.state.sbiList.DISPID}<br></br><b>cl5yPerChange: </b>{this.state.sbiList.cl5yPerChange}<br></br><b>BIDQ: </b>{this.state.sbiList.BIDQ}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    componentDidMount() {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            this.setState({
                sbiList: response.data.data
            })
        })
    }
}