let burger = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('item');
})

let works = document.querySelector('.works-flex');
const person = [
  {

    img: './images/img1.png',
    title: 'Read it',
    text: 'Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  },

  {
    img: './images/img2.png',
    title: 'Apply',
    text: 'Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore.'
  },

  {

    img: './images/img3.png',
    title: 'Multiply',
    text: 'Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  orem.'
  }
]

person.map(user => {
  let workCard = document.createElement('div');
  workCard.classList.add('card-div')
  workCard.innerHTML = `<img src=${user.img} /> <h3 class = "title">${user.title} </h3> <p class = "text">${user.text} </p>`;
  works.append(workCard);

})


let block = document.querySelector(".blocks");

let blocks = [
  {
    img: "./images/Avatar.png",
    name: "Sean Farmer",
    prof: "CEO",
    info: "Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam lorem ipsum dolor.",
  },
  {
    img: "./images/Avatar2.png",
    name: "Nick Parker",
    prof: "Wed-designer",
    info: "Orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  magna dolore. Orem ipsum.",
  },
  {
    img: "./images/Avatar3.png",
    name: "Mishel Latuale",
    prof: "Project Manager",
    info: "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Ipsum dolor sit amet.",
  },
];

blocks.map((item) => {
  let newBlock = document.createElement("div");
  newBlock.classList.add("cards");
  newBlock.innerHTML = `<div class="info"> <img src=${item.img} /> <div><h2>${item.name}</h2> <h3 class = "ceo">${item.prof}</h3> </div></div> <p class = "information">${item.info}</p>`;
  block.append(newBlock);
});



let secImg = document.querySelector('.sec-img-child');
const url = 'https://reqres.in/api/users?page=1';

const data = new XMLHttpRequest;

data.open('GET', url);

data.onload = () => {
  if (data.readyState == 4 && data.status == 200) {
    const arr = JSON.parse(data.response);
    const newArr = arr.data;
    const sliceArr = newArr.slice(0, 5)
    sliceArr.map(item => {

      let el = document.createElement('div');
      el.classList.add('two-img-div')
      el.innerHTML = `<img src=${item.avatar} />`
      secImg.append(el);
    })
  }
}

data.send()

let mainFlex = document.querySelector('.main2-flex');

const icon = [
  { img: './images/image1.png', title: 'Auto Layout ', text: 'Sed do eiusmod tempor incididunt ut consectetur adipisicing elit,do eiusmod tempor incididunt ut labore et dolore' },
  { img: './images/image2.png', title: 'Variants ', text: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' },
  { img: './images/image3.png', title: 'Components', text: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' },
  { img: './images/image4.png', title: 'Atomic Design ', text: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' },
  { img: './images/image5.png', title: 'Animated  ', text: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' },
  { img: './images/image6.png', title: 'Responsive ', text: 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' }
]


let project = document.querySelector('.person-flex');

const url2 = 'https://reqres.in/api/users?page=1';

const data2 = new XMLHttpRequest;

data2.open('GET', url2);

data2.onload = () => {
  if (data2.readyState == 4 && data2.status == 200) {
    const result = JSON.parse(data2.response);
    const newResult = result.data;
    const sliceRes = newResult.slice(0, 4);
    sliceRes.map(team => {
      let element = document.createElement('div');
      element.classList.add('person-img');
      element.innerHTML = `<img src = ${team.avatar} />`
      project.append(element);
    })
  }
}

data2.send()




