export default class MainGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name = "MainGame";

	public preload(): void {
		this.load.path = "assets/";
		this.load.image("phaser_pixel_medium_flat");
	}

	public create(): void {
		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "phaser_pixel_medium_flat");
	}
}
