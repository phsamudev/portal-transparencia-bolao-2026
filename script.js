const updatedAt = document.querySelector("#updated-at");
const notifyButton = document.querySelector("[data-notify]");
const toast = document.querySelector(".toast");

if (updatedAt) {
  updatedAt.dateTime = new Date().toISOString();
  updatedAt.textContent = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

if (notifyButton && toast) {
  let hideToast;
  notifyButton.addEventListener("click", () => {
    window.clearTimeout(hideToast);
    toast.classList.add("show");
    hideToast = window.setTimeout(() => toast.classList.remove("show"), 4200);
  });
}

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
