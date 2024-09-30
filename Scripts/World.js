class World {
    #levels; // 2D array

    constructor() {
        // Parse all map data and save it for later
        this.#levels = world.map( level => (level.split('\n')).map(row => row.split("")));
    }

    getLevel(level) {
        return this.#levels[level];
    }

    getLength() {
        return this.#levels.length;
    }
}