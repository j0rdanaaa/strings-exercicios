
function comidasFavoritas (nome, suaComidaFavorita1, suaComidaFavorita2, suaComidaFavorita3) => {
 const string =(`Estas são as comidas favoritas de ${nome}:
 - ${suaComidaFavorita1}
 - ${suaComidaFavorita2}
 - ${suaComidaFavorita3}`)

//const string = 'Estas são as comidas favoritas de ' + nome + ': \n 1- ' + suaComidaFavorita1 + '\n 2-' + suaComidaFavorita2 + '\n 3-' + suaComidaFavorita3 + ' . '

const nome = (prompt('Qual o seu nome?'))
const suaComidaFavorita1 = (prompt('Qual a sua comida favorita1?'))
const suaComidaFavorita2 = (prompt('Qual a sua comida favorita2?'))
const suaComidaFavorita3 = (prompt('Qual a sua comida favorita3?'))

        const mensagemDoUsuario = `Essas são as comidas favoritas de ${nome}: ${suaComidaFavorita1}, ${suaComidaFavorita2} e ${suaComidaFavorita3}`
return
}

 comidasFavoritas(nome, suaComidaFavorita1, suaComidaFavorita2, suaComidaFavorita3)