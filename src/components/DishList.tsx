import { DishPreview } from "./DishPreview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const DishList = (props: {
  items: Restaurant[] | Dish[];
  isMinimal?: boolean;
  align?: string;
  disableSwipe?: boolean;
  wrap?: boolean;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <section
      className={`dish-list flex  ${props.wrap ? "wrap" : ""} ${
        !isMobile && props.align ? "chef-res-list" : ""
      } ${isMobile && props.align ? "small-chef-list" : ""}`}
      style={{ justifyContent: props?.align }}
    >
      {!props.disableSwipe ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={isMobile ? ("price" in props.items[0] ? 60 : -20) : 10}
          slidesPerView={isMobile ? 1.7 : 3}
          // pagination={{ clickable: true }}
        >
          {props.items.map((item: Restaurant | Dish) => (
            <SwiperSlide>
              <DishPreview data={item} isMinimal={props.isMinimal} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        props.items.map((item: Restaurant | Dish) => (
          <DishPreview data={item} isMinimal={props.isMinimal} />
        ))
      )}
    </section>
  );
};
