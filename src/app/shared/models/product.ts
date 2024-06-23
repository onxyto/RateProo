export interface Nutrition {
  name: string;
  quantity: number;
  symbol: string;
}
export interface Ingredient {
  name: string;
  riskrate: number;
  healthrisk: string;
  scientificsources: string;
  description: string;
}
export interface Product {
  id: number;
  productame: string;
  storageType: string;
  nutritions: Nutrition[];
  Ingredients: Ingredient[];
}
