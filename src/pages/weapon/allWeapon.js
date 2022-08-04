
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Autoplay,
  
    EffectFade,
    Navigation,

} from "swiper";
import { ItemWeapon } from "../../components/itemWeapon";

import { NavbarMenu } from "../../components/navbarMenu";
import {  useWeaponsQuery } from "../../services/valorantApi";

import 'react-loading-skeleton/dist/skeleton.css'
import { Footer } from "../../components/footer";

export const AllWeapon = () => {
   
    const categoryWeapons = ["Pistols","Rifles","Sniper Rifles",'SMGs',"Heavy Weapons","Shotguns"]
 

    const {
        data: dataWeapon,
        error: errorWeapon,
        isLoading: isLoadingWeapon,
    } = useWeaponsQuery();

    return (
        <div className=" home-div">
            <NavbarMenu></NavbarMenu>
            
            <Row className="mt-3 p-5 ">
            {dataWeapon ? (
                    <>
                        <Row>
                            <Col>
                                <h3 className="text-white">
                                    All Weapon ({dataWeapon.data.length})
                                </h3>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true,
                                    }}
                                    loop={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {dataWeapon.data.map((v) => (
                                        <SwiperSlide key={v.uuid}>
                                            <ItemWeapon item={v} key={v.uuid} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Col>
                        </Row>

                        <Row>
                            {categoryWeapons.map((categoryWeapon) => (
                                <>
                                    <Col md={6}>
                                        <h3 className="text-white">
                                            {categoryWeapon} (
                                            {
                                                
                                                dataWeapon.data.filter(
                                                    (i) =>{
                                                        if(i.shopData){
                                                            if(i.shopData.category == categoryWeapon){
                                                                return true;
                                                            }
                                                        }
                                                        return false;
                                                    }
                                                        
                                                ).length
                                            }
                                            )
                                        </h3>
                                        <Swiper
                                            effect={"fade"}
                                            slidesPerView={1}
                                            spaceBetween={20}
                                            autoplay={{
                                                delay: 10000,
                                                disableOnInteraction: true,
                                            }}
                                            navigation={true}
                                           
                                            loop={true}
                                            modules={[Autoplay, EffectFade, Navigation]}
                                            className="mySwiper"
                                        >
                                            {dataWeapon.data
                                                .filter(
                                                    (i) =>{
                                                        if(i.shopData){
                                                            if(i.shopData.category == categoryWeapon){
                                                                return true;
                                                            }
                                                        }
                                                        return false;
                                                    }
                                                        
                                                )
                                                .map((v) => (
                                                    <SwiperSlide key={v.uuid}>
                                                        <ItemWeapon item={v} key={v.uuid} />
                                                    </SwiperSlide>
                                                ))}
                                        </Swiper>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </>
                ) : (
                    <></>
                )}
                
            </Row>

            <Footer></Footer>
        </div>
    );
};
