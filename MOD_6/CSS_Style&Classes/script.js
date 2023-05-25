const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // console.log(1);
  // className
  // console.log(itemList.className);
  // text.className = 'card dark';
  
  // Better way to deal with this
  // console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add('dark');
  // text.classList.remove('card');

  // text.classList.toggle('dark');

  // text.classList.toggle('hidden');

  // text.classList.replace('card', 'dark');

  //Change Style

  // itemList.style.lineHeight = '3';

  items.forEach((item, index) => {

    if (index === 2) {
      item.style.color = 'orange';
    } else {
      item.style.color = 'green';
    }
  })
}

document.querySelector('button').onclick = run;