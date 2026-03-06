const cards = [
  {
    image: "assets/images/7b6529a12a4f5ab332188c7dac157175d7d93817.jpg",
    hero: "NEW",
    title: "Sed egestas, nibh a condimentum imperdiet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie quam justo ut lacus. Proin vitae",
    width: "572px",
    height: "566px",
    mobileWidth: "282px",
    mobileHeight: "286px",
  },
  {
    video: "assets/videos/DTS_THE_LEADER_Joey_Bania_Clips_ID10.mp4",
    hero: "NEW",
    title: "Sed egestas, nibh a condimentum imperdiet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo, turpis elit ultricies justo, vitae molestie quam justo ut lacus. Proin vitae",
    width: "1200px",
    height: "759px",
    mobileWidth: "346px",
    mobileHeight: "219px",
  },
];

document.getElementById("img-card-desc-container").innerHTML = `
  <div class="img-card-desc-wrapper">
    ${cards
      .map(
        (card) => `
      <div class="img-card">
        <div class="img-wrapper">
          <div class="hero-img">
            <h1 class="hero-img-title-desc">${card.hero}</h1>
          </div>
          ${
            card.video
              ? `
          <video style="width: min(${card.width}, ${card.mobileWidth}); height: min(${card.height}, ${card.mobileHeight});" autoplay muted loop playsinline>
            <source src="${card.video}" type="video/mp4">
          </video>
        `
              : `
          <img src="${card.image}" class="image" style="width: min(${card.width}, ${card.mobileWidth}); height: min(${card.height}, ${card.mobileHeight}); object-fit: cover;">
  `
          }
        </div>
        <h1 class="title ${card.video ? "" : "mt-5"}">${card.title}</h1>
        <p class="desc">${card.desc}</p>
      </div>
    `,
      )
      .join("")}
  </div>
`;
