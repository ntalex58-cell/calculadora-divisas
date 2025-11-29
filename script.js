const jsonTasasDeCambio = `
{
    "base": "USD",
    "fecha": "2023-10-27",
    "tasas": {
        "MXN": 18.25,
        "EUR": 0.95,
        "COP": 4100.50,
        "JPY": 149.60
    }
}`;

const datos = JSON.parse(jsonTasasDeCambio);

const inputMonto = document.getElementById('monto');
const selectMoneda = document.getElementById('moneda');
const btnConvertir = document.getElementById('btnConvertir');
const divResultado = document.getElementById('resultado');
const textoResultado = document.getElementById('textoResultado');

btnConvertir.addEventListener('click', () => {
    const montoUsuario = parseFloat(inputMonto.value);
    const monedaSeleccionada = selectMoneda.value;

    if (isNaN(montoUsuario) || montoUsuario < 0) {
        alert("Por favor ingresa un monto válido.");
        return;
    }

    const tasaCambio = datos.tasas[monedaSeleccionada];

    const total = montoUsuario * tasaCambio;

    textoResultado.textContent = `${total.toFixed(2)} ${monedaSeleccionada}`;
    divResultado.style.display = 'block';
    
    divResultado.style.opacity = 0;
    setTimeout(() => divResultado.style.opacity = 1, 50);
});