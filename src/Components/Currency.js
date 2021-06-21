import React from "react";
import "./Currency.css";
import { ReactComponent as BitCoin } from "../SVGs/CurrencyNames/bitcoin.svg";
import { ReactComponent as Ethereum } from "../SVGs/CurrencyNames/ethereum.svg";
import { ReactComponent as LiteCoin } from "../SVGs/CurrencyNames/litecoin.svg";
import { ReactComponent as BitCoinCash } from "../SVGs/CurrencyNames/bitcoincash.svg";

function Currency(props) {
  let iconName = props.name;
  
  let price = "USD " + props.price;

  let dayChange = props.dayChange;

  if(typeof dayChange != "undefined"){
    dayChange = dayChange.toFixed(3);
    if(!dayChange.includes("-")){
        dayChange = "+" + dayChange;
    }

  }




  

  
    

  if (iconName === "BitCoin") {
    return (
      <div className="currency_details">
        <div class="name_and_icon">
          <BitCoin />
        </div>
        <div class="current_price">{price}</div>
        <div class="percentage_change">{dayChange}</div>
        <button class="buy_button">Buy</button>
      </div>
    );
  } else if (iconName === "Ethereum") {
    return (
      <div className="currency_details">
        <div class="name_and_icon">
          <Ethereum />
        </div>
        <div class="current_price">{price}</div>
        <div class="percentage_change">{dayChange}</div>
        <button class="buy_button">Buy</button>
      </div>
    );
  } else if (iconName === "LiteCoin") {
    return (
        <div className="currency_details">
          <div class="name_and_icon">
            <LiteCoin />
          </div>
          <div class="current_price">{price}</div>
          <div class="percentage_change">{dayChange}</div>
          <button class="buy_button">Buy</button>
        </div>
      );
  } else if (iconName === "BitCoinCash") {
    return (
        <div className="currency_details">
          <div class="name_and_icon">
            <BitCoinCash />
          </div>
          <div class="current_price">{price}</div>
          <div class="percentage_change">{dayChange}</div>
          <button class="buy_button">Buy</button>
        </div>
      );
  }
  else if(iconName == "headers"){
    return (
        <div className="currency_details bottom_border currency_header">
          <div class="name_header">Currency</div>
          <div class="current_price_header">Price</div>
          <div class="percentage_change_header">24hr Change %</div>
          <div class="trade_header">Trade</div>
        </div>
      );
  }
}

export default Currency;
