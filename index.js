import { PinoResolver } from 'https://pino-sdk.vercel.app/core/pino-protocol.js';
import Pine from 'https://pino-sdk.vercel.app/core/pine.js';

let app = new Pine();
app.resolve(new PinoResolver(), startPine);
app.on('offline', showError);
// app.on('init', startPine);

function startPine() {
	let audio = document.querySelector('#audio');
	app.fetch('GET', `file.84cdc778-e9a8-430b-b04f-9c57d81a7cf1`, (data)=>{
		audio.src = data.url;
		let f = document.querySelector('.start');
		f.addEventListener('click', (e)=>{
			f.src = '/assets/audio-wave-100.png'
			audio.play();
		})
		audio.addEventListener('ended', (e)=>{
			f.src = '/assets/icons8-play-button-circled-80.png '
		})
	})
} 

function showError() {
	alert('Offline')
}
