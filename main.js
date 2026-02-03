// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.category = category;
	this.isAvailable = isAvailable;
}

// Câu 2: Mảng products (ít nhất 6 sản phẩm, tối thiểu 2 danh mục)
const products = [
	new Product("P001", "MacBook Pro 14", 52000000, 5, "Laptops", true),
	new Product("P002", "iPhone 15 Pro", 34000000, 0, "Phones", true),
	new Product("P003", "AirPods Pro", 6200000, 12, "Accessories", true),
	new Product("P004", "Magic Mouse", 2400000, 0, "Accessories", true),
	new Product("P005", "Dell XPS 13", 29500000, 3, "Laptops", true),
	new Product("P006", "iPad Air", 16500000, 10, "Tablets", false),
];

// Câu 3: Mảng mới chỉ chứa name, price
const productSummaries = products.map((product) => ({
	name: product.name,
	price: product.price,
}));
console.log("Câu 3 - name & price:", productSummaries);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter((product) => product.quantity > 0);
console.log("Câu 4 - còn hàng:", inStockProducts);

// Câu 5: Có ít nhất một sản phẩm giá trên 30.000.000?
const hasPriceAbove30M = products.some((product) => product.price > 30000000);
console.log("Câu 5 - giá > 30.000.000:", hasPriceAbove30M);

// Câu 6: Tất cả sản phẩm danh mục Accessories đều đang bán?
const allAccessoriesAvailable = products
	.filter((product) => product.category === "Accessories")
	.every((product) => product.isAvailable === true);
console.log("Câu 6 - Accessories đang bán:", allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho hàng (price * quantity)
const totalInventoryValue = products.reduce(
	(total, product) => total + product.price * product.quantity,
	0
);
console.log("Câu 7 - tổng giá trị kho:", totalInventoryValue);

// Câu 8: for...of duyệt và in ra: Tên – Danh mục – Trạng thái
console.log("Câu 8 - danh sách sản phẩm:");
for (const product of products) {
	const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
	console.log(`${product.name} – ${product.category} – ${status}`);
}

// Câu 9: for...in in tên thuộc tính và giá trị tương ứng
console.log("Câu 9 - thuộc tính & giá trị của sản phẩm tương ứng:");
for (const key in products[3]) {
	console.log(`${key}:`, products[3][key]);
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
	.filter((product) => product.isAvailable && product.quantity > 0)
	.map((product) => product.name);
console.log("Câu 10 - đang bán & còn hàng:", availableAndInStockNames);
