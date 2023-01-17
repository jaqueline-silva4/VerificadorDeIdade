function verificar () {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.querySelector('div#res')
	if (fano.value.length == 0 || fano.value > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente!')
	} else {
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var gênero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')
		if (fsex[0].checked) {
			gênero = 'Homem' 
			if (idade >=0 && idade < 10) {
				// criança
				img.setAttribute('src', 'imagens/foto-bebe-m.jpg')
            } else if (idade < 21) {
            	// jovem
            	img.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade < 50) {
            	// adulto
            	img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
            	// idoso
            	img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }
		} else if (fsex[1].checked) {
			gênero = ' Mulher'
			if (idade >=0 && idade < 10) {
				// criança
				img.setAttribute('src', 'imagens/foto-bebe-f.jpg')
            } else if (idade < 21) {
            	// jovem
            	img.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade < 50) {
            	// adulto
            	img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
            	// idoso
            	img.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
		}
		res.style.textAlign = 'Center' 
		res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
		res.appendChild(img)

		}
	}
