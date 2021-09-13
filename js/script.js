// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

// FUNZIONI
// argomenti: array delle icone e il node html in cui stamare le icone
const printIcons = (arr, container) => {
    // crea un ciclo for each ed inserisci nell'html utilizzando in template literal
    // Utilizzando la destrutturazione
    arr.forEach((element)=>{
        const {name, family, prefix, color} = element;
        container.innerHTML += `
        <div class="icone">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div>${name}</div>    
        </div>
        `
    });
}

// PROGRAMMA PRINCIPALE

// prendi l'elemento dall'html utilizzando una variabile
const tessere = document.getElementById("tessera");


// Milestone 2
// Coloriamo le icone per tipo

// Assegnare una variabile con oggetto la categoria e il colore

const coloriIcone = {
    food: 'red',
    beverage: 'blue',
    animal: 'green'
}
console.log(coloriIcone);

// Assegna una variabile e utilizza map

const colors = icons.map((element) => {
    console.log(element.category);
    
        return {
            ...element,
            color: coloriIcone[element.category]
        };
});
console.log(colors);

printIcons(colors, tessere);























// const colori = {
//     food: 'red',
//     animal:'green',
//     beverage: 'yellow'
// }

// Assegna una variabile e utilizza map

// const coloreIcone = icons.map(
//     (elm) => {
//         elm.color = colori[elm.category];
//         return elm;
//     }
// );
// console.log(coloreIcone);











// // estrapolo le categoria dalle icone
// const categoria = [];
// icons.forEach(
//     (elm) => {
//         if (categoria.includes(elm.category) == false){
//             categoria.push(elm.category);
//         }
//     }
// );
// console.log(categoria);

// // creo option per ogni categoria
// const select = document.getElementById("category");

// categoria.forEach(
//     (elm) => {
//         select.innerHTML += `<option value="${elm}">${elm}</option>`;
//     }
// );

// Creo evento change sulla select
// select.addEventListener("change",
//     function(){
//         // Recupero il valore della select
//         const iconsFiltered = coloreIcone.filter(
//             (elm) => {
//                 if (elm.category == select.value || select.value == "") {
//                     return true;
//                 }
//                 return false;
//             } 
//         );
//         printIcons(iconsFiltered, containerIcons);
//     }
// );








// Alternativa abbreviata 

// const icona = document.getElementById("tessera");

// const tessere = icons.forEach((element) =>{
//     const {family, prefix, name, color} = element;
//     icona.innerHTML += `
//     <div class="icone">
//     <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
//     <div>${name}</div>    
//     </div>  `
// })




