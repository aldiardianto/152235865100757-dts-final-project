import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Autoplay,
   
} from "swiper";

import { ItemAgent } from "../../components/itemAgent";
import { NavbarMenu } from "../../components/navbarMenu";
import { useAgentsQuery, useWeaponsQuery } from "../../services/valorantApi";

import "react-loading-skeleton/dist/skeleton.css";
import { Footer } from "../../components/footer";
import { ItemWeapon } from "../../components/itemWeapon";
export const Home = () => {
    const {
        data: dataAgent,
        error: errorAgent,
        isLoading: isLoadingAgent,
    } = useAgentsQuery();

    const {
        data: dataWeapon,
        error: errorWeapon,
        isLoading: isLoadingWeapon,
    } = useWeaponsQuery();

    return (
        <div className=" home-div">
            <NavbarMenu></NavbarMenu>
            <Row className="mt-3 p-5 ">
                {dataAgent ? (
                    <>
                        <Row>
                            <Col>
                                <h3 className="text-white">
                                    All Agent ({dataAgent.data.length})
                                </h3>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true,
                                    }}
                                    loop={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {dataAgent.data.map((v) => (
                                        <SwiperSlide key={v.uuid}>
                                            <ItemAgent item={v} key={v.uuid} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <></>
                )}

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
                    </>
                ) : (
                    <></>
                )}
            </Row>
            <Footer></Footer>
        </div>
    );
};
