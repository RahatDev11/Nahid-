let products = JSON.parse(localStorage.getItem('products')) || [];
let isAdmin = false;

// মেনু টগল
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("open");
}

// মোডাল ব্যবস্থাপনা
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

// এডমিন লগইন
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const number = document.getElementById("loginNumber").value;
    const password = document.getElementById("loginPassword").value;

    if (number === '01825620497' && password === '3012014') {
        closeModal('loginModal');
        document.getElementById('product-update').classList.remove("hidden");
        document.getElementById('adminLink').classList.remove("hidden");
        isAdmin = true;
        loadProducts();
    } else {
        alert('ভুল লগইন তথ্য!');
    }
});

// প্রোডাক্ট লোড করুন
function loadProducts(filteredProducts = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer";
        card.onclick = () => showProductDetail(product.id);
        
        // হোয়াটসঅ্যাপ মেসেজ জেনারেট
        const imageLinks = product.image.split(',').map((img, index) => 
            `ছবি-${index + 1}: ${img.trim()}`).join('\n');
        
        const whatsappMessage = encodeURIComponent(`
প্রোডাক্টের নাম: ${product.name}
দাম: ${product.price} টাকা
${imageLinks}
আমি এই প্রোডাক্টটি কিনতে চাই!
        `);

        card.innerHTML = `
            <img src="${product.image.split(',')[0]}" class="w-full h-48 object-cover mb-4 rounded-lg">
            <h3 class="text-lg font-bold mb-2">${product.name}</h3>
            <p class="text-teal-500 font-bold mb-2">দাম: ${product.price} টাকা</p>
            <p class="text-gray-600 mb-4">${product.description.substring(0, 80)}...</p>
            <div class="flex justify-between items-center">
                <button onclick="event.stopPropagation(); showProductDetail('${product.id}')" class="text-blue-500 hover:underline">বিস্তারিত দেখুন</button>
                <a href="https://wa.me/8801931866636?text=${whatsappMessage}" 
                   target="_blank" 
                   class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                    কিনুন
                </a>
                ${isAdmin ? `
                <div class="flex space-x-2">
                    <button onclick="event.stopPropagation(); editProduct('${product.id}')" class="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600">এডিট</button>
                    <button onclick="event.stopPropagation(); deleteProduct('${product.id}')" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">ডিলিট</button>
                </div>
                ` : ''}
            </div>
        `;
        productList.appendChild(card);
    });
}

// প্রোডাক্ট ডিটেইল পেজে রিডাইরেক্ট
function showProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// নতুন প্রোডাক্ট যুক্ত করুন
document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const imageUrls = Array.from(document.querySelectorAll('#imageInputs input'))
                          .map(input => input.value.trim())
                          .filter(url => url);
    
    const newProduct = {
        id: Date.now().toString(),
        name: document.getElementById("productName").value,
        price: document.getElementById("productPrice").value,
        image: imageUrls.join(','),
        tags: document.getElementById("productTags").value.split(',').map(tag => tag.trim()),
        description: document.getElementById("productDescription").value
    };
    
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
    
    document.getElementById("generatedCode").textContent = 
    `{
        id: "${newProduct.id}",
        name: "${newProduct.name}",
        price: "${newProduct.price}",
        image: "${newProduct.image}",
        tags: "${newProduct.tags.join(', ')}",
        description: "${newProduct.description}"
    },`;
});

// প্রোডাক্ট ডিলিট করুন
function deleteProduct(productId) {
    if (confirm('আপনি কি এই প্রোডাক্টটি ডিলিট করতে চান?')) {
        products = products.filter(p => p.id !== productId);
        localStorage.setItem("products", JSON.stringify(products));
        loadProducts();
    }
}

// সমস্ত ডাটা ডিলিট করুন
function resetProducts() {
    if(confirm('সকল প্রোডাক্ট ডিলিট করতে চান?')) {
        localStorage.clear();
        products = [];
        loadProducts();
    }
}

// প্রোডাক্ট এডিট করুন
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("productName").value = product.name;
        document.getElementById("productPrice").value = product.price;
        document.getElementById("imageInputs").innerHTML = product.image.split(',')
            .map(url => `<input type="text" class="w-full p-2 border rounded mb-2" value="${url.trim()}">`)
            .join('');
        document.getElementById("productTags").value = product.tags.join(', ');
        document.getElementById("productDescription").value = product.description;
        document.getElementById("product-update").scrollIntoView({ behavior: 'smooth' });
    }
}

// ছবি ফিল্ড যোগ করুন
function addImageField() {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'w-full p-2 border rounded mb-2';
    input.placeholder = 'ছবির লিংক';
    document.getElementById("imageInputs").appendChild(input);
}

// সার্চ ফাংশনালিটি
function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.tags.toLowerCase().includes(searchTerm)
    );
    loadProducts(filtered);
}

// সার্চ বার ফোকাস
function focusSearch() {
    document.getElementById('mainSearchBar').classList.remove('hidden');
    document.getElementById('searchInput').focus();
}

// কোড কপি করুন
function copyCode() {
    const code = document.getElementById("generatedCode").textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('কোড কপি করা হয়েছে!');
    });
}

// পণ্য দেখুন বাটনের জন্য স্ক্রোল ফাংশন
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// প্রথম লোড
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#dropdownMenu') && !event.target.closest('button[onclick="toggleMenu()"]')) {
            document.getElementById("dropdownMenu").classList.remove("open");
        }
    });
});