import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonText,
  IonTextarea,
  IonButton,
  IonList,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonButton,
    ReactiveFormsModule,
    IonTextarea,
    IonText,
    IonRadioGroup,
    IonRadio,
    IonInput,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class AddProductsPage implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
  ) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      ean: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      imageurl: ['', Validators.required],
      rating: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      storagetype: ['', Validators.required],
      // recommended: ['', Validators.required],
      nutritions: this.fb.array([this.createNutritionFormGroup()]),
      ingredients: this.fb.array([this.createIngredientFormGroup()]),
    });
  }
  get nutritions(): FormArray {
    return this.productForm.get('nutritions') as FormArray;
  }

  createNutritionFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      symbol: ['', Validators.required],
    });
  }

  addNutrition(): void {
    this.nutritions.push(this.createNutritionFormGroup());
  }

  removeNutrition(index: number): void {
    this.nutritions.removeAt(index);
  }
  get ingredients(): FormArray {
    return this.productForm.get('ingredients') as FormArray;
  }
  createIngredientFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      riskrate: ['', Validators.required],
      healthrisk: ['', Validators.required],
      scientificsources: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  addIngredient(): void {
    this.ingredients.push(this.createIngredientFormGroup());
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }
  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.createProduct(newProduct).subscribe((response) => {
        console.log('Product created!', response);
      });
    }
  }
}

// addIngredient() {
//   this.product.ingredients.push({
//     name: '',
//     quantity: '',
//     symbol: '',
//   });
// }
// product: any = {
//   ean: '',
//   name: '',
//   title: '',
//   imageurl: '',
//   rating: '',
//   type: '',
//   description: '',
//   storagetype: '',
//   recommended: '',
//   ingredients: [],
//   nutritions: [],
// };
// async addProduct() {
//   const apiUrl = 'http://localhost:3000/products';
//   try {
//     const response = await this.http.post(apiUrl, this.product).toPromise();
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
