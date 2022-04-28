import React from "react";
import { DishPreview } from "./DishPreview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const DishList = (props: {
  items: Restaurant[] | Dish[];
  isMinimal?: boolean;
  align?: string;
  disableSwipe?: boolean;
}) => {
  return (
    <section
      className="dish-list flex justify-center align-center"
      style={{ justifyContent: props?.align }}
    >
      {!props.disableSwipe ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {props.items.map((item: Restaurant | Dish) => (
            <SwiperSlide>
              <DishPreview item={item} isMinimal={props.isMinimal} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        props.items.map((item: Restaurant | Dish) => (
          <DishPreview item={item} isMinimal={props.isMinimal} />
        ))
      )}
    </section>
  );
};