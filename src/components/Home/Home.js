import { React } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Home.css";
import { Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Home() {

    const responsive = {
        0: { items: 2 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
            <img src='https://bonafide.com.ar/media/2020/07/SECCION_CAFE_1000x1000_22-julio-2020-BONAFIDE.jpg'></img>
            <p>Café</p>
        </div>,
        <div className="item" data-value="1">
            <img src='https://bonafide.com.ar/media/2020/08/Bonafide_Choco-web.jpg'></img>
            <p>Chocolate</p>
        </div>,
        <div className="item" data-value="1">
            <img src='https://bonafide.com.ar/media/2020/08/Bonafide_Varios-web.jpg'></img>
            <p>Varios</p>
        </div>,
        <div className="item" data-value="4">
            <img src='https://bonafide.com.ar/media/2020/08/Bonafide_Desayuno-web.jpg'></img>
            <p>Desayuno</p>
        </div>,
    ];

    return (
        <>
            {/* Carrousel Header */}
            {/* <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true}>
                <div>
                    <img src="https://previews.123rf.com/images/anitasstudio/anitasstudio1604/anitasstudio160400069/55944578-los-granos-de-la-taza-de-caf%C3%A9-caf%C3%A9-en-el-fondo-de-madera-vieja.jpg"></img>
                </div>

                <div>
                    <img src="https://previews.123rf.com/images/anitasstudio/anitasstudio1604/anitasstudio160400069/55944578-los-granos-de-la-taza-de-caf%C3%A9-caf%C3%A9-en-el-fondo-de-madera-vieja.jpg"></img>
                </div>

                <div>
                    <img src="https://previews.123rf.com/images/anitasstudio/anitasstudio1604/anitasstudio160400069/55944578-los-granos-de-la-taza-de-caf%C3%A9-caf%C3%A9-en-el-fondo-de-madera-vieja.jpg"></img>
                </div>

                <div>
                    <img src="https://previews.123rf.com/images/anitasstudio/anitasstudio1604/anitasstudio160400069/55944578-los-granos-de-la-taza-de-caf%C3%A9-caf%C3%A9-en-el-fondo-de-madera-vieja.jpg"></img>
                </div>
            </Carousel> */}
            <Grid className="category" container justify="space-between" alignItems="center">
                <h2>CATEGORÍAS</h2>
                <a href="#"><p>Explorar todo</p> <ChevronRightIcon /></a>
            </Grid>
            <Grid className="carousel" container justify="center">
                <AliceCarousel
                    className="carrousel-container"
                    items={items}
                    infinite
                    disableDotsControls={true}
                    responsive={responsive}
                    disableSlideInfo={true}
                />
            </Grid>
            
            {/* End Carrousel Header */}
        </>
    )
}

export default Home;