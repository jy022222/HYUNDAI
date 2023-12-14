//gnb 
$('.header .btn_site').click(function () {
    $(this).toggleClass('on');
    $('.header .brand_list').toggleClass('show');
})

$('.header .all_menu .gnb_list li').click(function () {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
})

$('.family_area button').click(function () {
    $('.family_area').toggleClass('show');
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
    loop: true,
})

$('.visual_slider .btn_pause').click(function () {
    $(this).toggleClass('focus');
    visualSlider.autoplay.stop();
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
            slidesPerView: 1.3,
            loop: true,
            autoHeight: true,
            //spaceBetween: 10,
        })
    })

//trend
fetch('./assets/data/trend.json')
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
                </div>
            </a>
        </div>`
        });
        $('#trendList').html(html)
        const trend_slider1 = new Swiper('.trend_slider1', {
            slidesPerView: 'auto',
            spaceBetween: 12,
            loop: true,
            autoplay: {
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false
            },
            speed: 4000
        })

        data = json.list2;
        let html2 = ``;
        data.forEach(element => {
            html2 += ` <div class="swiper-slide">
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
        </div>`
        });

        $('#trendList2').html(html2)
        const trend_slider2 = new Swiper('.trend_slider2', {
            slidesPerView: 'auto',
            spaceBetween: 12,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            speed: 4000
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
            slidesPerView: '1.05',
            pagination: {
                el: ".popup_slider .swiper-pagination",
                type: "progressbar",
            },
            loop: true,
        })
    })

//banner
const bannerlSlider = new Swiper('.banner_slider', {
    slidesPerView: 'auto',
    pagination: {
        el: ".banner_slider .swiper-pagination",
        type: "bullets",
    },
    loop: true,
})

//brand
$('.sc_brand .tab_nav a').click(function (e) {
    e.preventDefault();
    tab = $(this).data('tab');
    $(this).addClass('on').siblings().removeClass('on');
    $(tab).addClass('on').siblings().removeClass('on');

    const brandlSlider2 = new Swiper('.brand_slider.slider2', {
        slidesPerView: 1.1,
        loop: true,
    })

    const brandlSlider3 = new Swiper('.brand_slider.slider3', {
        slidesPerView: 1.1,
        loop: true,
    })
})

const brandlSlider1 = new Swiper('.brand_slider.slider1', {
    slidesPerView: 1.1,
    loop: true,
})

//footer
$('.footer .link_area .tit a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on')
    $(this).parent().siblings('ul').toggleClass('show')
})
$(document).click(function (e) {
    if ($('.footer .link_area .group').has(e.target).length === 0) {
        $('.footer .link_area .group ul').removeClass('show')
    }
})

$(document).click(function (e) {
    if ($('.footer .link_area .language').has(e.target).length === 0) {
        $('.footer .link_area .language ul').removeClass('show')
    }
});

//탑버튼
$(".btn_top").click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
