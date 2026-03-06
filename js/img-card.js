document.querySelectorAll(".img-card-container").forEach((el) => {
  const {
    image,
    video,
    title,
    width,
    height,
    fontSize,
    fontWeight,
    hoverVideo,
    hoverImage,
    mobileWidth,
    mobileHeight,
    mobileFontSize,
    mobileFontWeight,
  } = el.dataset;

  const isMobile = window.innerWidth <= 768;
  const currentFontSize = isMobile ? mobileFontSize : fontSize;
  const currentFontWeight = isMobile ? mobileFontWeight : fontWeight;
  const currentWidth = isMobile ? mobileWidth : width;
  const currentHeight = isMobile ? mobileHeight : height;

  el.innerHTML = `
   <div class="img-card-wrapper">
     <div class="img-wrapper">
      <div class="hero-img">
        <h1 class="hero-img-title" style="font-size: ${currentFontSize}; font-weight: ${currentFontWeight}; text-align: center;">${title}</h1>
      </div>
      ${
        video
          ? `<video style="width: ${currentWidth}; height: ${currentHeight};" autoplay muted loop playsinline>
        <source src="${video}" type="video/mp4">
       </video>`
          : `<img src="${image}" class="image" style="width: ${currentWidth}; height: ${currentHeight}; object-fit: cover;">`
      }

    ${
      hoverVideo
        ? `<video class="media-hover" style="width: ${currentWidth}; height: ${currentHeight};" muted loop playsinline>
            <source src="${hoverVideo}" type="video/mp4">
          </video>`
        : ""
    }

    ${
      hoverImage
        ? `<img class="media-hover" src="${hoverImage}" style="width: ${currentWidth}; height: ${currentHeight}; object-fit: cover;">`
        : ""
    }
    </div>
  </div>
  `;

  if (hoverVideo) {
    const hoverVideoEl = el.querySelector(".media-hover");
    el.addEventListener("mouseenter", () => hoverVideoEl.play());
    el.addEventListener("mouseleave", () => {
      hoverVideoEl.pause();
      hoverVideoEl.currentTime = 0;
    });
  }
});
