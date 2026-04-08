import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters = signal<Character[]>([]);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters.set(data);
    });
  }
}