async function conexion() {
	const data = {
    message: 'We make a research of fetch'
  }
	const endpoint = 'https://webjs.co/php/sqlite.php'
	let result = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
	})
	let resultado = await result.json()
	//console.log(resultado)
	document.querySelector('p').textContent = resultado[0].Mensaje
}

conexion()
