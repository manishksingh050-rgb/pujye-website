/* ============================================================
   PUJYE PRODUCT LIST  -  edit this file to manage your shop.

   ADD a product:    copy one block { ... }, paste it after a comma.
   CHANGE a product: edit the text inside the quotes.
   REMOVE a product: delete its whole block { ... } (and its comma).

   FIELDS
   id     short name for the web address. lowercase, hyphens, no spaces
   n      product name
   c      category: personal | home | wellness | fragrance | essentials
   p      price in rupees, number only (no ₹ sign)
   conf   true = price is final. Remove this line while price is a placeholder
   v      size or pack (e.g. "Packet of 12 sticks")
   d      one-line description
   st     "stock" = available | "soon" = coming soon | "out" = out of stock
          (remove the line for a demo listing)
   img    main photo, e.g. "assets/products/licence-stick.jpg"
   imgs   several photos: ["assets/products/a.jpg","assets/products/b.jpg"]
   ing    ingredients      use     how to use      safe   safety notes
   store  storage          spec    specifications  ship   shipping note
   (ing, use, safe, store, spec, ship are optional)

   Only write facts you can prove. Use ’ instead of a straight quote
   inside text. Every block except the last needs a comma after }.
   ============================================================ */
window.PRODUCTS = [
  {
    id: "licence-stick",
    n: "Licence Stick Incense",
    c: "fragrance",
    p: 10,
    v: "Packet of 10 to 12 sticks",
    d: "An everyday incense packet for the daily pooja routine.",
    //  img: "assets/products/licence-stick-1.jpg",
    // st: "stock", conf: true,
  },
  {
    id: "clay-dhoop",
    n: "Clay Dhoop Batti",
    c: "fragrance",
    p: 10,
    v: "25 to 30 g",
    d: "Hand-shaped dhoop for pooja and quiet evenings.",
  },
  {
    id: "14-day-box",
    n: "14-Day Agarbatti Box",
    c: "fragrance",
    p: 50,
    v: "40 to 45 sticks, two per day",
    d: "A fortnight of daily incense in one box.",
  }
];
{  id: "rose-dhoop",
  n: "Rose Dhoop",
  c: "fragrance",
  p: 40,
  conf: true,
  v: "50 g jar",
  d: "Short one-line description.",
  st: "stock",
  img: "assets/products/rose-dhoop.jpg",
  ing: "Write real ingredients here.",
  use: "How to use it.",
  safe: "Safety notes.",
  store: "Storage notes." },
