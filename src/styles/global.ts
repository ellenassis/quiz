import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #fff;
		--background: #1c1c1c;
		--primary: rgba(132, 53 , 222, 1);
		--secondary: rgba(184, 84 , 232, 1);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: var(--white);
	}

	body,
	html {
		min-height: 100vh;
		height: 100%;
		font-family: 'Poppins', sans-serif;
		background: var(--background);
	}

	img {
		max-width: 100%;
	}
	
	.app { 
		text-align: center;
		padding-top: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.app h1 {
		margin-bottom: 2rem;
	}
`;
