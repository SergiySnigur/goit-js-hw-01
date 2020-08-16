const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

function createImages(elements) {

    return elements.map(element => {
        const createElements = `<li><img src="${element.url}" alt="${element.alt}" width = 300></img></li>`;
        return createElements;
    }).join('');

};

const listRef = document.querySelector('#gallery');
listRef.insertAdjacentHTML("afterbegin", createImages(images));
listRef.setAttribute("style", "list-style-type:none; display: flex, justify-content: space-between;");

