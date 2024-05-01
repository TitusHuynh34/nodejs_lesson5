export class CarouselRepo {
    static _items = [
      {
        id: 1,
        url: "img/hero-img-1.png",
        title: "Fruites",
      },
      {
        id: 2,
        url: "img/hero-img-2.jpg",
        title: "Vesitables",
      },
      {
        id: 3,
        url: "img/hero-img-1.png",
        title: "Carousel Item 3",
      },
      {
        id: 4,
        url: "img/hero-img-2.jpg",
        title: "Carousel Item 4",
      },
    ];
  
    static getItems() {
      return this._items;
    }
  }
  