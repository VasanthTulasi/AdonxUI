import React, { Component } from "react";
import Currency from "./Currency";
import "./Currencies.css";

export class Currencies extends Component {
  //const apiUrl  = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cripple%2Cethereum%2Ctether%2Clitecoin&vs_currencies=usd&include_24hr_change=true";


  constructor(props){
      super(props);
      this.state ={
          currentPrices: [],
          dayChange: []
      }
      
  }

  componentDidMount(){
    this.fetchData();
  }


  fetchData(){
      const that = this;
      //To get data from BitCoin, Ethereum, LiteCoin, Ripple and Tether
    const apiUrl  = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cripple%2Cethereum%2Cbitcoin-cash%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    

    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        // console.log("Logging json data");
        // console.log(data);
        let prices = []
        let dayChangeValues = [];
        // console.log("Logging keys");
       

            prices.push(data.bitcoin.usd);
            prices.push(data.ethereum.usd);
            prices.push(data.litecoin.usd);
            prices.push(data['bitcoin-cash'].usd);

            dayChangeValues.push(data.bitcoin.usd_24h_change);
            dayChangeValues.push(data.ethereum.usd_24h_change);
            dayChangeValues.push(data.litecoin.usd_24h_change);
            dayChangeValues.push(data['bitcoin-cash'].usd_24h_change);

            that.setState({currentPrices: prices,dayChange: dayChangeValues});

            // console.log("Logging state values");
            // console.log(that.state.currentPrices);
            // console.log(that.state.dayChange);
        
    });

    // setTimeout(() => {
    //     that.fetchData();
    //    }, 10000);
  }

  
  render() {
    return (
        <div class="currencies_and_heading">
          <div class="start_trading_text">
            Get Started With Crypto Trading Today...!
          </div>
          <div class="all_currencies">
            <Currency name="headers"></Currency>
            <Currency name="BitCoin" price={this.state.currentPrices[0]} dayChange={this.state.dayChange[0]}></Currency>
          <Currency name="Ethereum" price={this.state.currentPrices[1]} dayChange={this.state.dayChange[1]}></Currency>
          <Currency name="LiteCoin" price={this.state.currentPrices[2]} dayChange={this.state.dayChange[2]}></Currency>
          <Currency name="BitCoinCash" price={this.state.currentPrices[3]} dayChange={this.state.dayChange[3]}></Currency>  
          </div>
        </div>
    );
  }
}

export default Currencies;
