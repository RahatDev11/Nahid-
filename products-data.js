// products-data.js
const initialProducts = [
  {
        id: "1741455671446",
        name: "boys ",
        price: "999",
        category: "shirts",
        image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741326251/samples/people/jazz.jpg",
        tags: "boys",
        description: "Boys "
    },
  {
        id: "1741421645699",
        name: "T-shirt ",
        price: "5999",
        category: "shirts",
        image: "https://res.cloudinary.com/dnvm88wfi/image/upload/v1741412399/tshirt-8726716_1280_vyvosl.jpg,https://res.cloudinary.com/dnvm88wfi/image/upload/v1741412399/tshirt-7979852_1280_fn9tw2.jpg,https://res.cloudinary.com/dnvm88wfi/image/upload/v1741412399/tshirt-7979854_1280_jj0vhg.jpg",
        tags: "T-shirt, ganji, shirt, টিশার্ট, ",
        description: "টি-শার্ট বা টি হচ্ছে এক প্রকার শার্ট, যা ঘাড়ের অংশ থেকে দেহের ওপরাংশে কবন্ধের বেশিরভাগ স্থানকে ঢেকে রাখে। ইংরেজি 'টি' (T) আকৃতির ন্যায় দেখতে, তাই এ পোশাকটির নাম টি-শার্ট হয়েছে। টি-শার্টে সাধারণত কোনো বোতাম বা কলার থাকে না। সচারচর এটি হয় গোলাকার ও খাটো হাতাযুক্ত। যদিও কিছু ক্ষেত্রে মানুষ ভুলবশত খাটো হাতাযুক্ত যে-কোনো শার্ট বা ব্লাউজকেই টি-শার্ট ভেবে ভুল করে। পোলো শার্ট বা অন্যান্য কলারযুক্ত শার্ট প্রকৃতপক্ষে টি-শার্ট নয়। কারণ এ ধরনের শার্টের হাতা কাঁধের পাশ দিয়ে সামান্য একটু বাড়তি থাকে, এবং খাটো হাতার ক্ষেত্রে তা কনুই পর্যন্ত হতে পারে।"
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
