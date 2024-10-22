const products = [
  {
    id: 1,
    title: "Corpiño Mar Lila",
    price: "25$",
    category: "corpinio",
    quantity: "",
    description:
      "Descripción: Corpiño con escote cuadrado, espalda baja, y terminaciones de excelente calidad. Cómodo y suave, sencillo y elegante.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9176-631b9a1ba4dedc2f0d17026424097968-1024-1024.webp",
  },
  {
    id: 2,
    title: "Corpiño Mar Celeste",
    price: "25$",
    category: "corpinio",
    quantity: "",
    description:
      "Descripción: Corpiño con escote cuadrado, espalda baja, y terminaciones de excelente calidad. Cómodo y suave, sencillo y elegante.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9029-74f32217d0671e77b017026423401630-1024-1024.webp",
  },
  {
    id: 3,
    title: "Bombacha Mar Lila",
    price: "20$",
    category: "bombacha",
    description:
      "Nueva bombacha estilo trusa. Diseño cómodo, simple y elegante.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9232-9be15286e70b4a438517026417975215-1024-1024.webp",
  },
  {
    id: 4,
    title: "Bombacha Mar Celeste",
    price: "20$",
    category: "bombacha",
    description:
      "Nueva bombacha estilo trusa. Diseño cómodo, simple y elegante.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9035-2d08628c8bc292fc3a17026419035715-1024-1024.webp",
  },
  {
    id: 5,
    title: "Top Margarita negro",
    price: "30$",
    category: "active",
    description: "Top con escote cuadrado, elegante, suave y cómodo.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/000080950020_copia-eef8fa56d1a2fe225717025022941889-1024-1024.webp",
  },
  {
    id: 6,
    title: "Top Margarita rojo",
    price: "30$",
    category: "active",
    description: "Top con escote cuadrado, elegante, suave y cómodo.",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/000080950005_copia-b4ad25920f4c16d9a117025027967295-1024-1024.webp",
  },
  {
    id: 7,
    title: "Calza Ciclista negra",
    price: "35$",
    category: "active",
    description: "Calza ciclista de algodón muy cómoda",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9343-2ce5da41eba5b6533817066211949234-1024-1024.webp",
  },
  {
    id: 8,
    title: "Calza Ciclista roja",
    price: "35$",
    category: "active",
    description: "Calza ciclista de algodón muy cómoda",
    image:
      "https://acdn.mitiendanube.com/stores/001/862/618/products/img_9532_tiendanube-03685c7afb8325b49317066216090310-1024-1024.webp",
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 4000);
});

export const getProduct = (id) => {
  return products.find((product) => product.id == id);
};

// export const getCategory = (category) => {
//   return products.filter((item) => item.category === category);
// };

export const addOrder = (order) => {
  console.log("Orden creada:", order);
  return Promise.resolve("order123"); // Simulando un ID de orden
};
