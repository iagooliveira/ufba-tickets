import React from "react";
import * as S from './thirdSectionStyle'


export default function Containers(props){
    return (
        <S.StyledContainers>
            <p>{props.title}</p>
            <div>
             <li>{props.content}</li>
              {props.content2 ? <li>{props.content2}</li> : null}
            </div>
        </S.StyledContainers>
    )
}

