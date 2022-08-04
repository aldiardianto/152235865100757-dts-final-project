
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

import { ItemAgent } from "../../components/itemAgent";
import { NavbarMenu } from "../../components/navbarMenu";
import { useAgentsQuery } from "../../services/valorantApi";

import 'react-loading-skeleton/dist/skeleton.css'
import { Footer } from "../../components/footer";

export const AllAgent = () => {
    const role = ["Initiator", "Controller", "Duelist", "Sentinel"];
    const {
        data: dataAgent,
        error: errorAgent,
        isLoading: isLoadingAgent,
    } = useAgentsQuery();

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
                        <Row>
                            {role.map((role) => (
                                <>
                                    <Col md={6}>
                                        <h3 className="text-white">
                                            {role} (
                                            {
                                                dataAgent.data.filter(
                                                    (i) =>
                                                        i.role.displayName ==
                                                        role
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
                                            {dataAgent.data
                                                .filter(
                                                    (i) =>
                                                        i.role.displayName ==
                                                        role
                                                )
                                                .map((v) => (
                                                    <SwiperSlide key={v.uuid}>
                                                        <ItemAgent item={v} key={v.uuid} />
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
                {/* <ItemAgent/> */}
            </Row>
            <Footer></Footer>
        </div>
    );
};
