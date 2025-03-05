const imgList = document.querySelectorAll('.img-list');
let current = 0;

const rollingBtn = document.querySelectorAll(".rolling-btn .btn");

function slideImg(n){
  current = n;
  imgList.forEach((img) => {
    if(current >= imgList.length){
      current = 0;
    }
    img.classList.remove("on");
    imgList[current].classList.add("on");

    rollingBtn.forEach(btn => {
      btn.firstElementChild.setAttribute("src","images/btn_rollbutt_off.png")

      rollingBtn[current].firstElementChild.setAttribute("src", "images/btn_rollbutt_on.png")
    })
  })
}

let timer = setInterval("slideImg(current+1)", 5000);

const rollplay = document.querySelector(".rollplay");
const rollstop = document.querySelector(".rollstop");

rollstop.addEventListener("click", () => {
  clearInterval(timer);
  rollstop.style.display = "none";
  rollplay.style.display = "block";
})

rollplay.addEventListener("click", () => {
  timer = setInterval("slideImg(current+1)", 5000);
  rollstop.style.display = "block";
  rollplay.style.display = "none";
})

rollingBtn.forEach(btn => btn.addEventListener("click", () => {
  rollingBtn.forEach(btn => btn.firstElementChild.setAttribute("src","images/btn_rollbutt_off.png"))
  btn.firstElementChild.setAttribute("src", "images/btn_rollbutt_on.png")
  slideImg(current+1)
}))