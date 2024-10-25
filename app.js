document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Luxio U Crwon Zenith",
        img: "pkm luxio.jpeg",
        price: "15000",
      },
    ],
  }));
});
