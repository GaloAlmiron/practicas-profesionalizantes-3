document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al elemento select de localidades
    const localidadesSelect = document.getElementById("provincias");

    // Realizar una solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../backend/controllers/provinciasController.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          let response = JSON.parse(xhr.responseText);
          response.forEach(function(provincia) {
            const option = document.createElement("option");
            option.value = provincia;
            option.textContent = provincia;
            localidadesSelect.appendChild(option);
        });
        } else {
          console.error('Request failed:', xhr.statusText);
        }
      };
      xhr.onerror = function() {
        console.error('Request failed.');
      };
      xhr.send();

    });
