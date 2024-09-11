import type { CharacterStats } from "$lib/interfaces/character-stats.interface";
import type { Stat } from "$lib/interfaces/stat.interface";
import { Assets, Sprite } from 'pixi.js';

export class Character implements CharacterStats {

  name: string;
  health: Stat;
  energy: Stat;
  image: string;

  private sprite: Sprite | undefined;

  constructor(
    data: {
      name: string; 
      health: Stat; 
      energy: Stat;
    }, 
    image: string
  ) {
    this.name = data.name;
    this.health = data.health;
    this.energy = data.energy;
    this.image = image;

    this.loadSprite();
  }

  private async loadSprite() {
    const texture = await Assets.load('bunny.png');
		this.sprite = new Sprite(texture);
  }

  getSprite(): Sprite {
    if(!this.sprite)
      throw Error('Sprite for ' + this.name + ' not loaded')

    return this.sprite;
  }

}