// products-data.js
const initialProducts = [
  {
        id: "1741388377287",
        name: "হা",
        price: "498",
        image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326260/cld-sample-5.jpg",
        tags: "Boys, girls",
        description: "হা"
    },
  {
        id: "1741376828264",
        name: "ডন",
        price: "999",
        image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326260/samples/woman-on-a-football-field.jpg,https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326259/samples/cup-on-a-table.jpg,https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326259/samples/man-portrait.jpg",
        tags: "ডন",
        description: "ডন নম্বর 1"
    },
  {
        id: "1741375131773",
        name: "মানুষ",
        price: "646",
        image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326250/samples/people/kitchen-bar.jpg,https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326249/samples/food/fish-vegetables.jpg",
        tags: "Pump",
        description: "মানুষ+মানুষ"
    },
  {
    id: "1741365548108",
    name: "Dog",
    price: "5899",
    image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326251/samples/animals/three-dogs.jpg",
    tags: "Dogs",
    description: "This is dogs"
  },
  // এখানে নতুন প্রোডাক্ট যোগ করুন
  {
    id: "1741365548109",
    name: "New Product",
    price: "999",
    image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326248/sample.jpg",
    tags: "new,tag",
    description: "New product description"
  }
];

// লোকাল স্টোরেজ ইনিশিয়ালাইজেশন
if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(initialProducts));
}
