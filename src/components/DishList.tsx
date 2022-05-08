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

  const setSpaceBetween = (): number => {
    if (isMobile) {
      if ("price" in props.items[0]) return 70;
      else if (props.isMinimal) return -200;
      else return -20;
    }
    return 10;
  };

  return (
    <section
      className={`dish-list flex  ${props.wrap ? "wrap" : ""} ${
        !isMobile && props.align ? "chef-res-list" : ""
      } ${isMobile && props.align ? "small-chef-list" : ""}`}
      style={{ justifyContent: props?.align }}
    >
      {!props.disableSwipe ? (
        <Swiper
          spaceBetween={setSpaceBetween()}
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
