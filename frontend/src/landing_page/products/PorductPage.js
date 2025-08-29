import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Unverse from "./universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image="./media/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learMoreLink="https://kite-demo.zerodha.com/dashboard"
        tryDemoLink="https://zerodha.com/products/kite"
        learMoreLinkName="learn more →"
        tryDemoLinkName="Try demo →"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSection
        image="./media/images/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="https://zerodha.com/products/console"
        linkName="Learn more "
      />
      <LeftSection
        image="./media/images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learMoreLink="https://coin.zerodha.com/"
        learMoreLinkName="Coin →"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
      />
      <RightSection
        image="./media/images/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="https://zerodha.com/products/api/"
        linkName="Kite Connect  "
      />
      <LeftSection
        image="./media/images/coin.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <Unverse/>
    </>
  );
}

export default ProductPage;
