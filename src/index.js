import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';


window.addEventListener("bob", function() {
	console.log("pre-reactdom");
	ReactDOM.render(
		<App/>,
		document.getElementById('root')
	);
	console.log("post-reactdom");
});
		


