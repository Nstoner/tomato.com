var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const tabTag = document.querySelector(".tabs");
  const sliderTab = document.querySelector(".slider-tab");
  const tabs = ["home", "shop", "about", "review", "contact"];
  const menuTag = document.getElementsByClassName("tab");

  const handleClick = (event) => {
    const clickedTabId = event.target.id;
    const clickedLiTag = document.getElementById(clickedTabId);
    const clickedLiTagWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    sliderTab.style.width =clickedLiTagWidth + "px";
    sliderTab.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
    
  }

  for (let i= 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.classList.add("tab");
    liTag.append(tabs[i].toUpperCase());
    liTag.addEventListener("click", handleClick);
    liTag.id = i;
    tabTag.append(liTag);
    if ( i === 0) {
      sliderTab.style.width = liTag.offsetWidth + "px";
    }
  }
