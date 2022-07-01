const inputCep = document.querySelector('#cep')
const btn = document.querySelector('#btn')
const address = document.querySelector('#address')

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
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
    address.innerHTML = `<p>Logradouro: ${body.logradouro}</p><p>Bairro: ${body.bairro}</p><p>Cidade: ${body.localidade}</p><p>Estado: ${body.uf}</p>`
  })
}

btn.addEventListener('click', handleClick)

