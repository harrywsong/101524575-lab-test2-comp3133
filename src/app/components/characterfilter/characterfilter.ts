import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../../models/character';
import { HarryPotter } from '../../services/harry-potter';

@Component({
  selector: 'app-characterfilter',
  imports: [FormsModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css',
})
export class Characterfilter {
  characters: Character[] = [];
  houses: string[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  selectedHouse: string = '';

  constructor(
    private hpService: HarryPotter,
    private router: Router,
  ) {}

  onChange() {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe((data) => {
        this.characters = data;
      });
    } else {
      this.characters = [];
    }
  }

  goTo(id: string) {
    this.router.navigate(['/character', id]);
  }
}
