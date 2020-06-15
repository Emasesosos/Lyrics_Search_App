import { submit } from './events';
// import { change } from './events';
import './../css/componentes.css';
/* DOM */
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
/* ************************************************************ */
const events = () => {
    console.log('Event Listeners');
    submit(form, search, result, more);
    // change(search);
};
/* ************************************************************ */
const init = () => {
    console.log('Lyrics Search App');
    events();
};
/* ************************************************************ */
export {
    init
}