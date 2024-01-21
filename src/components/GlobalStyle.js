import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  height: 100%;
  width: 100%;
  background-color:#FFFFFF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
 
ul li{
    list-style: none;
    margin: 0;
    padding: 0;

}

img{
    display: block;
    max-width: 100%;
    object-fit: cover;
}

a{
 text-decoration: none;
 :hover{
  color: rgb(0, 250, 225);

  :visited{
    text-decoration: none;}
 }

 *,*:before,*:after{
	-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

*{
padding: 0;
	margin: 0;
	border: 0;
 }
 
 :focus,:active{outline: none;}
 
 a:focus,a:active{outline: none;}
 
 nav,footer,header,aside{display: block;}

 input,button,textarea{font-family:inherit;}
 
 h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400; margin: 0};
 p{ margin: 0}
}
`;
