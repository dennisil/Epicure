export const DishPreview = (props: {
  data: Restaurant | Dish;
  isMinimal?: boolean;
}) => {
  // Checks if prop is a dish
  const isDish = (object: any): object is Dish => {
    return "price" in object;
  };

  return (
    <article
      className={
        props.isMinimal ? "card-container min-container" : "card-container"
      }
    >
      {isDish(props.data) && (
        <h1 className="res-title">{props.data.resName}</h1>
      )}
      <div
        className={props.isMinimal ? "item-card min-item-card" : "item-card"}
      >
        <img
          className={
            isDish(props.data)
              ? "dish-img"
              : props.isMinimal
              ? "min-img"
              : "res-img"
          }
          src={props.data.imgUrl}
          alt="Dish "
        />
        {/* Dish Card */}
        {isDish(props.data) ? (
          <div className="card-info dish flex align-center space-between">
            <h1 className="card-secondary-title">{props.data.dishName}</h1>
            <p>{props.data.ingredients}</p>
            <div className="card-icon-container flex column align-center">
              <div className="card-icons-container">
                {props.data.special
                  ? props.data.special.map((special) => (
                      <img
                        className="special-icon"
                        src={`/imgs/special-icon/${special}-icon.svg`}
                        alt=""
                      />
                    ))
                  : ""}
              </div>
              <div className="price-line-container flex align-center">
                <div className="line-1"></div>
                <span className="card-price">₪{props.data.price}</span>
                <div className="line-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card-info">
            {/* Checks if component should render minimal card */}
            <h1
              className={`card-secondary-title${
                props.isMinimal ? " minimal" : ""
              }`}
            >
              {props.data.resName}
            </h1>
            {!props.isMinimal && <h2>{props.data.chef}</h2>}
          </div>
        )}
      </div>
    </article>
  );

  // if (!isDish(props.item) && props.isMinimal) {
  //   return (
  //     <article className="item-card flex column">
  //       {props.item.imgUrl && (
  //         <img
  //           className="min-img"
  //           src={require("../assets/img/dishes/claro.jpg")}
  //           alt=""
  //         />
  //       )}
  //       <h2>{props.item.resName}</h2>
  //     </article>
  //   );
  // }

  // if (!isDish(props.item)) {
  //   return (
  //     <article className="item-card">
  //       {props.item.imgUrl && (
  //         <img
  //           className="res-img"
  //           src={require("../assets/img/dishes/claro.jpg")}
  //           alt=""
  //         />
  //       )}
  //       <h1>{props.item.resName}</h1>
  //       <p>{props.item.chef}</p>
  //     </article>
  //   );
  // }

  // return (
  //   <article className="dish-container">
  //     <h1>{props.item.resName}</h1>
  //     <div className="item-card">
  //       {props.item.imgUrl && (
  //         <img
  //           className="dish-img"
  //           src={require("../assets/img/dishes/claro.jpg")}
  //           alt=""
  //         />
  //       )}
  //       <h1>{props.item.dishName}</h1>
  //       <p>{props.item.ingredients}</p>
  //       <h4 className="dish-price">₪{props.item.price}</h4>
  //     </div>
  //   </article>
  // );
};
