//gnb 
$('.header .depth1').hover(function () {
    $(this).children('a').addClass('on')
    if ($(this).find('.depth2').length) {
        $('header').addClass('on');
        $(this).find('.depth2').addClass('on')
    }
}, function () {
    $(this).children('a').removeClass('on')
    $('.header').removeClass('on');
    $('.depth2').removeClass('on')
})

setTimeout(() => {
    $('.sc_visual').addClass('on')
}, 300);


$('.header .btn_site').click(function () {
    $(this).toggleClass('on');
    $('.header .brand_list').toggleClass('show');
})

$('.header .utils ul li.language').click(function () {
    $(this).toggleClass('on');
})

$(window).scroll(function () {
    var window = $(this).scrollTop();
    if (window >= 50) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
})

//visual
const visualSlider = new Swiper('.visual_slider', {
    slidesPerView: 1,
    autoplay: {
        speed: 3000,
    },
    pagination: {
        el: ".visual_slider .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '.sc_visual .swiper-button-next',
        prevEl: '.sc_visual .swiper-button-prev',
    },
    loop: true,
})

$('.sc_visual .btn_pause').click(function () {
    if ($(this).hasClass('on')) {
        visualSlider.autoplay.start();
    } else {
        visualSlider.autoplay.stop();
    }
    $(this).toggleClass('focus');
})

setTimeout(function () {
    $('.sc_visual').removeClass('active')
}, 300)


//trend
fetch('./assets/data/trend.json')
    .then(res => res.json())
    .then(json => {
        data = json.list1;
        let html = ``;
        data.forEach(element => {
            html += ` <li class="swiper-slide">
            <a href="#">
                <div class="tag">
                    <span>${element.cate}</span>
                </div>
                <img src="${element.thumb}"
                    alt="${element.title}">
                <div class="info">
                    <p class="tit">${element.title}</p>
                    <p class="desc">${element.desc}</p>
                </div>
            </a>
        </li>`
        });
        $('#trendList1').html(html)
        const trend_slider1 = new Swiper('.trend_slider1', {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 12,
            loop: true,
            autoplay: {
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false
            },
            speed: 5000
        })

        data = json.list2;
        let html2 = ``;
        data.forEach(element => {
            html2 += ` <li class="swiper-slide">
            <a href="#">
                <div class="tag">
                    <span>${element.cate}</span>
                </div>
                <img src="${element.thumb}"
                    alt="${element.title}">
                <div class="info">
                    <p class="tit">${element.title}</p>
                    <p class="desc">${element.desc}</p>
                </div>
            </a>
        </li>`
        });

        $('#trendList2').html(html2)
        const trend_slider2 = new Swiper('.trend_slider2', {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 12,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            speed: 5000
        })
    })

//store
fetch('./assets/data/news.json')
    .then(res => res.json())
    .then(json => {
        data = json.list;
        let html = ``;
        data.forEach(element => {
            html += ` <li>
            <a href="#">
                <img src="${element.thumb}"
                    alt="${element.title}">
                <div class="info_box">
                    <p class="tit">${element.title}</p>
                    <p class="date">${element.date}</p>
                </div>
            </a>
        </li>`
        });
        $('#newsList').html(html)
    })


//culture
fetch('./assets/data/culture.json')
    .then(res => res.json())
    .then(json => {
        data = json.list;
        let html = ``;
        data.forEach(element => {
            html += ` <div class="swiper-slide">
            <a href="#">
                <div class="tag">
                    <span>${element.cate}</span>
                </div>
                <img src="${element.thumb}"
                    alt="${element.title}">
                <div class="info">
                    <p class="tit">${element.title}</p>
                    <p class="date">${element.date}</p>
                </div>
            </a>
        </div>`
        });
        $('#cultureList').html(html)
        const cultureSlider = new Swiper('.culture_slider', {
            slidesPerView: 'auto',
            loop: true,
            centeredSlides: true,
            autoHeight: true,
            navigation: {
                nextEl: '.sc_culture .swiper-button-next',
                prevEl: '.sc_culture .swiper-button-prev',
            },
        })
    })

//popup 
fetch('./assets/data/popup.json')
    .then(res => res.json())
    .then(json => {
        data = json.list;
        let html = ``;
        data.forEach(element => {
            html += ` <div class="swiper-slide">
            <a href="#">
                <div class="tag">
                    <span>${element.cate}</span>
                </div>
                <img src="${element.thumb}"
                    alt="${element.title}">
                <div class="info">
                    <p class="tit">${element.title}</p>
                    <p class="desc">${element.desc}</p>
                    <p class="date">${element.date}</p>
                </div>
            </a>
        </div>`
        });
        $('#popupList').html(html)
        const poppuplSlider = new Swiper('.popup_slider', {
            slidesPerView: 4,
            navigation: {
                nextEl: '.sc_popup .swiper-button-next',
                prevEl: '.sc_popup .swiper-button-prev',
            },
            loop: true,
        })
    })

//banner
const bannerlSlider = new Swiper('.banner_slider', {
    slidesPerView: 2,
    navigation: {
        nextEl: '.sc_banner .swiper-button-next',
        prevEl: '.sc_banner .swiper-button-prev',
    },
    loop: true,
    spaceBetween: 12,
})


const brandlSlider1 = new Swiper('.brand_slider.slider1', {
    slidesPerView: 1,
    observer: true, // 추가
    observeParents: true, // 추가
    loop: true,
})
const brandlSlider2 = new Swiper('.brand_slider.slider2', {
    slidesPerView: 1,
    observer: true, // 추가
    observeParents: true, // 추가
    loop: true,
})

const brandlSlider3 = new Swiper('.brand_slider.slider3', {
    slidesPerView: 1,
    observer: true, // 추가
    observeParents: true, // 추가
    loop: true,
})


//brand
$('.sc_brand .tab_nav a').click(function (e) {
    e.preventDefault();
    tab = $(this).data('tab');
    $(this).addClass('on').siblings().removeClass('on');
    $(tab).addClass('on').siblings().removeClass('on');
})

//footer
$('.footer .group .tit a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on')
    $(this).parent().siblings('ul').toggleClass('show')
})

$('.footer .language .tit a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on')
    $(this).parent().siblings('ul').toggleClass('show')
})

$(document).click(function (e) {
    if ($('.footer .cont .link_area .group').has(e.target).length === 0) {
        $('.footer .cont .link_area .group ul').removeClass('show')
    }
})

$(document).click(function (e) {
    if ($('.footer .cont .adr_area .language').has(e.target).length === 0) {
        $('.footer .cont .adr_area .language ul').removeClass('show')
    }
});

//탑버튼
$(window).scroll(function () {
    var window = $(this).scrollTop();
    if (window >= 200) {
        $('.btn_top').addClass('show');
    } else {
        $('.btn_top').removeClass('show');
    }
});

$(".btn_top").click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
