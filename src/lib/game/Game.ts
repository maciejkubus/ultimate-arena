import { Application } from 'pixi.js';
import { CharactersManager } from './CharactersManager';
import { ExampleCharacters } from './data/characters.example';

export class Game {

  constructor(element: HTMLElement) {
    this.init(element)
  }

  private async init(element: HTMLElement) {
    const app = new Application();
		await app.init({ background: '#1099bb', resizeTo: element });
		element.appendChild(app.canvas);

    const charactersManager = new CharactersManager(
      ExampleCharacters.heroes,
      ExampleCharacters.enemies
    );

    charactersManager.addToStage(app.stage, app.renderer);

		// const texture = await Assets.load('bunny.png');
		// const bunny = new Sprite(texture);
		// bunny.x = app.renderer.width / 2;
		// bunny.y = app.renderer.height / 2;
		// bunny.anchor.x = 0.5;
		// bunny.anchor.y = 0.5;
		// app.stage.addChild(bunny);
		// app.ticker.add(() => {
		// 	bunny.rotation += 0.01;
		// });
  }
}