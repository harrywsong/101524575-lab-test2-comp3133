import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [FormsModule, RouterLink, MatSelectModule, MatFormFieldModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse = signal('Gryffindor');
  characters = signal<Character[]>([]);

  constructor(private characterService: CharacterService) {
    this.loadHouse('Gryffindor');
  }

  onHouseChange(house: string): void {
    this.selectedHouse.set(house);
    this.loadHouse(house);
  }

  loadHouse(house: string): void {
    this.characterService.getCharactersByHouse(house).subscribe(data => {
      this.characters.set(data);
    });
  }
}