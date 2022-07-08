import React, { Suspense } from 'react'
import { Themes } from "react-tradingview-widget";
import dynamic from "next/dynamic";

// import { createChart } from 'lightweight-charts';

import { View } from './TradingView.Styled';
const TradingViewWidget = dynamic(() => import("react-tradingview-widget"), {
  ssr: false,
});


const TradingView = () => {


  return (
    <View>
       
        <TradingViewWidget
          symbol={`XAUUSD`}
          theme={Themes.DARK}
          autosize="true"
          locale="en"
          interval="10"
          hide_top_toolbar='true'
        />
      
        
    </View>
  )
}

export default TradingView