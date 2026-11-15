// src/data/products.js

import shoeThumb1 from "../assets/product-thumb-1.jpeg";
import shoeThumb2 from "../assets/product-thumb-2.jpeg";
import shoeThumb3 from "../assets/product-thumb-3.jpeg";
import shoeThumb4 from "../assets/product-thumb-4.jpeg";
import shoeThumb5 from "../assets/product-thumb-5.jpeg";

export const productsData = [
  {
    id: "1",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Casual | Nike",
    reference: "REF: 3841671",
    price: 219.00,
    priceDiscount: 149.00,
    rating: 4.7,
    totalReviews: 90,
    description: "Conforto e sustentabilidade definem o Nike Revolution 6. Ideal para acompanhar o seu dia a dia com estilo e leveza em cada passada.",
    image: shoeThumb1,
    images: [
      { src: shoeThumb1 },
      { src: shoeThumb2 },
      { src: shoeThumb3 },
      { src: shoeThumb4 },
      { src: shoeThumb5 }
    ],
    gender: "Masculino",
    brand: "Nike"
  },
  {
    id: "2",
    name: "K-Swiss V8 - Masculino",
    category: "Esporte | K-Swiss",
    reference: "REF: 3841672",
    price: 200.00,
    priceDiscount: 100.00,
    rating: 4.5,
    totalReviews: 64,
    description: "Um clássico reformulado para oferecer durabilidade e amortecimento superior em trechos urbanos.",
    image: shoeThumb2,
    images: [
      { src: shoeThumb2 },
      { src: shoeThumb1 },
      { src: shoeThumb3 }
    ],
    gender: "Masculino",
    brand: "K-Swiss"
  },
  {
    id: "3",
    name: "Tênis Adidas Runfalcon 3.0",
    category: "Esporte | Adidas",
    reference: "REF: 3841673",
    price: 299.90,
    priceDiscount: null, // Produto sem desconto para testar a regra do componente
    rating: 4.8,
    totalReviews: 120,
    description: "Leve e respirável, perfeito para corridas leves e caminhadas diárias.",
    image: shoeThumb3,
    images: [
      { src: shoeThumb3 },
      { src: shoeThumb4 }
    ],
    gender: "Unissex",
    brand: "Adidas"
  },
  {
    id: "4",
    name: "Tênis Puma Shuffle V BDP",
    category: "Casual | Puma",
    reference: "REF: 3841674",
    price: 250.00,
    priceDiscount: 189.90,
    rating: 4.6,
    totalReviews: 45,
    description: "Estilo retrô icônico da Puma adaptado para o conforto moderno.",
    image: shoeThumb4,
    images: [
      { src: shoeThumb4 },
      { src: shoeThumb5 }
    ],
    gender: "Feminino",
    brand: "Puma"
  },
  {
    id: "5",
    name: "Tênis Balenciaga Track Trainer",
    category: "Utilitário | Balenciaga",
    reference: "REF: 3841675",
    price: 450.00,
    priceDiscount: 399.00,
    rating: 4.9,
    totalReviews: 12,
    description: "Design de alta performance com camadas complexas e visual marcante.",
    image: shoeThumb5,
    images: [
      { src: shoeThumb5 },
      { src: shoeThumb1 }
    ],
    gender: "Unissex",
    brand: "Balenciaga"
  },
  {
    id: "6",
    name: "K-Swiss V8 - Edição Especial",
    category: "Esporte | K-Swiss",
    reference: "REF: 3841676",
    price: 220.00,
    priceDiscount: 110.00,
    rating: 4.4,
    totalReviews: 30,
    description: "Versão comemorativa com acabamentos premium.",
    image: shoeThumb1,
    images: [
      { src: shoeThumb1 },
      { src: shoeThumb2 }
    ],
    gender: "Masculino",
    brand: "K-Swiss"
  },
  {
    id: "7",
    name: "Tênis Nike Air Max Excee",
    category: "Casual | Nike",
    reference: "REF: 3841677",
    price: 349.90,
    priceDiscount: 279.90,
    rating: 4.8,
    totalReviews: 88,
    description: "Inspirado no Air Max 90, com um visual moderno e amortecimento visível.",
    image: shoeThumb2,
    images: [
      { src: shoeThumb2 },
      { src: shoeThumb3 }
    ],
    gender: "Masculino",
    brand: "Nike"
  },
  {
    id: "8",
    name: "Tênis Puma Flyer Runner",
    category: "Esporte | Puma",
    reference: "REF: 3841678",
    price: 269.90,
    priceDiscount: 199.90,
    rating: 4.3,
    totalReviews: 55,
    description: "Foco total em leveza e absorção de impacto.",
    image: shoeThumb3,
    images: [
      { src: shoeThumb3 },
      { src: shoeThumb4 }
    ],
    gender: "Feminino",
    brand: "Puma"
  }
];