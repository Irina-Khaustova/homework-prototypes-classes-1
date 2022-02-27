export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('the entered name is incorrect!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('the entered type is incorrect!');
    }
    this.health = health;
    this.level = level;
  }
}
