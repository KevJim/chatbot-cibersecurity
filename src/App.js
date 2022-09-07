import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import { STEPS } from './helpers/Steps';

import tiLogo from './assets/img/tiLogo.jpg';
import './assets/css/container.css';

const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#993264',
	headerFontColor: '#fff',
	headerFontSize: '20px',
	botBubbleColor: '#993264',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

function App() {
	return (
		<div className='container'>
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle='AsAD Chatbot'
					botAvatar={tiLogo}
					placeholder='Escribe tu mensaje...'
					steps={STEPS}
					style={{width: "100%", height: "100%"}}
				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
