export interface Fruit {
  __v: number;
  _id: string;
  name: string;
  id: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
    _id: string;
  };
}

export interface GroupedFruits {
  [key: string]: Fruit[];
}

export interface FruitWithCount extends Fruit {
  count: number;
}
