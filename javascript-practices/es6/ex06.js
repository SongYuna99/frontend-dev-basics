/**
 * 구조 분해(Destructing)
 */

// ex1 basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
}

const{firstName} = user;

console.log(firstName);