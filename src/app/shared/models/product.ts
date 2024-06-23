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

export enum ProductTypeEnum {
  FOOD = 'FOOD',
  COSMETIC = 'COSMETIC',
  DRINK = 'DRINK',
  NONE = 'NONE',
}

export interface IngredientDto {
  id: string;
  name: string;
  riskRate: number;
  healthRisk: string;
  description: string;
  scientificSources: string;
}

export interface NutritionDto {
  id: string;
  name: string;
  quantity: number;
  symbol: string;
  rating: string;
}

export interface ProductListDto {
  id: string;
  ean: string;
  name: string;
  title: string;
  image_url: string;
  rating: number;
  type: ProductTypeEnum;
  recommended: boolean;
  description: string;
  storage_type: string;
  deleted: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ProductDetailsDto {
  id: string;
  ean: string;
  name: string;
  title: string;
  image_url: string;
  rating: number;
  type: ProductTypeEnum;
  recommended: boolean;
  description: string;
  storage_type: string;
  nutritions: NutritionDto[];
  ingredients: IngredientDto[];
  deleted: boolean;
  created_at: Date;
  updated_at: Date;
}
