import './lib/lib';
import s from './lib/lib'

s('.active').toggleClass('hello')
s('.hello1').toggleClass('hello')
s('.someOne').addClass('someOne')

s('.someOne').on('click', sayHello)

s('.someOne').off('click', sayHello)

s('button').on('click', function(){
    s(this).toggleClass('active');
})
s('.someOne').click(()=>{
    console.log('Hello')
})


s('div').each((item)=>{
    console.log(item);
})

function sayHello() {
    console.log('Hello World');
}