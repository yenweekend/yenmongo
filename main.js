const listOfPeople = [
  {
    id: 1,
    src: "https://img.freepik.com/premium-photo/portrait-young-asian-woman-singing_296537-8683.jpg?size=626&ext=jpg&ga=GA1.2.410455368.1665892793&semt=sph",
    author: "Mathew Dix",
    job: "Graphic Design",
    text: "Hello guy Let see what we have today! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat facilis officia modi",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author: "Yen Nguyen",
    job: "Web Desinger",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat facilis officia modi reiciendis, fuga non vero tempore molestias perferendis.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author: "Thuy Linh",
    job: "Logistics",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat facilis officia modi reiciendis, fuga non vero tempore molestias perferendis.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author: "Bach Duong",
    job: "Manager",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat facilis officia modi reiciendis, fuga non vero tempore molestias perferendis.",
  },
];

const slides = document.querySelectorAll(".quote-content");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const bottomArrow = document.querySelectorAll(".wedo-item-arrow");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
function carousel() {
  if (counter >= slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = 2;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
$(document).ready(function () {
  $(".wedo-item-arrow").click(function (e) {
    $(e.target).toggleClass("is-rotate");
    const element = $(e.target).parent();
    const parent = element.parent();
    $(parent).children("div.wedo-item-content").toggleClass("is-active");
    $(parent)
      .siblings()
      .children("div.wedo-item-content")
      .removeClass("is-active");
    $(parent).siblings().find("i.wedo-item-arrow").removeClass("is-rotate");
  });
  $(window).scroll(function () {
    navHeight = $(".header-top").outerHeight();
    heightSroll = $(window).scrollTop();
    if (heightSroll > navHeight) {
      $(".header-top").addClass("is-fixed");
    } else {
      $(".header-top").removeClass("is-fixed");
    }
    if (heightSroll > 1000) {
      $(".slick-back").addClass("show-up");
      $(".slick-back").click(function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    } else {
      $(".slick-back").removeClass("show-up");
    }
  });
  $(".scroll-links").click(function (e) {
    e.preventDefault();
    const id = $(e.currentTarget).attr("href");
    const element = $(`${id}`);
    const positionOfEle = element.position().top;
    const heightNav = $(".header-top").outerHeight();
    let position = positionOfEle - heightNav;
    const fixedNav = $(".header-top").hasClass("is-fixed");
    if (!fixedNav) {
      position -= heightNav;
    }
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  });
  let num = 0;
  renderHtml(listOfPeople[num]);
  $(".prevBtn-people").click(function () {
    num--;
    if (num < 0) {
      num = listOfPeople.length - 1;
    }
    renderHtml(listOfPeople[num]);
  });
  $(".nextBtn-people").click(function () {
    num++;
    if (num >= listOfPeople.length) {
      num = 0;
    }
    renderHtml(listOfPeople[num]);
  });
  function renderHtml(item) {
    $(".people-image").attr("src", item.src);
    $(".people-name").text(item.author);
    $(".people-job").text(item.job);
    $(".people-text").text(item.text);
  }
});
