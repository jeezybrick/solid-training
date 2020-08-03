interface Entity {
    name;
}

interface Mover extends Entity {
    move();
}

interface Attacker extends Entity {
    attack();
}

interface TakeDamages extends Entity {
    takeDamage(amount: number);
}

class Character implements Mover, Attacker, TakeDamages {
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

class Turret implements TakeDamages {
    name;

    takeDamage() {
        // Do something
    }
}
