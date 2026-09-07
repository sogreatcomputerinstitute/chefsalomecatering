var WHATSAPP = "2347067695107";

var MENU = [
  { name: "Egg Roll", desc: "Golden, crispy outside, soft egg inside. Best-seller.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" },
  { name: "Fish Pie", desc: "Flaky crust, rich fish filling. Great for events.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" },
  { name: "Sausage Roll", desc: "Buttery pastry, juicy sausage. Kids & adults love it.", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop" },
  { name: "Pizza", desc: "Loaded, cheesy, baked fresh on order.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
  { name: "Shawarma", desc: "Juicy chicken/beef wrap with creamy sauce.", img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop" },
  { name: "Doughnut", desc: "Soft, fluffy, glazed. Boxes available.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop" },
  { name: "Peanuts", desc: "Crunchy, well-seasoned. Retail & wholesale packs.", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop" },
  { name: "Meat Pie", desc: "Classic Nigerian meat pie, rich & flaky.", img: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?q=80&w=800&auto=format&fit=crop" },
  { name: "Puff Puff", desc: "Soft, sweet, golden balls. Party favourite.", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop" },
  { name: "Samosa", desc: "Crispy triangle with spicy filling.", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop" },
  { name: "Spring Rolls", desc: "Light, crispy, veggie & chicken options.", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop" },
  { name: "Small Chops Platter", desc: "Mix of puff puff, samosa, spring rolls & more.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" },
  { name: "Jollof Rice & Chicken", desc: "Smoky party jollof with juicy chicken.", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
  { name: "Fried Rice & Turkey", desc: "Colourful fried rice with turkey.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop" },
  { name: "Grilled Chicken", desc: "Well-seasoned, grilled to perfection.", img: "https://images.unsplash.com/photo-1532550907401-41c866e8f038?q=80&w=800&auto=format&fit=crop" },
  { name: "Chin Chin", desc: "Crunchy, milky bites. Packs & jars.", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop" },
  { name: "Cupcakes", desc: "Ash to Glory cupcakes in fun flavours.", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800&auto=format&fit=crop" },
  { name: "Custom Cake", desc: "Ash to Glory cakes — send design, we bake it.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" }
];

function waLink(text) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text);
}

// Render menu cards
var grid = document.getElementById("menuGrid");
if (grid) {
  grid.innerHTML = MENU.map(function (m) {
    var msg = "Hello Chef Salome! I wonna make an order: " + m.name + ". Please send price & availability.";
    return '<div class="menu-card reveal">' +
      '<img src="' + m.img + '" alt="' + m.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop\'" />' +
      '<div><h3>' + m.name + '</h3><p>' + m.desc + '</p>' +
      '<a target="_blank" rel="noopener" href="' + waLink(msg) + '">Order ' + m.name + ' →</a></div></div>';
  }).join("");
}

// Render tick boxes in form
var tick = document.getElementById("tickGrid");
if (tick) {
  tick.innerHTML = MENU.map(function (m) {
    return '<label><input type="checkbox" value="' + m.name + '" /> ' + m.name + '</label>';
  }).join("");
}

// Quote form -> WhatsApp
var form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var checked = Array.prototype.slice.call(tick.querySelectorAll("input:checked")).map(function (i) { return i.value; });
    var msg = "Hello Chef Salome! I need a quote.\n\n" +
      "Name: " + (data.get("name") || "-") + "\n" +
      "Type: " + (data.get("type") || "-") + "\n" +
      "Date: " + (data.get("date") || "-") + "\n" +
      "Guests/Qty: " + (data.get("guests") || "-") + "\n" +
      "Phone: " + (data.get("phone") || "-") + "\n" +
      "Items: " + (checked.length ? checked.join(", ") : "-") + "\n" +
      "Details: " + (data.get("notes") || "-");
    window.open(waLink(msg), "_blank");
  });
}

// Mobile nav
var toggle = document.getElementById("navToggle");
var links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", function () { links.classList.toggle("open"); });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") links.classList.remove("open"); });
}

// Loading animation — hide once page is ready (with fallback)
function hideLoader() {
  var loader = document.getElementById("loader");
  if (loader && !loader.classList.contains("done")) {
    loader.classList.add("done");
    setTimeout(function () { loader.style.display = "none"; }, 600);
  }
}
window.addEventListener("load", function () { setTimeout(hideLoader, 400); });
setTimeout(hideLoader, 3500); // fallback in case images hang

// Scroll reveal
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); observer.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });
