// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./app.css";
// import { App } from "./app";

// const manavReyonu = [
//   { kategori: "Meyveler", fiyat: "15TL", stok: true, isim: "Elma" },
//   { kategori: "Meyveler", fiyat: "45TL", stok: true, isim: "Ejdermeyvesi" },
//   { kategori: "Meyveler", fiyat: "90TL", stok: false, isim: "Çarkıfelek" },
//   { kategori: "Sebzeler", fiyat: "30TL", stok: true, isim: "Ispanak" },
//   { kategori: "Sebzeler", fiyat: "50TL", stok: false, isim: "Kabak" },
//   { kategori: "Sebzeler", fiyat: "40TL", stok: true, isim: "Fasulye" },
// ];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <App manavReyonu={manavReyonu} />
//   </>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./app.css";

const manavReyonu = [
  { kategori: "Meyveler", fiyat: "15TL", stok: true, isim: "Elma" },
  { kategori: "Meyveler", fiyat: "45TL", stok: true, isim: "Ejdermeyvesi" },
  { kategori: "Meyveler", fiyat: "90TL", stok: false, isim: "Çarkıfelek" },
  { kategori: "Sebzeler", fiyat: "30TL", stok: true, isim: "Ispanak" },
  { kategori: "Sebzeler", fiyat: "50TL", stok: false, isim: "Kabak" },
  { kategori: "Sebzeler", fiyat: "40TL", stok: true, isim: "Fasulye" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App manavReyonu={manavReyonu} />
  </>
);
