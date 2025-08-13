// const menu = document.querySelector("#menu");
// const nav = document.querySelector(".links");

// menu.oncick = () => {
//   menu.classList.toggle('bx-x');
//   nav.classList.toggle('active');
// }
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    // Toggle menu icon class
    if (menu.classList.contains("bx-menu")) {
        menu.classList.remove("bx-menu");
        menu.classList.add("bx-x");
    } else {
        menu.classList.remove("bx-x");
        menu.classList.add("bx-menu");
    }
    nav.classList.toggle("active");
};
document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault(); // Prevent normal form submit
  const form = e.target;
  const status = document.getElementById("form-status");
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "✅ Your message has been sent successfully and Thank you for Contact Me.";
      status.style.color = "lightgreen";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! There was a problem sending your message.";
      status.style.color = "red";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try again later.";
    status.style.color = "red";
  }
});


