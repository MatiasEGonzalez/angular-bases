import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45

  changeHero(): void {
    this.name = 'Batman'
  }
  changeAge(): void{
    this.age = 30
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
  }


  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }



  getHeroDescription():string {
    return `This is a hero named ${this.name} who is ${this.age} years old`;

  }

}
