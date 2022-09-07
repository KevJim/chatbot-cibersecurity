import React from 'react';

import gif from '../assets/img/chatbotAnimated.gif';
import '../assets/css/BotGif.css';

const BotGif = () => {
	return (
		<div className='gif--container'>
			<img src={gif} alt='Gif Chatbot' />
		</div>
	);
};

export default BotGif;
