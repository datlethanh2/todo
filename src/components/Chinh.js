import React from 'react';
import styled from 'styled-components';
import anhnen from '../images/anhnen.jpg';
import Man from './Man';

const Chin= styled.div
`   background-image: url(${anhnen}); 
    width: 100%;
    height:1000px;
    background-size: 100%100%;
`;

const Header=styled.div
`   text-align:center;
    padding-top:50px;
   
    h1{
        color: green;
        font-size: 45px;
        margin-bottom: 50px;
    }
    p{
        color: blue;
        font-size:16px;      
    }
    h2{
        margin-top: 112px;
        color: green;
    }
`;

function Chinh(){

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
        <Chin>
             <Header>
                <h1>TODOLIST</h1>
                <p><i>Đừng nhìn bầu trời trong xanh mà cho rằng mọi thứ vẫn tươi đẹp.</i></p>
                <p><i>Đừng nhìn cuộc sống vẫn ổn khi bạn ngoảnh mặt làm ngơ.</i></p>
                <p><i>Chậm thôi, từ từ và hãy suy nghĩ.</i></p>
                <p><i>Thử nào trước khi bạn nói ra.</i></p> 
                <h2>{date}</h2>                             
            </Header>
            <Man />
        </Chin>
    )
}
export default Chinh;