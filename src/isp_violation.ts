interface Entity {
    attackDamage;
    health;
    name;

    move();
    attack();
    takeDamage(amount: number);
}

class Character implements Entity {
    attackDamage;
    health;
    name;

    move() {
        // Do something
    }

    attack() {
        // Do something
    }

    takeDamage() {
        // Do something
    }

}

class Turret implements Entity {

    move() {
        // ERROR: Cannot move
    }
}
