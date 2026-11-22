const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });

const formularioInteres = document.getElementById("formulario-interes");

if (formularioInteres) {
  formularioInteres.addEventListener("submit", function(event) {
    event.preventDefault();

    const visitante = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      interes: document.getElementById("interes-producto").value,
      motivo: document.getElementById("motivo").value
    };

    let registros = JSON.parse(
      localStorage.getItem("interesRaizWeb") || "[]"
    );

    registros.push(visitante);

    localStorage.setItem(
      "interesRaizWeb",
      JSON.stringify(registros)
    );

    document.getElementById("mensaje").textContent =
      "¡Gracias por tu interés en RaízWeb!";

    formularioInteres.reset();
  });
}
});
