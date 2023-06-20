import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from './modules/Person.js'

console.log(capitalizeWords('hi cherry! whats up?'));
console.log(makeMoney(100));

const person1 = new Person('Cherry', 26);
person1.greet();