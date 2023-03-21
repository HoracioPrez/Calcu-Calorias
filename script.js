const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');
    const activityLevel = getSelectedValue('activity_level');

    const tmb = Math.round(
        gender === 'female' ?
        (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) :
        (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );

    const maintenance = Math.round(tmb * Number(activityLevel));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const layout = `
    <h2>Este es tu resultado:</h2>
    <div class="result-content">
      <ul>
        <li>
        Su metabolismo basal es de: <strong>${tmb} calorias</strong>.
        </li>
        <li>
        Para mantener su peso necesita consumir un promedio de: <strong>${maintenance} calorias</strong>.
        </li>
        <li>
        Para perder peso necesitas consumir un promedio de: <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
        Para subir de peso necesitas consumir un promedio de: <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
  `;

    const result = document.getElementById('result');

    result.innerHTML = layout;
}

function getSelectedValue(id) {
    const select = document.getElementById(id);

    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

const btnLimpiar = document.getElementById('limpiar');
btnLimpiar.addEventListener('click', function () {
    const camposFormulario = document.querySelectorAll('input, textarea');
    camposFormulario.forEach(function (campo) {
        campo.value = '';
    });
});