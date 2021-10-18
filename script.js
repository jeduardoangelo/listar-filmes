var listaFilmes = ["Yesterday", " A Chegada", " Escola de Rock"];

//var filme1 = "Yesterday"
//var filme2 = "A Chegada"
//var filme3 = "Escola de Rock"

//document.write("<p>" + filme1 + "</p>")
//document.write("<p>" + filme2 + "</p>")
//document.write("<p>" + filme3 + "</p>")

//add quarto filme
listaFilmes.push("Harry Potter");

//add quinto filme
listaFilmes.push("Vingadores");

//document.write("<p>" + listaFilmes[0] + "</p>");
//document.write("<p>" + listaFilmes[1] + "</p>");
//document.write("<p>" + listaFilmes[2] + "</p>");
//document.write("<p>" + listaFilmes[3] + "</p>");

console.log(listaFilmes.length);

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + (indice + 1) + "</p>");
  document.write("<p>" + listaFilmes[indice] + "</p>");
}