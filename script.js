let products=document.getElementById('products');
let main=document.getElementById('main');
let topTrend=document.getElementById("top-trend");
let aboutUs=document.getElementById('aboutUs');
let contactPage=document.getElementById('contactPage');
let connect=document.getElementById('connect-form')

let Home=document.getElementById('Home');
let Shop=document.getElementById('Shop');
let Blog=document.getElementById('Blog');
let About=document.getElementById('AboutUs');
let Contact=document.getElementById('Contact');


function home(){
    Home.style.color="#EE2737";
    Shop.style.color="black";
    Blog.style.color='black';
    About.style.color='black';
    Contact.style.color='black';

    main.style.display="block";
    topTrend.style.display="flex";
    products.style.display="block";
    aboutUs.style.display='none';
    contactPage.style.display='none';
    connect.style.display='none';
}

function shop(){
    Home.style.color="black";
    Shop.style.color="#EE2737";
    Blog.style.color='black';
    About.style.color='black';
    Contact.style.color='black';

    main.style.display="none";
    topTrend.style.display="none";
    products.style.display="block";
    aboutUs.style.display='none';
    contactPage.style.display='none';
    connect.style.display='none';
}

function blog(){
    Home.style.color="black";
    Shop.style.color="black";
    Blog.style.color='#EE2737';
    About.style.color='black';
    Contact.style.color='black';

    main.style.display="none";
    products.style.display="none";
    topTrend.style.display="flex";
    aboutUs.style.display='none';
    contactPage.style.display='none';
    connect.style.display='none';
}

function about(){
    Home.style.color="black";
    Shop.style.color="black";
    Blog.style.color='black';
    About.style.color='#EE2737';
    Contact.style.color='black';

    main.style.display="none";
    products.style.display="none";
    topTrend.style.display="none";
    aboutUs.style.display='flex';
    contactPage.style.display='none';
    connect.style.display='flex';
}

function contact(){
    Home.style.color="black";
    Shop.style.color="black";
    Blog.style.color='black';
    About.style.color='black';
    Contact.style.color='#EE2737';

    main.style.display="none";
    topTrend.style.display="none";
    products.style.display="none";
    aboutUs.style.display='none';
    contactPage.style.display='block';
    connect.style.display='flex';
}
