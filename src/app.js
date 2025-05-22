let products = [

    // Appetizers
    {
        id: 'italian finger fish',
        foodName: 'Italian Finger Fish',
        category: 'appetizer',
        price: '$34',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/0.png'
    },
    {
        id: 'italian salad',
        foodName: 'Italian Salad',
        category: 'appetizer',
        price: '$18',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/1.png'
    },
    {
        id: 'creamy fish',
        foodName: 'Creamy Fish',
        category: 'appetizer',
        price: '$22',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/2.png'
    },

    // Main Course
    {
        id: 'buckwheat with mushrooms',
        foodName: 'Buckwheat Mushrooms',
        category: 'main course',
        price: '$33',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/3.png'
    },
    {
        id: 'spicy spaghetti',
        foodName: 'Spicy Spaghetti',
        category: 'main course',
        price: '$42',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/4.png'
    },
    {
        id: 'cheezy pizza',
        foodName: 'Cheezy Pizza',
        category: 'main course',
        price: '$50',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/5.png'
    },

    // Desserts
    {
        id: 'brownie ice cream',
        foodName: 'Brownie Ice Cream',
        category: 'desserts',
        price: '$20',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/9.png'
    },
    {
        id: 'belgian waffle',
        foodName: 'Belgian Waffle',
        category: 'desserts',
        price: '$31',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/10.png'
    },
    {
        id: 'waffle berries',
        foodName: 'Waffle Berries',
        category: 'desserts',
        price: '$14',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/11.png'
    },

    // Drinks
    {
        id: 'red fruit lemonade',
        foodName: 'Red Fruit Lemonade',
        category: 'drinks',
        price: '$16',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/6.png'
    },
    {
        id: 'classic mojito',
        foodName: 'Classic Mojito',
        category: 'drinks',
        price: '$28',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/7.png'
    },
    {
        id: 'mint lime cooler',
        foodName: 'Mint Lime Cooler',
        category: 'drinks',
        price: '$14',
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/8.png'
    }
];


let prodDiv = document.querySelectorAll('#main')[0];
let h1El = document.querySelectorAll('#menu-heading')[0];
prodDiv.innerHTML = '';

function allProds() {
    h1El.innerText = '';

    for (let i = 0; i < products.length; i++) {
        let foodItem = products[i];

        prodDiv.innerHTML += `
            <div class="h-[440px] w-[352px] bg-[#F9EFE6] rounded-lg flex flex-col justify-center items-center px-[20px] mb-55">
                <div class="mb-[-70px]">
                    <img src="${foodItem.imgSrc}" alt="" class="w-[224px] relative top-[-35px] rounded-full shadow-xl inline">
                    <div class="bg-[#12464D] w-[72px] h-[72px] rounded-full text-[#D4AF37] poppins-bold text-[22px] flex justify-center items-center relative left-34 top-[-90px] shadow-lg">
                        ${foodItem.price}
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <p class="poppins-bold text-[24px] text-[#12464D]">${foodItem.foodName}</p>
                    <p class="poppins-regular text-[18px] text-[#266A72] text-center">${foodItem.descrip}</p>
                    <div class="flex justify-center gap-[80px]">
                        <a href="#"><img src="images/Frame 8.png" alt="" class="w-[28px]"></a>
                        <p class="h-[24px]">⭐⭐⭐⭐⭐</p>
                    </div>
                    <button class="mt-3 poppins-medium text-[#D4AF37] text-[18px] w-[179px] h-[48px] bg-[#12464D] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#12464D] transition delay-102 duration-300 ease-in-out hover:scale-110 shadow-2xl">
                        Order Now
                    </button>
                </div>
            </div>
        `;
    }
}

allProds();

function filterItems(el) {
    let categoryitems = el.innerText.toLowerCase();
    let filterdProducts = [];
    h1El.innerText = el.innerText;
    prodDiv.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let foodItem = products[i];

        if (foodItem.category === categoryitems) {
            filterdProducts.push(foodItem);

            prodDiv.innerHTML += `
                <div class="h-[440px] w-[352px] bg-[#F9EFE6] rounded-lg flex flex-col justify-center items-center px-[20px] mb-55">
                    <div class="mb-[-70px]">
                        <img src="${foodItem.imgSrc}" alt="" class="w-[224px] relative top-[-35px] rounded-full shadow-xl inline">
                        <div class="bg-[#12464D] w-[72px] h-[72px] rounded-full text-[#D4AF37] poppins-bold text-[22px] flex justify-center items-center relative left-34 top-[-90px] shadow-lg">
                            ${foodItem.price}
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2">
                        <p class="poppins-bold text-[24px] text-[#12464D]">${foodItem.foodName}</p>
                        <p class="poppins-regular text-[18px] text-[#266A72] text-center">${foodItem.descrip}</p>
                        <div class="flex justify-center gap-[80px]">
                            <a href="#"><img src="images/Frame 8.png" alt="" class="w-[28px]"></a>
                            <p class="h-[24px]">⭐⭐⭐⭐⭐</p>
                        </div>
                        <button class="mt-3 poppins-medium text-[#D4AF37] text-[18px] w-[179px] h-[48px] bg-[#12464D] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#12464D] transition delay-102 duration-300 ease-in-out hover:scale-110 shadow-2xl">
                            Order Now
                        </button>
                    </div>
                </div>
            `;
        }
    }
}

