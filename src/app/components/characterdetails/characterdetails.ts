import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character';
import { HarryPotter } from '../../services/harry-potter';

@Component({
  selector: 'app-characterdetails',
  imports: [CommonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css',
})
export class Characterdetails {
  character: Character | null = null;

  constructor(private hpService: HarryPotter, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacter(id).subscribe((data) => {
        this.character = data;
      });
    }
  }
}
