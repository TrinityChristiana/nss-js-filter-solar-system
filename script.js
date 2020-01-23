const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(element => {
    planetEl.innerHTML += `
        <section class="planet">
            ${element}
        </section>
    `;
});



/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets = planets.map(element => {
    console.log(element[0]); /* return (element[0].toUpperCase + element.slice(0, 4)) */
    const beg = element[0].toUpperCase();
    const ginning = element.slice(1, element.length);

    return beg + ginning;
});

console.log(capitalPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const letterE = planets.filter(element => {

    if (element.includes("e")) {
        return element;
    }
});

console.log(letterE);