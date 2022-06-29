import React from "react";
import SliderBanner from '../../components/HomePageComponents/SliderBanner/SliderBanner'
import ShopByCategory from '../../components/HomePageComponents/ShopByCategory/ShopByCategory'
import InfoSlider from '../../components/HomePageComponents/InfoSlider/InfoSlider'
import './style.scss'
import TopDeals from "../../components/HomePageComponents/TopDeals/TopDeals";


import Banner5Pic from '../../components/HomePageComponents/Banner5Pic/Banner5Pic'
import StayInformed from '../../components/HomePageComponents/StayInfomred/StayInformed'
import LogoSlider from "../../components/HomePageComponents/LogoSlider/LogoSlider";
import BestSelling from '../../components/HomePageComponents/BestSelling/BestSelling'
import NewArrivals from "../../components/HomePageComponents/NewArrivals/NewArrivals"
const HomePage = () => {
    return (
        <>
            <div className="HomePage-Container">


                <SliderBanner></SliderBanner>
                <Banner5Pic></Banner5Pic>
                <BestSelling></BestSelling>
                <ShopByCategory></ShopByCategory>
                <TopDeals></TopDeals>
                <InfoSlider></InfoSlider>
                <NewArrivals></NewArrivals>
                <StayInformed></StayInformed>
                <LogoSlider></LogoSlider>

            </div>
        </>
    )
}
export default HomePage