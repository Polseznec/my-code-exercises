const weekdays = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi', 'Dimanche'] ;

let today = new Date();
let option = {weekday : 'long'};
let currentDay = today.toLocaleDateString('fr-FR', option)
currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);

let orderWeek = weekdays.slice(weekdays.indexOf(currentDay)).concat(weekdays.slice(0, weekdays.indexOf(currentDay)));
//console.log(currentDay);
// console.log(orderWeek, 'pute');

export default orderWeek;



