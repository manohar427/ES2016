
let name = 'Manohar';

function upperCase(name)
{
  return name.toUpperCase();
}
let template = `I am from Bangalore

My name is ${upperCase('hi')}${name}`;

console.log(template);
