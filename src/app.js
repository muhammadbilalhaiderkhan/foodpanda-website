
// signup feature

let pEl = document.querySelectorAll("#para")[0];
let nameEl = document.querySelectorAll("#name-field")[0];
let emailEl = document.querySelectorAll("#email-field")[0];
let passwordEl = document.querySelectorAll("#password-field")[0];
let conPasswordEl = document.querySelectorAll("#con-pass-field")[0];


let usersArr = JSON.parse(localStorage.getItem("users")) || [];

function signup (){

    let user = {};
    user.fullName = nameEl.value;
    user.email = emailEl.value;
    user.password = passwordEl.value;
    user.confirmPassword = conPasswordEl.value;

    if(nameEl.value == "" || emailEl.value == "" || passwordEl.value == "" || conPasswordEl.value == ""){
        pEl.innerHTML = "fill all the given fields";
        setTimeout(function(){
            pEl.innerHTML = "";
        }, 3000);
        return;
    }

    let isExist = usersArr.some(u => u.email.toLowerCase() === user.email.toLowerCase());

    if(isExist){
        pEl.innerHTML = "this email is already exist try another email !";
        setTimeout(function(){
            pEl.innerHTML = "";
        }, 3000);
        return;
    }

    if (user.password !== user.confirmPassword) {
        pEl.innerHTML = "Passwords do not match. Check again!";
        setTimeout(function() {
            pEl.innerHTML = "";
        }, 3000);
        return;
    }


    location = "./login.html";

    usersArr.push(user);
    localStorage.setItem("users", JSON.stringify(usersArr));
    nameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";
    conPasswordEl.value = "";
    // console.log(usersArr)
}


// login Feature

let loginPel = document.querySelectorAll("#login-para")[0];
let loginTrueEl = document.querySelectorAll("#login-para-2")[0];
let loginInpEl = document.querySelectorAll("#login-email")[0];
let loginPassEl = document.querySelectorAll('#login-password')[0];

function logIn (){
    let usersData = JSON.parse(localStorage.getItem("users"))
    
    let isExistData = usersData.some(userdetail => userdetail.email.toLowerCase() === loginInpEl.value.toLowerCase() && userdetail.password === loginPassEl.value)
    if(isExistData) {
        loginTrueEl.innerHTML = "Login Successfully!";
        setTimeout(function(){
            loginTrueEl.innerHTML = "";
            location.href = "./home.html"
        }, 1500);
        return
    }

    
        loginPel.innerHTML = "Invalid email or password"
        setTimeout(function(){
            loginPel.innerHTML = "";
        }, 3000);

}

//    menu section products filterization functionality

let resturants = [

    {
        id: "kababjees",
        restName: 'Kababjees',
        category: "fastfood",
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/kababjees.png',
        items: [

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
    ]
},

    {
        id: "javednihari",
        restName: 'Javed Nihari',
        category: "fastfood",
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/javednihaari.jpg',
        items: [

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
    ]
},

    {
        id: "lalqila",
        restName: 'Lal Qila',
        category: "fastfood",
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/lalqila.png',
        items: [

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
    ]
},

    {
        id: "ibnebatuta",
        restName: 'Ibn E Batuta',
        category: "fastfood",
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/ibnebatuta.jpg',
        items: [

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
    ]
},

    {
        id: "pompei",
        restName: 'pompei Italian',
        category: "italian",
        descrip: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
        imgSrc: 'images/pompei.jpg',
        items: [

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
    ]
},
];


let prodDiv = document.querySelectorAll('#main')[0];
let h1El = document.querySelectorAll('#menu-heading')[0];
let subNavEl = document.querySelectorAll('#sub-nav')[0];
let headingEl = document.querySelectorAll('#menu-main-heading')[0];


function Allresturants() {
    
    prodDiv.innerHTML = '';
    h1El.innerText = '';
    headingEl.innerText = 'All Resturants'
    subNavEl.className = 'hidden'
    

    for (let i = 0; i < resturants.length; i++) {
        let resturant = resturants[i];

        prodDiv.innerHTML += `
            <div class="h-[440px] w-[352px] bg-[#F9EFE6] rounded-lg flex flex-col justify-center items-center px-[20px] mb-55">
                <div class="mb-[-70px]">           
                    <img src="${resturant.imgSrc}" alt="" class="w-[224px] relative top-[-35px] rounded-full shadow-xl inline">       
                    <div class="bg-[#12464D] w-[72px] h-[72px] rounded-full text-[#D4AF37] poppins-bold text-[22px] flex justify-center items-center relative left-34 top-[-90px] shadow-lg invisible" >
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <p class="poppins-bold text-[24px] text-[#12464D]">${resturant.restName}</p>
                    <p class="poppins-regular text-[18px] text-[#266A72] text-center">${resturant.descrip}</p>
                    <div class="flex justify-center gap-[80px]">
                        <a href="#"><img src="images/Frame 8.png" alt="" class="w-[28px]"></a>
                        <p class="h-[24px]">⭐⭐⭐⭐⭐</p>
                    </div>
                    <button  onclick="showItems(${i})" class="mt-3 poppins-medium text-[#D4AF37] text-[18px] w-[179px] h-[48px] bg-[#12464D] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#12464D] transition delay-102 duration-300 ease-in-out hover:scale-110 shadow-2xl">
                        View Items
                    </button>
                </div>
            </div>
        `;
    }
}

Allresturants();

let currentIndex = null;

    
    function showItems(index){

        currentIndex = index;
        subNavEl.className = 'flex gap-[55px] text-[#D3B486] poppins-semibold text-[20px]'
        headingEl.innerText = `${resturants[index].restName} Menu`
        prodDiv.innerHTML = '';
        h1El.innerText = '';
        
        
        let items = resturants[index].items;
        for(let i = 0; i < items.length; i++){
            let foodItems = items[i];
        
        
        prodDiv.innerHTML += `

            <div class="h-[440px] w-[352px] bg-[#F9EFE6] rounded-lg flex flex-col justify-center items-center px-[20px] mb-55">
                <div class="mb-[-70px]">
                    <img src="${foodItems.imgSrc}" alt="" class="w-[224px] relative top-[-35px] rounded-full shadow-xl inline">
                    <div class="bg-[#12464D] w-[72px] h-[72px] rounded-full text-[#D4AF37] poppins-bold text-[22px] flex justify-center items-center relative left-34 top-[-90px] shadow-lg " >
                        ${foodItems.price}
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <p class="poppins-bold text-[24px] text-[#12464D]">${foodItems.foodName}</p>
                    <p class="poppins-regular text-[18px] text-[#266A72] text-center">${foodItems.descrip}</p>
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
    



function filterItems(el) {
    let categoryitems = el.innerText.toLowerCase();
    prodDiv.innerHTML = '';
    h1El.innerText = el.innerText;

    if(categoryitems === 'all'){
        showItems(currentIndex);
        h1El.innerText = 'All'
        return
    }
    
    let filterdProducts = [];
    let items = resturants[currentIndex].items

    for (let i = 0; i < items.length; i++) {
        let foodItems = items[i];

        if (foodItems.category === categoryitems) {
            filterdProducts.push(foodItems);

            prodDiv.innerHTML += `
                <div class="h-[440px] w-[352px] bg-[#F9EFE6] rounded-lg flex flex-col justify-center items-center px-[20px] mb-55">
                    <div class="mb-[-70px]">
                        <img src="${foodItems.imgSrc}" alt="" class="w-[224px] relative top-[-35px] rounded-full shadow-xl inline">
                        <div class="bg-[#12464D] w-[72px] h-[72px] rounded-full text-[#D4AF37] poppins-bold text-[22px] flex justify-center items-center relative left-34 top-[-90px] shadow-lg">
                            ${foodItems.price}
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2">
                        <p class="poppins-bold text-[24px] text-[#12464D]">${foodItems.foodName}</p>
                        <p class="poppins-regular text-[18px] text-[#266A72] text-center">${foodItems.descrip}</p>
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
        };  
    };
};

// add to cart addition and subtraction functionality

function sub(value){
    
    if(value.nextElementSibling.textContent === "0"){
        return;
    }

    value.nextElementSibling.textContent--
};

function add(value){
    value.previousElementSibling.textContent++
}
