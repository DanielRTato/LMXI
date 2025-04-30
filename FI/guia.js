/* ============================================================
   Función utilitaria: número aleatorio de 1 a 100
   ============================================================ */
   function numeroRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  /* ============================================================
     1. Recoger dato del <input> y saludar (independiente)
     ============================================================ */
  function recogerDatosYSALUDAR() {
    const input = document.querySelector(".input");
    const nombre = input.value.trim();
    if (nombre !== "") {
      document.getElementById("saludo").textContent = `¡Hola, ${nombre}!`;
    }
    input.value = "";               // limpiar
  }
  
  document.getElementById("btnSaludar")
          .addEventListener("click", recogerDatosYSALUDAR);
  
  /* ============================================================
     2. Mostrar número aleatorio (independiente)
     ============================================================ */
  function mostrarNumeroRandom() {
    document.getElementById("resultadoRandom").textContent = numeroRandom();
  }
  
  document.getElementById("btnRandom")
          .addEventListener("click", mostrarNumeroRandom);
  
  /* ============================================================
     3. Cambiar color de fondo (independiente)
     ============================================================ */
  function cambiarColorFondo() {
    const colores = ["#f72585", "#7209b7", "#4361ee", "#4cc9f0", "#ffba08"];
    const colorElegido = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorElegido;
  }
  
  document.getElementById("btnColor")
          .addEventListener("click", cambiarColorFondo);
  
  /* ============================================================
     4. Contador de clics mediante cierre (closure)
     ============================================================ */
  function crearContador() {
    let cuenta = 0;                         // variable privada
    return () => {
      cuenta++;
      document.getElementById("cuentaClicks").textContent = cuenta;
    };
  }
  
  const incrementarClicks = crearContador();
  
  document.getElementById("btnContador")
          .addEventListener("click", incrementarClicks);
  
  /* ============================================================
     5. Lista de la compra dinámica (independiente)
     ============================================================ */
  function anadirItem() {
    const campo = document.getElementById("item");
    const texto = campo.value.trim();
    if (texto !== "") {
      const li = document.createElement("li");
      li.textContent = texto;
      document.getElementById("lista").appendChild(li);
      campo.value = "";
    }
  }
  
  document.getElementById("btnAddItem")
          .addEventListener("click", anadirItem);
  
  /* ============================================================
     6. Reloj en vivo (independiente)
     ============================================================ */
  function iniciarReloj() {
    actualizarReloj();                      // llama una vez
    setInterval(actualizarReloj, 1000);     // actualiza cada segundo
    document.getElementById("btnIniciarReloj").disabled = true; // evita múltiples timers
  }
  
  function actualizarReloj() {
    const ahora = new Date();
    document.getElementById("reloj").textContent =
      ahora.toLocaleTimeString("es-ES");
  }
  
  document.getElementById("btnIniciarReloj")
          .addEventListener("click", iniciarReloj);
  
  /* ============================================================
     7. Reiniciar sitio tras 2 s (independiente)
     ============================================================ */
  function reiniciarSitioWeb() {
    setTimeout(() => location.reload(), 2000);
  }
  
  document.getElementById("btnReset")
          .addEventListener("click", reiniciarSitioWeb);
  /* ============================================================
   9. Calculadora rápida
   ============================================================ */
(function initCalculadora () {
  const n1 = document.getElementById("num1");
  const n2 = document.getElementById("num2");
  const op = document.getElementById("operacion");
  const out = document.getElementById("resultadoCalc");
  document.getElementById("btnCalcular").addEventListener("click", () => {
    const a = parseFloat(n1.value);
    const b = parseFloat(n2.value);
    if (isNaN(a) || isNaN(b)) { out.textContent = "Introduce números válidos"; return; }
    const res = { "+": a + b, "-": a - b, "*": a * b, "/": (b !== 0 ? a / b : "∞") }[op.value];
    out.textContent = `Resultado: ${res}`;
  });
})();
