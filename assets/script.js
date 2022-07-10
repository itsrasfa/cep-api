const inputCep = document.querySelector('#cep')
const btn = document.querySelector('#btn')
const address = document.querySelector('#address')
const modal = document.querySelector('.modal')

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  modal.classList.remove('escondido')
  if (!isValid(cep)) {
    address.innerHTML = `<p><ion-icon style="font-size: 1.5rem;" name="warning"></ion-icon></p><p>Por favor, digite um CEP válido.</p> <p>Ex: 12345-678</p>`
    address.style = `background-color: #FFE0DE; border: 3px solid #E0B1AE; color:#6E2723;`
  } else {
    getCep(cep);
    address.style = `background-color:#49626b;`
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



