import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #fff;
		--black: #000;
		--background: #1c1c1c;
		--primary: #255C99;
		--secondary: #6369D1;
		--green: #0bfc03;
		--red:  #6369D1;
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

	button {
		cursor: pointer;
	}
`;
