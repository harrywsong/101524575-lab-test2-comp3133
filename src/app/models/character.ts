export interface Character {
  id: string;
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand: Wand;
  actor: string;
  image: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: number;
}