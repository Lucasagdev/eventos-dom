document
    .querySelector("select[name='estado']")
    .addEventListener('change', function (event) {
    alert(event.target.value)
})

console.log(selectDeEstado)