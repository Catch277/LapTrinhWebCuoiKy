// =======================
// Dữ liệu xe thật
// =======================
const carsData = [
  {
    name: "Toyota Corolla",
    price: 700000000,
    brand: "Toyota",
    style: "Sedan",
    color: "Trắng",
    design: "Gia đình",
    description:
      "Toyota Corolla là mẫu xe sedan phổ biến với thiết kế hiện đại, tiết kiệm nhiên liệu và độ bền cao, phù hợp cho cả gia đình và cá nhân.",
    seo_title: "Toyota Corolla – Sedan bền bỉ, tiết kiệm nhiên liệu, giá tốt",
    seo_description:
      "Mua Toyota Corolla giá tốt. Mẫu sedan bền bỉ, tiết kiệm nhiên liệu, thiết kế hiện đại và phù hợp gia đình. Thông tin chi tiết và hình ảnh mới nhất.",
    seo_keywords:
      "Toyota Corolla, sedan Toyota, xe gia đình, Corolla 2025, mua xe Toyota",
    img: [
      "./images/Toyota/whitetoyotacorollasedan.jpg",
      "./images/Toyota/whitetoyotacorollasedan2.png",
      "./images/Toyota/whitetoyotacorollasedan3.jpg",
    ],
  },
  {
    name: "Honda CR-V",
    price: 950000000,
    brand: "Honda",
    style: "SUV",
    color: "Đen",
    design: "Gia đình",
    description:
      "Honda CR-V – SUV mạnh mẽ, tiết kiệm nhiên liệu, không gian rộng rãi, công nghệ an toàn tiên tiến. Lựa chọn hoàn hảo cho gia đình hiện đại.",
    seo_title: "Honda CR-V – SUV gia đình sang trọng, mạnh mẽ và tiết kiệm",
    seo_description:
      "Khám phá Honda CR-V – chiếc SUV 7 chỗ sang trọng, rộng rãi, an toàn Honda Sensing, vận hành mạnh mẽ và tiết kiệm nhiên liệu. Giá tốt nhất hôm nay.",
    seo_keywords:
      "Honda CR-V, SUV Honda, CR-V 2025, xe 7 chỗ Honda, mua Honda CR-V",
    img: [
      "./images/Honda/blackhondacrvsuv.jpg",
      "./images/Honda/blackhondacrvsuv2.webp",
      "./images/Honda/blackhondacrvsuv3.webp",
    ],
  },
  {
    name: "BMW 3 Series",
    price: 1500000000,
    brand: "BMW",
    style: "Sedan",
    color: "Xanh",
    design: "Sang trọng",
    description:
      "BMW 3 Series – Biểu tượng của hiệu suất và sự sang trọng. Với khả năng vận hành mạnh mẽ, thiết kế tinh tế và nội thất cao cấp, đây là chiếc sedan giúp bạn khẳng định đẳng cấp trên từng chuyến đi.",
    seo_title: "BMW 3 Series – Sedan sang trọng, hiệu suất cao",
    seo_description:
      "BMW 3 Series mang đến hiệu suất mạnh mẽ, nội thất cao cấp và thiết kế đẳng cấp. Lựa chọn lý tưởng cho người yêu sự sang trọng và thể thao.",
    seo_keywords: "BMW 3 Series, sedan BMW, xe sang BMW, BMW 2025",
    img: [
      "./images/BMW/bluebmw3seriessedan.jpg",
      "./images/BMW/bluebmw3seriessedan2.jfif",
      "./images/BMW/bluebmw3seriessedan3.jfif",
    ],
  },
  {
    name: "Mercedes-Benz C-Class",
    price: 1600000000,
    brand: "Mercedes-Benz",
    style: "Sedan",
    color: "Bạc",
    design: "Sang trọng",
    description:
      "Mercedes-Benz C-Class – Sự kết hợp hoàn hảo giữa đẳng cấp, công nghệ và sự thoải mái. Thiết kế tinh xảo, nội thất sang trọng và trải nghiệm lái mượt mà giúp chiếc sedan này luôn nổi bật trong mọi ánh nhìn.",
    seo_title: "Mercedes-Benz C-Class – Sedan hạng sang đẳng cấp",
    seo_description:
      "Mercedes-Benz C-Class mang đến sự sang trọng, công nghệ tiên tiến và trải nghiệm lái mượt mà. Lựa chọn lý tưởng cho doanh nhân hiện đại.",
    seo_keywords:
      "Mercedes C-Class, Mercedes sedan, xe sang Mercedes, C-Class 2025",
    img: [
      "./images/Mercedes/silvermercedesbenzsedan.webp",
      "./images/Mercedes/silvermercedesbenzsedan2.jfif",
      "./images/Mercedes/silvermercedesbenzsedan3.jfif",
    ],
  },
  {
    name: "Porsche 911",
    price: 5000000000,
    brand: "Porsche",
    style: "Coupe",
    color: "Đỏ",
    design: "Thể thao",
    description:
      "Porsche 911 – Huyền thoại tốc độ dành cho những người đam mê cảm giác lái. Kiểu dáng thể thao biểu tượng, sức mạnh ấn tượng và khả năng tăng tốc vượt trội khiến đây trở thành lựa chọn của giới yêu xe hiệu suất cao.",
    seo_title: "Porsche 911 – Huyền thoại siêu xe thể thao",
    seo_description:
      "Porsche 911 là biểu tượng tốc độ với khả năng vận hành vượt trội, thiết kế thể thao đầy cuốn hút. Lựa chọn hàng đầu cho giới đam mê siêu xe.",
    seo_keywords: "Porsche 911, siêu xe Porsche, coupe thể thao, Porsche 2025",
    img: [
      "./images/Porsche/redporsche911coupe.webp",
      "./images/Porsche/redporsche911coupe2.webp",
      "./images/Porsche/redporsche911coupe3.jpg",
    ],
  },
  {
    name: "Volkswagen Golf",
    price: 800000000,
    brand: "Volkswagen",
    style: "Hatchback",
    color: "Xanh",
    design: "Gia đình",
    description:
      "Volkswagen Golf – Chiếc hatchback đa dụng với khả năng vận hành linh hoạt, thiết kế gọn gàng và nội thất tiện nghi. Rất phù hợp cho gia đình nhỏ hoặc người thích di chuyển trong phố một cách thoải mái.",
    seo_title: "Volkswagen Golf – Hatchback linh hoạt, tiện dụng",
    seo_description:
      "Volkswagen Golf là mẫu hatchback gọn gàng, vận hành linh hoạt và nội thất thoải mái. Một trong những mẫu xe đô thị được yêu thích nhất.",
    seo_keywords: "Volkswagen Golf, hatchback VW, xe đô thị, Golf 2025",
    img: [
      "./images/Volkswagen/bluevolkswagenhatchback.webp",
      "./images/Volkswagen/bluevolkswagenhatchback2.webp",
      "./images/Volkswagen/bluevolkswagenhatchback3.jpg",
    ],
  },
  {
    name: "Hyundai Tucson",
    price: 900000000,
    brand: "Hyundai",
    style: "SUV",
    color: "Trắng",
    design: "Gia đình",
    description:
      "Hyundai Tucson – SUV hiện đại với thiết kế trẻ trung, nội thất rộng rãi và nhiều công nghệ thông minh. Là lựa chọn lý tưởng cho gia đình nhờ khả năng vận hành ổn định và mức tiêu hao nhiên liệu hợp lý.",
    seo_title: "Hyundai Tucson – SUV hiện đại, rộng rãi và tiết kiệm",
    seo_description:
      "Hyundai Tucson sở hữu thiết kế ấn tượng, nội thất rộng rãi và công nghệ tiên tiến. Phù hợp gia đình và di chuyển đường dài.",
    seo_keywords: "Hyundai Tucson, SUV Hyundai, Tucson 2025, xe gia đình",
    img: [
      "./images/Hyundai/whitehyundaitucsonsuv.webp",
      "./images/Hyundai/whitehyundaitucsonsuv2.jfif",
      "./images/Hyundai/whitehyundaitucsonsuv3.jpg",
    ],
  },
  {
    name: "Ford F-150",
    price: 1200000000,
    brand: "Ford",
    style: "Pickup",
    color: "Đen",
    design: "Địa hình",
    description:
      "Ford F-150 – Mẫu bán tải mạnh mẽ hàng đầu với khả năng kéo tải ấn tượng, thiết kế cơ bắp và độ bền vượt trội. Dành cho những ai cần một chiếc xe vừa mạnh mẽ, vừa tiện dụng trên mọi địa hình.",
    seo_title: "Ford F-150 – Bán tải mạnh mẽ, bền bỉ hàng đầu",
    seo_description:
      "Ford F-150 nổi tiếng với khả năng kéo tải mạnh mẽ, thiết kế cơ bắp và độ bền vượt trội. Mẫu bán tải lý tưởng cho công việc và địa hình khó.",
    seo_keywords: "Ford F-150, bán tải Ford, pickup mạnh mẽ, F150 2025",
    img: [
      "./images/Ford/blackfordf150pickup.webp",
      "./images/Ford/blackfordf150pickup2.avif",
      "./images/Ford/blackfordf150pickup3.jpg",
    ],
  },
  {
    name: "Chevrolet Silverado",
    price: 1100000000,
    brand: "Chevrolet",
    style: "Pickup",
    color: "Bạc",
    design: "Địa hình",
    description:
      "Chevrolet Silverado – Bán tải cỡ lớn với thiết kế mạnh mẽ, động cơ khỏe và khả năng off-road xuất sắc. Là người bạn đồng hành lý tưởng cho công việc nặng và những chuyến phiêu lưu địa hình.",
    seo_title: "Chevrolet Silverado – Bán tải cỡ lớn mạnh mẽ",
    seo_description:
      "Chevrolet Silverado mang đến sức mạnh vượt trội, khả năng off-road tốt và thiết kế bền bỉ. Hoàn hảo cho công việc và địa hình khó.",
    seo_keywords:
      "Chevrolet Silverado, bán tải Mỹ, xe địa hình, Silverado 2025",
    img: [
      "./images/Chevrolet/silverchevroletsilveradopickup.avif",
      "./images/Chevrolet/silverchevroletsilveradopickup2.avif",
      "./images/Chevrolet/silverchevroletsilveradopickup3.jfif",
    ],
  },
  {
    name: "Tesla Model Y",
    price: 1800000000,
    brand: "Tesla",
    style: "SUV",
    color: "Trắng",
    design: "Thể thao",
    description:
      "Tesla Model Y – SUV điện đột phá mang đến hiệu suất vượt trội, khả năng tăng tốc mạnh mẽ và công nghệ tự lái tiên tiến. Nó là biểu tượng của sự hiện đại, thông minh và thân thiện với môi trường.",
    seo_title: "Tesla Model Y – SUV điện hiện đại, công nghệ tiên tiến",
    seo_description:
      "Tesla Model Y sở hữu khả năng tăng tốc mạnh mẽ, pin bền, công nghệ tự lái đỉnh cao và thiết kế tối giản hiện đại. Lựa chọn hàng đầu xe điện.",
    seo_keywords:
      "Tesla Model Y, SUV điện, xe Tesla, Model Y 2025, xe điện tốt nhất",
    img: [
      "./images/Tesla/whiteteslamodelysuv.avif",
      "./images/Tesla/whiteteslamodelysuv2.avif",
      "./images/Tesla/whiteteslamodelysuv3.jfif",
    ],
  },
  {
    name: "Porsche Cayman GT4",
    price: 4480000000,
    brand: "Porsche",
    style: "Coupe",
    color: "Vàng",
    design: "Thể thao",
    description:
      "Porsche Cayman GT4 – Mẫu coupe hiệu suất cao dành cho người yêu tốc độ. Thiết kế khí động học ấn tượng, khả năng bám đường tuyệt vời và cảm giác lái phấn khích biến GT4 trở thành dòng xe thể thao đáng mơ ước.",
    seo_title: "Porsche Cayman GT4 – Coupe hiệu suất cao đáng mơ ước",
    seo_description:
      "Porsche Cayman GT4 mang đến cảm giác lái phấn khích, khả năng bám đường tuyệt vời và thiết kế khí động học đầy cuốn hút.",
    seo_keywords: "Porsche Cayman GT4, coupe Porsche, xe thể thao, GT4 2025",
    img: [
      "./images/Porsche/yellowporschecaymangt4coupe.webp",
      "./images/Porsche/yellowporschecaymangt4coupe2.avif",
      "./images/Porsche/yellowporschecaymangt4coupe3.jpg",
    ],
  },
  {
    name: "Volkswagen Beetle Dune",
    price: 1499000000,
    brand: "Volkswagen",
    style: "Coupe",
    color: "Đỏ",
    design: "Sang trọng",
    description:
      "Volkswagen Beetle Dune – Biểu tượng cá tính với thiết kế độc đáo, phong cách cổ điển pha hiện đại. Đây là chiếc coupe mang lại sự khác biệt, thời trang và cuốn hút dành cho những ai muốn nổi bật trên đường phố.",
    seo_title: "Volkswagen Beetle Dune – Coupe cá tính, phong cách độc đáo",
    seo_description:
      "Volkswagen Beetle Dune sở hữu thiết kế cổ điển pha hiện đại, phong cách trẻ trung và nổi bật. Dành cho người thích sự khác biệt.",
    seo_keywords:
      "Volkswagen Beetle, Beetle Dune, xe cổ điển hiện đại, coupe VW",
    img: [
      "./images/Volkswagen/redvolkswagenbeetledunecoupe.jfif",
      "./images/Volkswagen/redvolkswagenbeetledunecoupe2.jpg",
      "./images/Volkswagen/redvolkswagenbeetledunecoupe3.avif",
    ],
  },
];

// =======================
// Tiện ích giỏ hàng
// =======================
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function capNhatSoLuongGioHang() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;
  const cart = getCart();
  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  countEl.textContent = totalQuantity;
}

// =======================
// Thêm vào giỏ hàng
// =======================
function addToCart(carName) {
  const car = carsData.find((c) => c.name === carName);
  if (!car) {
    showToast("Không tìm thấy xe để thêm!", "danger");
    return;
  }

  const imgSrc = Array.isArray(car.img) ? car.img[0] : car.img;
  const cart = getCart();

  // Tìm xe đã có trong giỏ
  const existing = cart.find((item) => item.name === car.name);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      name: car.name,
      price: car.price,
      brand: car.brand,
      style: car.style,
      color: car.color,
      design: car.design,
      description: car.description,
      img: imgSrc,
      quantity: 1,
    });
  }

  setCart(cart);
  capNhatSoLuongGioHang();
  showToast(`${car.name} đã được thêm vào giỏ hàng!`, "success");

  if (document.getElementById("cart-list")) {
    hienThiGioHang();
  }
}

// =======================
// Hiển thị danh sách xe (index.html)
// =======================
function renderCars(list) {
  const container = document.querySelector("#cars .row");
  const countElement = document.getElementById("car-count");
  if (!container || !countElement) return;

  container.innerHTML = "";

  if (list.length === 0) {
    countElement.textContent = "Không tìm thấy xe phù hợp.";
    countElement.classList.add("show");
    return;
  }

  countElement.textContent = `Tìm thấy ${list.length} xe phù hợp`;
  countElement.classList.remove("show");
  void countElement.offsetWidth;
  countElement.classList.add("show");

  list.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 car-card";
    card.innerHTML = `
      <div class="card mb-3">
        <a href="car.html?name=${encodeURIComponent(car.name)}">
        <img src="${Array.isArray(car.img) ? car.img[0] : car.img}" 
        class="card-img-top" alt="${car.name}"></a>
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text"><strong>Giá:</strong> ${car.price.toLocaleString()} VNĐ</p>
          <p class="card-text"><strong>Hãng:</strong> ${car.brand}</p>
          <p class="card-text"><strong>Kiểu dáng:</strong> ${car.style}</p>
          <p class="card-text"><strong>Màu sắc:</strong> ${car.color}</p>
          <p class="card-text"><strong>Phong cách:</strong> ${car.design}</p>
          <div class="d-grid gap-2 mt-3">
  <a href="car.html?name=${encodeURIComponent(
    car.name
  )}" class="btn btn-primary">Xem chi tiết</a>
  <button class="btn btn-secondary" onclick="addToCart('${
    car.name
  }')">Thêm vào giỏ hàng</button>
</div>

        </div>
      </div>
    `;
    container.appendChild(card);
    setTimeout(() => card.classList.add("show"), index * 150);
  });
}

// =======================
// Lọc xe (index.html)
// =======================
document
  .getElementById("filter-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const minPrice = parseInt(document.getElementById("price-min").value) || 0;
    const maxPrice =
      parseInt(document.getElementById("price-max").value) || Number.MAX_VALUE;

    const brands = Array.from(
      document.querySelectorAll("input[id^=brand-]:checked")
    ).map((cb) => cb.value);
    const styles = Array.from(
      document.querySelectorAll("input[id^=style-]:checked")
    ).map((cb) => cb.value);
    const colors = Array.from(
      document.querySelectorAll("input[id^=color-]:checked")
    ).map((cb) => cb.value);
    const designs = Array.from(
      document.querySelectorAll("input[id^=design-]:checked")
    ).map((cb) => cb.value);

    let filtered = carsData.filter(
      (car) =>
        car.price >= minPrice &&
        car.price <= maxPrice &&
        (brands.length === 0 || brands.includes(car.brand)) &&
        (styles.length === 0 || styles.includes(car.style)) &&
        (colors.length === 0 || colors.includes(car.color)) &&
        (designs.length === 0 || designs.includes(car.design))
    );

    // Lấy option sắp xếp
    const sortOption = document.getElementById("sort-option").value;
    if (sortOption === "az") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "za") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    renderCars(filtered);
  });

document
  .getElementById("reset-filters")
  ?.addEventListener("click", function () {
    document.getElementById("filter-form").reset();
    document.getElementById("sort-option").value = "";
    renderCars(carsData);
  });

// =======================
// Chi tiết xe + Carousel (car.html)
// =======================
function hienThiChiTietXe() {
  const detailContainer = document.getElementById("car-detail");
  if (!detailContainer) return;

  // Lấy tham số từ URL
  const params = new URLSearchParams(window.location.search);
  const carName = params.get("name");
  const car = carsData.find((c) => c.name === carName);

  if (!car) {
    detailContainer.innerHTML = "<p>Không tìm thấy thông tin xe.</p>";
    return;
  }

  // Đảm bảo car.img luôn là mảng
  const images = Array.isArray(car.img) ? car.img : [car.img];

  // Tạo indicator tự động theo số ảnh
  const indicators = images
    .map(
      (_, index) => `
  <button type="button" data-bs-target="#carCarousel" data-bs-slide-to="${index}"
    ${index === 0 ? 'class="active" aria-current="true"' : ""} 
    aria-label="Slide ${index + 1}"></button>
`
    )
    .join("");

  // Tạo carousel items
  const carouselItems = images
    .map(
      (src, index) => `
  <div class="carousel-item ${index === 0 ? "active" : ""}">
    <img src="${src}" class="d-block w-100 rounded" alt="${car.name}">
  </div>
`
    )
    .join("");

  // Carousel HTML
  const carousel = `
  <div id="carCarousel" class="carousel slide carousel-fade mb-4" 
       data-bs-ride="carousel" data-bs-interval="4000">
    <!-- Indicator -->
    <div class="carousel-indicators">
      ${indicators}
    </div>
    <!-- Ảnh -->
    <div class="carousel-inner">
      ${carouselItems}
    </div>
    <!-- Nút điều hướng -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
`;

  // Render chi tiết xe
  detailContainer.innerHTML = `
    <div class="row">
      <div class="col-md-6">${carousel}</div>
      <div class="col-md-6">
        <h2>${car.name}</h2>
        <p><strong>Giá:</strong> ${car.price.toLocaleString()} VNĐ</p>
        <p><strong>Hãng:</strong> ${car.brand}</p>
        <p><strong>Kiểu dáng:</strong> ${car.style}</p>
        <p><strong>Màu sắc:</strong> ${car.color}</p>
        <p><strong>Phong cách:</strong> ${car.design}</p>
        <p><strong>Mô tả:</strong> ${car.description || "Chưa có mô tả."}</p>
        <div class="d-flex gap-3 mt-3">
          <a href="index.html" class="btn btn-secondary">Quay lại danh sách</a>
          <button class="btn btn-primary" onclick="addToCart('${
            car.name
          }')">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  `;
  // Khởi tạo carousel ngay sau khi chèn HTML
  const el = document.getElementById("carCarousel");
  if (el && window.bootstrap?.Carousel) {
    new bootstrap.Carousel(el, {
      interval: 4000,
      ride: "carousel",
      pause: false, // không dừng khi hover
      touch: true,
      wrap: true,
    });
  }
}

// =======================
// Hiển thị giỏ hàng (cart.html)
// =======================
function hienThiGioHang() {
  const container = document.getElementById("cart-list");
  const totalEl = document.getElementById("cart-total");
  const template = document.getElementById("cart-item-template");

  if (!container || !template) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Giỏ hàng trống.</p>";
    if (totalEl) totalEl.textContent = "0 VNĐ";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const priceNumber =
      typeof item.price === "number"
        ? item.price
        : parseInt(item.price.toString().replace(/[^0-9]/g, ""));
    const itemTotal = priceNumber * item.quantity;
    total += itemTotal;

    const clone = template.content.cloneNode(true);
    clone.querySelector(".cart-img").src = item.img;
    clone.querySelector(".cart-img").alt = item.name;
    clone.querySelector(".cart-name").textContent = item.name;
    clone.querySelector(".cart-price").textContent =
      priceNumber.toLocaleString() + " VNĐ";
    clone.querySelector(".cart-quantity").textContent = item.quantity;
    clone.querySelector(".cart-total").textContent =
      itemTotal.toLocaleString() + " VNĐ";

    const quantityEl = clone.querySelector(".cart-quantity");
    quantityEl.textContent = item.quantity;

    // Thêm hiệu ứng nhấp nháy màu
    quantityEl.classList.add("animate");
    setTimeout(() => quantityEl.classList.remove("animate"), 600);
    clone.querySelector(".cart-increase").onclick = () =>
      tangSoLuongXe(item.name);
    clone.querySelector(".cart-decrease").onclick = () =>
      giamSoLuongXe(item.name);
    clone.querySelector(".cart-remove").onclick = () => xoaTatCaXe(item.name);

    container.appendChild(clone);
  });

  if (totalEl) totalEl.textContent = total.toLocaleString() + " VNĐ";
}

// =======================
// Thao tác giỏ hàng (cart.html)
// =======================
function xoaGioHang() {
  localStorage.removeItem("cart");
  capNhatSoLuongGioHang();
  hienThiGioHang();
  showToast("Giỏ hàng đã được xóa!", "warning");
}

function thanhToan() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống!", "danger");
    return;
  }

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => {
    const priceNumber =
      typeof item.price === "number"
        ? item.price
        : parseInt(item.price.toString().replace(/[^0-9]/g, ""));
    return sum + priceNumber * (item.quantity || 1);
  }, 0);

  // Lưu tổng tiền vào localStorage để dùng ở checkout.html
  localStorage.setItem("checkoutTotal", total);

  // Chuyển sang trang thanh toán
  window.location.href = "./checkout.html";
}

// Tăng, giảm, xóa xe trong giỏ
function tangSoLuongXe(name) {
  const cart = getCart();
  const updatedCart = cart.map((item) => {
    if (item.name === name) {
      return { ...item, quantity: (item.quantity || 1) + 1 };
    }
    return item;
  });
  setCart(updatedCart);
  capNhatSoLuongGioHang();
  hienThiGioHang();
}

function giamSoLuongXe(name) {
  let cart = getCart();
  cart = cart
    .map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  setCart(cart);
  capNhatSoLuongGioHang();
  hienThiGioHang();
}

function xoaTatCaXe(name) {
  const cart = getCart().filter((item) => item.name !== name);
  setCart(cart);
  capNhatSoLuongGioHang();
  hienThiGioHang();
}

function showToast(message, type = "primary") {
  const toastEl = document.getElementById("liveToast");
  const toastBody = document.getElementById("toast-message");
  if (!toastEl || !toastBody) return;

  // Đổi màu theo loại (primary, success, danger, warning...)
  toastEl.className = `toast align-items-center text-bg-${type} border-0`;

  toastBody.textContent = message;

  // Hiển thị toast với thời gian tối đa 5 giây
  const toast = new bootstrap.Toast(toastEl, { delay: 5000 });
  toast.show();
}

// Ngăn form reload và hiển thị thông báo
document
  .getElementById("newsletter-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Đã đăng ký nhận khuyến mãi!", "success");
  });

document
  .getElementById("quick-contact-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Yêu cầu của bạn đã được gửi!", "success");
  });

// =======================
// Khởi động theo trang
// =======================
window.onload = function () {
  // Luôn cập nhật số lượng giỏ hàng ở header
  capNhatSoLuongGioHang();

  // Index: có container danh sách xe
  if (document.querySelector("#cars .row")) {
    renderCars(carsData);
  }

  // Car detail: có container chi tiết xe
  if (document.getElementById("car-detail")) {
    hienThiChiTietXe();
  }

  // Cart: có container giỏ hàng
  if (document.getElementById("cart-list")) {
    hienThiGioHang();
  }
};
// =======================
// Sinh QR code thanh toán (checkout.html)
// =======================
function taoQRCode(bankCode, accountNumber, amount, info) {
  // Tạo URL QR động theo chuẩn VietQR
  return `https://img.vietqr.io/image/${bankCode}-${accountNumber}-compact.png?amount=${amount}&addInfo=${encodeURIComponent(
    info
  )}`;
}
