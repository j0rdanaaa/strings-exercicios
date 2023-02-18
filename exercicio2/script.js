//a

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


const retirarEspacos = (frase) =>{
 const novaFrase = frase.trim()

 console.log(novaFrase)
return novaFrase
}

const novaSting = retirarEspacos(minhaString)

// item A com função:

//b

console.log(minhaString.length)
console.log(novaSting.length)

//c

const substituicao = novaSting.replaceAll('________', 'sticioso')
console.log(substituicao)


