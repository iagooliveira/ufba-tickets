import styled from 'styled-components'

export const MainDiv = styled.section`
display: flex;
flex-direction:row ;
justify-content: space-between ;
width:100% ;
height:500px ;
background:#FAFAFA ;

`
export const LeftDiv = styled.div `
height:100% ;
width:55% ;
display:flex ;
flex-direction: column ;
//background:#aaa ;
h1 {
    font-family: 'Montserrat', sans-serif;
    color: #001f36;
    font-weight: 700;
    font-size: 30px;
    line-height:127% ;
    margin-left:40px ;
    margin-top:55px ;
}
h2 {
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    line-height:155% ;
    margin-left:40px ;
    margin-top:55px ;
    }

`

export const Button = styled.button `
display:flex ;
align-items:center ;
justify-content: center ;
width:219.65px ;
height:49.45px ;
border-radius: 60px;
margin-left:40px ;
margin-top:55px ;
background: transparent;//#001f36 ;

:hover{
    background: #123142;
    border: none ;
    p {
        color:#FFFF ;
    }
}
p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color:#001f36 ;
    
}
`

export const RightDiv = styled.div `
display:flex ;
justify-content:flex-end ;
height:100% ;
img {
    //margin-top:2px ;
    border-top-left-radius:6%;
    border-bottom-left-radius: 6%;
    width:95% ;
    height:95% ;

}
`