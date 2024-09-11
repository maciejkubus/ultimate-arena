import { Character } from "../Character";

export const ExampleCharacters = {
  heroes: [
    new Character(
      {
        name: 'Hero 1',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Hero 2',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Hero 3',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Hero 4',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
  ],
  enemies: [
    new Character(
      {
        name: 'Enemy 1',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Enemy 2',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Enemy 3',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
    new Character(
      {
        name: 'Enemy 4',
        health: { current: 100, max: 100},
        energy: { current: 4, max: 8 },
      }, 
      'characters/none.png'
    ),
  ]
}