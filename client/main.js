import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import './style.css'
import './quote.css'
import * as fun from 'everyday-fun';

import LoveCounter from './love-counter';
import Quotes from './quotes';

 
Alpine.plugin(persist)
 
 
window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);




Alpine.data('quoteApp', Quotes)

Alpine.start()