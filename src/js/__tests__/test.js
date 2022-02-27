import Character from '../character';
import Bowman from '../bowman';

test('is the name a string', () => {
  const character = new Character('Иван', 'Bowman');
  expect(character.name).toEqual('Иван');
});

test('checking the error in the name not a string', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the name for too small', () => {
  expect(() => new Character('И', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the name for too long', () => {
  expect(() => new Character('Иваниваниваниван', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the type error', () => {
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const character = new Character('Иван', 'Magician');
  const includes = types.includes(character.type);
  expect(includes).toEqual(true);
});
test('checking the name for too long', () => {
  expect(() => new Character('Иван', 'Bond')).toThrow('the entered type is incorrect!');
});
test('checking the attack level', () => {
  const bowman = new Bowman('Иван');
  expect(bowman.attack).toEqual(25);
});
test('checking the defence level', () => {
  const bowman = new Bowman('Иван');
  expect(bowman.defence).toEqual(25);
});
test('checking the defence level', () => {
  const character = new Character('Иван', 'Magician');
  expect(character.health).toEqual(100);
});
