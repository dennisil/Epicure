import { DishPreview } from "./DishPreview";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
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
          spaceBetween={
            isMobile
              ? "price" in props.items[0]
                ? 10
                : props.isMinimal
                ? -100
                : -65
              : 10
          }
          slidesPerView={isMobile ? 1.7 : 3}
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
