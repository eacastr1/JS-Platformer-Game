class Player extends GameObject {
    /* Player Properties */
    #physics;
    #isJumping;
    #currentPose;

    constructor(x, y) {
        super(x*Block.SIZE, y*Block.SIZE, Block.SIZE, Block.SIZE, "Assets/link-down.png");
        this.#physics = new Physics(4);
        this.#isJumping = false;
        this.#currentPose = Pose.RIGHT;
        super.setImage(this.#currentPose.getImage());
    }

    draw() {
        super.setImage(this.#currentPose.getImage());
        super.draw();
    }

    move() {
        const dx = this.getX() + this.#physics.getVelocityX();
        const dy = this.getY() + this.#physics.getVelocityY();
        super.move(dx, dy);
    }

    moveLeft() {
        this.#physics.moveLeft();
        this.#currentPose = Pose.LEFT;
    }

    moveRight() {
        this.#physics.moveRight();
        this.#currentPose = Pose.RIGHT;

    }

    jump() {
        if(this.#isJumping === false) {
            this.#physics.jump();
            this.#isJumping = true;
        }
    }

    isJumping(isJumping) {
        this.#isJumping = isJumping;
    }

    update(blocks) {
        this.#physics.update(blocks, this);
        this.move();
    }
}