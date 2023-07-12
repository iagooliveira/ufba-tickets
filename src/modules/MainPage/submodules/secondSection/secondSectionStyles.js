import styled from "styled-components";

export const SecondSectionDiv = styled.section `
display: flex;
flex-direction:column ;
width:100% ;
height:565px ;
background: #FAFAFA; // #FAFAFA ;
align-items:center ;
justify-content:center ;
h1 {
    font-family: 'Montserrat', sans-serif;
    color: #001f36;
    font-weight: 700;
    font-size: 30px;
    margin-top:55px;
    line-height:127% ;
    margin-bottom: 50px;
}
`

export const InsideDiv = styled.div `
width: 95% ;
height: 74%;
background:#001f36;//#EDF7FF;
border-radius: 500px;
display: flex;
flex-direction:row ;
align-items:center ;

 p {
    font-family: 'Montserrat', sans-serif;
    color: #001f36;
    font-weight: 700;
    font-size: 30px;
    line-height:127% ;
 }

`

export const Div1 = styled.div `
    display:flex ;
    align-items:center ;
    justify-content:center ;
    background: #FFFFFF;
border-right: 3px solid #C4D4FF;
border-radius: 500px 0px 0px 500px;
box-sizing: border-box;
width: 25%;
height:90%;
margin-left:20px ;
`

export const Div2 = styled.div `
display: flex;
align-items:center ;
justify-content:center ;
width:55% ;
height:50% ;
margin-left:110px ;
h2 {
    font-family: 'Montserrat', sans-serif;
    color: #FFFF;
    font-weight: 500;
    font-size: 17.5px;
    line-height:185% ;
}
`