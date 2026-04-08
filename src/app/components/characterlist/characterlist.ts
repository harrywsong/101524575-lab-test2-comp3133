import { Component } from '@angular/core';

import { Character } from '../../models/character';
import { HarryPotter } from '../../services/harry-potter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  imports: [],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css',
})
export class Characterlist {
  characters: Character[] = [];

  // fetch the characters from the service when the component is initialized
  constructor(
    private hpService: HarryPotter,
    private router: Router,
  ) {
    this.hpService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }

  // clicking on a character will navigate to the character detail page
  goTo(id: string) {
    this.router.navigate(['/characters', id]);
  }
}
