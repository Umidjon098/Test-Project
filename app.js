const items = [{
        id: 1,
        img: "img/main/image-new.png",
        title: 'Matematika va fizika fanlaridan qaysi yo‘nalishlarga hujjat topshirish mumkin?',
    },
    {
        id: 2,
        img: "img/main/img(0).png",
        title: 'Tarix va chet tili fanlaridan qaysi yo‘nalishlarga hujjat topshirish mumkin? ',
    },
    {
        id: 3,
        img: "img/main/img(1).png",
        title: 'Ona tili va adabiyoti hamda chet tili fanlaridan qaysi yo‘nalishlarga hujjat topshirish mumkin? ',

    },
    {
        id: 4,
        img: "img/main/img(2).png",
        title: 'Maktab bitiruvchilariga 15-iyungacha shahodatnomalari (attestat) topshiriladi  ',
    },
    {
        id: 5,
        img: "img/main/img(3).png",
        title: 'Matematika hamda ona tili va adabiyoti fanlaridan qaysi yo‘nalishlarga hujjat topshirish mumkin? ',
    },
    {
        id: 6,
        img: "img/main/img(4).png",
        title: 'Sirtqi taʼlimda ham davlat granti asosida taʼlim olish mumkinmi?  ',
    },
    {
        id: 6,
        img: "img/main/img(5).png",
        title: 'Yuridik universitetining talabalari o‘qishning so‘nggi bosqichini bevosita amaliyotda o‘tkazadilar  ',
    },
    {
        id: 6,
        img: "img/main/img(6).png",
        title: 'Ona tili va adabiyoti hamda chet tili fanlaridan qaysi yo‘nalishlarga hujjat topshirish mumkin?  ',
    },
    {
        id: 6,
        img: "img/main/img(7).png",
        title: '5 ta viloyatda pedagogika instituti tashkil etilmoqda  ',
    },
    {
        id: 6,
        img: "img/main/img(8).png",
        title: 'Kirish imtihonlari testlari qay darajada soddalashtiriladi? – DTM izoh berdi  ',
    },
];
window.addEventListener("DOMContentLoaded", function() {
    setCategoryItems();
});

function setCategoryItems() {
    const categoryBox = document.querySelector(".news-box");
    let displayMenu = items.map(function(item) {
        // console.log(item);
        return `  <div class="news-item">
		<div class="item-img">
			<img src=${item.img} alt="">
			<div class="after">
				<a href="#" class="btn btn-primary pass-univer">Oliygohlar</a>
			</div>
		</div>
		<span class="date">24 may, 15:13</span>
		<div class="title-link">
			<a href="#" class="font-weight-bold">${item.title} </a>
		</div>
	</div>`;
    });
    displayMenu = displayMenu.join("");
    categoryBox.innerHTML = displayMenu;
};