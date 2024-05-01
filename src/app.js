import experss from "express";
import { create as createHbsEngine } from "express-handlebars";
import { CarouselRepo } from "./db/carousel.js";
import { FeatureRepo } from "./db/feature.js";

// Tạo app Express
const app = experss();

// Cấu hình static files
app.use(experss.static("public"));

// ->  chọn extension name
const extname = "handlebars";

// Cấu hình handlebars
// -> Tạo Handlebars Engine
const hbs = createHbsEngine({
    extname,
  // Tạo một engine custom, truyền thông tin vào
  layoutsDir: "views/layouts", //folder chứa các layout
  partialsDir: "views/partials", //folder chứa file thành phần
  defaultLayout: "main", //Tên file handlebars trong folder layout
  helpers: {
    eq: (left, right) => {
        return left === right;
    },
  },
});

//khai báo engine với express
app.engine("handlebars", hbs.engine);
//Chọn engine cần dùng cho việc render view
app.set("view engine", "handlebars"); // lấy cái engine đã khai báo ở trên
//Cấu hình folder views, chứa các trang để render
app.set("views", "views/pages");

// Khai báo các Route

//Trang chủ
app.get("/", (req, res) => {
    const carouselItems = CarouselRepo.getItems();
    const features = FeatureRepo.getFeatures();
    const categories = [
      {
        id: "categ-1",
        name: "All products",
        products: [
          {
            id: "prod-1",
            name: "Grapes",
            image: "img/fruite-item-5.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: 4.99,
          },
          {
            id: "prod-2",
            name: "Grapes",
            image: "img/fruite-item-5.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: 4.99,
          },
        ],
      },
      {
        id: "categ-2",
        name: "Vegetables",
        products: [
          {
            id: "prod-1",
            name: "Grapes",
            image: "img/fruite-item-5.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: 4.99,
          },
          {
            id: "prod-2",
            name: "Grapes",
            image: "img/fruite-item-5.jpg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
            price: 4.99,
          },
        ],
      },
    ];
  
    res.render("homepage", {
      carouselItems,
      features,
      categories,
    });
  });
  
  // Chay app Express
  app.listen(3001, () => {
    console.log("App is running on port 3001");
  });
  