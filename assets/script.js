const inputCep = document.querySelector('#cep')
const btn = document.querySelector('#btn')
const address = document.querySelector('#address')
const modal = document.querySelector('.modal')

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  modal.classList.remove('escondido')
  if (!isValid(cep)) {
    address.innerHTML = `<p style="color: red;">Por favor, digite um CEP válido.</p> <p>Ex: 12345-678</p>`
  } else {
    getCep(cep);
  }
}

function isValid(str) {
  const regex = /\d{5}-?\d{3}/
  return regex.test(str)
}

function getCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then((r) => {
    return r.json()
  }).then((body) => {
    address.innerHTML = `<p>
    <ion-icon name="stats-chart-outline"></ion-icon> Logradouro: ${body.logradouro}</p>
    <p><ion-icon name="newspaper-outline"></ion-icon> Bairro: ${body.bairro}</p>
    <p><ion-icon name="location-outline"></ion-icon> Cidade: ${body.localidade}</p>
    <p><ion-icon name="flag-outline"></ion-icon> Estado: ${body.uf}</p>`
  })
}

btn.addEventListener('click', handleClick)



