var carro1 = {
    modelo: "Ka",
    marca: "Ford",
    anoDeFabricacao: 2018,
    preco: 40000,
    foto: 'ka-2018.jpg',
};
var carro2 = {
    modelo: "Civic",
    marca: "Honda",
    anoDeFabricacao: 2022,
    preco: 67000,
    foto: 'civic-2022.jpg',
};
var carro3 = {
    modelo: "Gol",
    marca: "VW",
    anoDeFabricacao: 2020,
    preco: 55000,
    foto: 'gol-2020.jpg',
};
var carro4 = {
    modelo: "Corolla",
    marca: "Toyota",
    anoDeFabricacao: 2019,
    preco: 65000,
    foto: 'corolla-2019.jpg',
};
var carro5 = {
    modelo: "HB20",
    marca: "Hyundai",
    anoDeFabricacao: 2015,
    preco: 30000,
    foto: 'hb20-2015.jpg',
};
var carro6 = {
    modelo: "Fusca",
    marca: "VW",
    anoDeFabricacao: 2020,
    preco: 20000,
    foto: 'fusca-2020.jpg',
};
var carro7 = {
    modelo: "Renegade",
    marca: "Jeep",
    anoDeFabricacao: 2023,
    preco: 170000,
    foto: 'jeeeep-2023.webp',
};
var carro8 = {
    modelo: "Uno",
    marca: "Fiat",
    anoDeFabricacao: 2020,
    preco: 30000,
    foto: 'unoo-2020.webp',
};
var carro9 = {
    modelo: "Toro",
    marca: "Fiat",
    anoDeFabricacao: 2022,
    preco: 30000,
    foto: 'toro-2022.jpg',
};
var carro10 = {
    modelo: "Camaro",
    marca: "Chevrolet",
    anoDeFabricacao: 2015,
    preco: 377000,
    foto: 'camaaro-2020.jpg',
};



// aparece no HTML
// img = aparece a imagem no html
// div = dividir

/*document.write(`
<div class = "card">
    <img src = "img/${carro1.foto}"/>
    <h2 class = "modelo" >Carro: ${carro1.modelo}</h2> 
    <p class = "marca" >Marca: ${carro1.marca}</p>
    <p class = "ano" >Ano: ${carro1.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro1.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro2.foto}"/>
    <h2 class = "modelo" >Carro: ${carro2.modelo}</h2> 
    <p class = "marca" >Marca: ${carro2.marca}</p>
    <p class = "ano" >Ano: ${carro2.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro2.preco}</p>
</div>
`)
    
document.write(`
<div class = "card">
    <img src = "img/${carro3.foto}"/>
    <h2 class = "modelo" >Carro: ${carro3.modelo}</h2> 
    <p class = "marca" >Marca: ${carro3.marca}</p>
    <p class = "ano" >Ano: ${carro3.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro3.preco}</p>
</div>
`)
    
document.write(`
<div class = "card">
    <img src = "img/${carro4.foto}"/>
    <h2 class = "modelo" >Carro: ${carro4.modelo}</h2> 
    <p class = "marca" >Marca: ${carro4.marca}</p>
    <p class = "ano" >Ano: ${carro4.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro4.preco}</p>
</div>
`)

   
document.write(`
<div class = "card">
    <img src = "img/${carro5.foto}"/>
    <h2 class = "modelo" >Carro: ${carro5.modelo}</h2> 
    <p class = "marca" >Marca: ${carro5.marca}</p>
    <p class = "ano" >Ano: ${carro5.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro5.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro6.foto}"/>
    <h2 class = "modelo" >Carro: ${carro6.modelo}</h2> 
    <p class = "marca" >Marca: ${carro6.marca}</p>
    <p class = "ano" >Ano: ${carro6.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro6.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro7.foto}"/>
    <h2 class = "modelo" >Carro: ${carro7.modelo}</h2> 
    <p class = "marca" >Marca: ${carro7.marca}</p>
    <p class = "ano" >Ano: ${carro7.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro7.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro8.foto}"/>
    <h2 class = "modelo" >Carro: ${carro8.modelo}</h2> 
    <p class = "marca" >Marca: ${carro8.marca}</p>
    <p class = "ano" >Ano: ${carro8.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro8.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro9.foto}"/>
    <h2 class = "modelo" >Carro: ${carro9.modelo}</h2> 
    <p class = "marca" >Marca: ${carro9.marca}</p>
    <p class = "ano" >Ano: ${carro9.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro9.preco}</p>
</div>
`)

document.write(`
<div class = "card">
    <img src = "img/${carro10.foto}"/>
    <h2 class = "modelo" >Carro: ${carro10.modelo}</h2> 
    <p class = "marca" >Marca: ${carro10.marca}</p>
    <p class = "ano" >Ano: ${carro10.anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${carro10.preco}</p>
</div>
`)

*/

/*simplificando com o for*/
let listaDeCarros = []
listaDeCarros.push(carro1,carro2,carro3,carro4,carro5,carro6,carro7,carro8,carro9,carro10)

for (let i = 0; i < listaDeCarros.length; i++) {
    document.write(`
    <div class = "card">
    <img src = "img/${listaDeCarros[i].foto}"/>
    <h2 class = "modelo" >Carro: ${listaDeCarros[i].modelo}</h2> 
    <p class = "marca" >Marca: ${listaDeCarros[i].marca}</p>
    <p class = "ano" >Ano: ${listaDeCarros[i].anoDeFabricacao}</p>
    <p class = "preco" >Preço (ilustrativo): R$ ${listaDeCarros[i].preco}</p>
    </div>
`)
    
}