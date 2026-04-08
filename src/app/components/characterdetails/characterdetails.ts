import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character = signal<Character | null>(null);

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.characterService.getCharacterById(id).subscribe(data => {
      this.character.set(data[0]);
    });
  }
}