import './sass/styles.scss';
import { refs } from './js/refs';

const DEBOUNCE_DELAY = 300;

const { searchBoxEl, counrtyListEl, counrtyInfoEl } = refs;

const onKeyDown = ()=>{console.log('!!!');}

searchBoxEl.addEventListener('keyDown',onKeyDown)
