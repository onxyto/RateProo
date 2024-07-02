import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
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
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonList,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      products: this.fb.array([this.createProductFormGroup()]),
    });
  }

  createProductFormGroup(): FormGroup {
    return this.fb.group({
      ean: ['', Validators.required],
      name: ['', Validators.required],
      title: [''],
      imageurl: [''],
      rating: [''],
      type: ['', Validators.required],
      description: [''],
      storagetype: [''],
      nutritions: this.fb.array([]),
      ingredients: this.fb.array([]),
    });
  }

  get products() {
    return this.productForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(this.createProductFormGroup());
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  getNutritionsFormGroup(productIndex: number): FormArray {
    return this.products.at(productIndex).get('nutritions') as FormArray;
  }

  addNutrition(productIndex: number) {
    this.getNutritionsFormGroup(productIndex).push(
      this.fb.group({
        name: [''],
        quantity: [''],
        symbol: [''],
      })
    );
  }

  removeNutrition(productIndex: number, nutritionIndex: number) {
    this.getNutritionsFormGroup(productIndex).removeAt(nutritionIndex);
  }

  getIngredientsFormGroup(productIndex: number): FormArray {
    return this.products.at(productIndex).get('ingredients') as FormArray;
  }

  addIngredient(productIndex: number) {
    this.getIngredientsFormGroup(productIndex).push(
      this.fb.group({
        name: [''],
        riskrate: [''],
        healthrisk: [''],
        description: [''],
        scientificsources: [''],
      })
    );
  }

  removeIngredient(productIndex: number, ingredientIndex: number) {
    this.getIngredientsFormGroup(productIndex).removeAt(ingredientIndex);
  }

  submitForm() {
    if (this.productForm.valid) {
      console.log('Form Data:', this.productForm.value);

      // Replace with your API endpoint
      const apiUrl = 'http://localhost:3000/products/create';

      this.http.post(apiUrl, this.productForm.value).subscribe(
        (response) => {
          console.log('Data sent successfully!', response);
          this.productForm.reset();
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    } else {
      console.error('Form is invalid. Cannot submit.');
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
}
