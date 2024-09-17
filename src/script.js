// Función para obtener el token de la API
async function fetchAccessToken() {
    const response = await fetch('/api/token');
    const data = await response.json();
    return data.token;
}

// Función que realiza la solicitud a la API
async function query(data) {
    const token = await fetchAccessToken();
    const response = await fetch(
        "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
        {
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    
    const result = await response.json();
    return result;
}

// Función que actualiza la interfaz de usuario con los resultados
function updateResults(response) {
    let positiveScore = 0;
    let negativeScore = 0;

    // Asegurarnos de que la respuesta tenga datos
    if (response && response.length > 0) {
        const resultsArray = response[0];

        resultsArray.forEach((result) => {
            if (result.label === "POSITIVE") {
                positiveScore = result.score * 100;  // Convertimos la puntuación a porcentaje
            } else if (result.label === "NEGATIVE") {
                negativeScore = result.score * 100;  // Convertimos la puntuación a porcentaje
            }
        });
    }

    // Actualizar el texto con los porcentajes
    document.getElementById("positiveScore").textContent = positiveScore.toFixed(2) + "%";
    document.getElementById("negativeScore").textContent = negativeScore.toFixed(2) + "%";

    // Actualizar las barras de progreso
    const positiveBar = document.getElementById("positiveBar");
    const negativeBar = document.getElementById("negativeBar");

    positiveBar.style.width = positiveScore + "%";
    positiveBar.setAttribute("aria-valuenow", positiveScore);

    negativeBar.style.width = negativeScore + "%";
    negativeBar.setAttribute("aria-valuenow", negativeScore);
}

// Mostrar el spinner de carga
function showLoadingSpinner() {
    document.getElementById("loadingSpinner").classList.remove("d-none");
}

// Ocultar el spinner de carga
function hideLoadingSpinner() {
    document.getElementById("loadingSpinner").classList.add("d-none");
}

// Mostrar los resultados
function showResults() {
    document.getElementById("result").classList.remove("d-none");
}

// Función que se ejecuta al hacer clic en el botón "Analizar"
document.getElementById("analyzeButton").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;

    if (inputText.trim() === "") {
        alert("Por favor, escribe algún texto.");
        return;
    }

    // Mostrar spinner de carga
    showLoadingSpinner();

    // Ocultar los resultados anteriores
    document.getElementById("result").classList.add("d-none");

    query({ inputs: inputText }).then((response) => {
        // Ocultar spinner y mostrar resultados
        hideLoadingSpinner();
        updateResults(response);
        showResults();
    }).catch((error) => {
        console.error("Error al llamar a la API:", error);
        hideLoadingSpinner();
        alert("Ocurrió un error al analizar el texto.");
    });
});
