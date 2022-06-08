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

Alpine.start()


document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"

Alpine.data('getQuote', function(){
	return {
		init(){
			this.quote = fun.getRandomQuote()
		},
		quote : {}
	}
})

Alpine.data('quoteApp', Quotes)