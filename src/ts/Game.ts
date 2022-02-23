import 'phaser';
import MainGame from "./Scenes/MainGame";

const gameConfig: Phaser.Types.Core.GameConfig = {
	width: 400,
	height: 300,
	type: Phaser.AUTO,
	parent: "content",
	title: "Starter Project for Phaser 3"
};

export default class Game extends Phaser.Game {
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);

		this.scene.add(MainGame.Name, MainGame);
		this.scene.start(MainGame.Name);
	}
}

window.onload = (): void => {
	const game = new Game(gameConfig);
};
