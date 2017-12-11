import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  selectedDog: Dog; //esta variable tipo Dog almacenará el dog que el usuario seleccione
  dogs1: Dog[]; //esta variable tipo array Dog almacenará los datos resultantes de la promesa de servicio DogService
  aaa: boolean = !this.aaa;

  getDogs(): void {
    this.dogService.getDogs().then(dogs => this.dogs1 = dogs);
  }
  onSelect(dog: Dog): void {
    this.selectedDog = dog;
    this.aaa = !this.aaa;
    // this.aaa = true;
  }
}
