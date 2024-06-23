import { NutritionNatureEnum } from '../enums/nutrition-labels.enum';

export function nutritionIcon(nutrition: string) {
  const dictionary = {
    Protein: 'fish-outline',
    'Saturated fat': 'water-outline',
    Sugar: 'cube-outline',
    Calories: 'flame-outline',
    Salt: 'restaurant-outline',
    Additives: 'hand-right-outline',
  };

  return dictionary[nutrition] || 'Word not found';
}
// export function getingredientRating(rating : number){
//   if (rating=== 1){
//     return 'green-rating';
//   } else if (rating === 2)
//     return 'yellow-rating';

// }

export function getRatingClass(rating: number) {
  if (rating < 40) {
    return 'red-rating';
  } else if (rating < 60) {
    return 'orange-rating';
  } else {
    return 'green-rating';
  }
}

export function isNutritionRatingRecommended(
  name: string,
  quantity: number
): boolean {
  switch (name) {
    case NutritionNatureEnum.PROTEIN:
      if (quantity < 8) {
        return false;
      } else {
        return true;
      }
    case NutritionNatureEnum.ADDITIVES:
      if (quantity === 0) {
        return true;
      } else {
        return false;
      }
    case NutritionNatureEnum.CALORIES:
      if (quantity >= 280) {
        return false;
      } else {
        return true;
      }
    case NutritionNatureEnum.SALT:
      if (quantity > 1.4) {
        return false;
      } else {
        return true;
      }
    case NutritionNatureEnum.SATURATED_FAT:
      if (quantity > 6) {
        return false;
      } else {
        return true;
      }
    case NutritionNatureEnum.SUGAR:
      if (quantity > 7) {
        return false;
      } else {
        return true;
      }
    default:
      return true;
  }
}
