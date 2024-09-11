import { Container, type Renderer } from 'pixi.js';
import type { Character } from "./Character";

export class CharactersManager {

  private heroes: Character[];
  private enemies: Character[]

  constructor(heroes: Character[], enemies: Character[]) {
    if(heroes.length != 4 || enemies.length != 4)
      throw new Error('Teams must consist of 4 characters')

    this.heroes = heroes;
    this.enemies = enemies;
  }

  getHeroes() {
    return this.heroes;
  }

  getEnemies() {
    return this.enemies;
  }

  getCharacters() {
    return [...this.heroes, ...this.enemies];
  }

  addToStage(stage: Container, renderer: Renderer) {
    const CHARACTER_WIDTH = 80;
    const CHARACTER_HEIGHT = 120;
    const SPACE_BETWEEN_CHARACTERS = 20;
    const SPACE_BETWEEN_TEAMS = 340;
    
    const center = { x: renderer.width / 2, y: renderer.height / 2 };

    const startPosition = 
      center.x - ((CHARACTER_WIDTH + SPACE_BETWEEN_CHARACTERS) * 4) - (SPACE_BETWEEN_TEAMS / 2);
    const space = CHARACTER_WIDTH + SPACE_BETWEEN_CHARACTERS;

    let position = startPosition;
    this.getCharacters().forEach((character, index) => {
      const sprite = character.getSprite();
      sprite.anchor.x = 0.5;
      sprite.anchor.y = 0.5;
      sprite.x = position;
      sprite.y = center.y;
      sprite.width = CHARACTER_WIDTH;
      sprite.height = CHARACTER_HEIGHT;

      position += (index == 3 ? SPACE_BETWEEN_TEAMS : space);

      stage.addChild(sprite);
    })
  }

}