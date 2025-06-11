import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


import styles from "./style.module.css"
export const TopBar = () => {
  return (
<>
 <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
        <SwiperSlide className={styles.swiperSlide}>
          
          <div className={styles.swiperContent}>
            <img src="public/image 7.png" width={100} height={40} />
          <h1><span className={styles.swiperSpan}>Stan Smith,</span><br />
            Forever!</h1>
            <button className={styles.swiperButton}>Купить</button>
</div>
          <img src="public/image 6.png" width={641} className={styles.img} />
          </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}></SwiperSlide>


      </Swiper>
</>
  )
}
