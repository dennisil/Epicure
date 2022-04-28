interface Restaurant {
  resName: string;
  chef: string;
  imgUrl: string;
  tags?: string[];
}
interface Dish extends Restaurant {
  dishName: string;
  price: number;
  ingredients: string;
  special?: string[];
}
