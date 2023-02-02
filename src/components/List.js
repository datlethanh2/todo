import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import edit from '../images/edit.png';
import dele from '../images/delete.jpg';
import rac from '../images/rac.png';
import vutrac from '../images/vutrac.png';
import delet from '../images/delet.png';
import dele1 from '../images/dele1.jpg';

const Hien=styled.div
`   padding-top: 10px;
    padding-bottom: 10px;
    border-radius:20%;
    text-align: center;
    opacity: 0.7;
    color: white;
    font-size: 20px;
    width:100%;
    height: 80px;
    margin-top: 1px;
`;

const Soid=styled.div
`   text-align:center;
    padding-top:15px;
`;

const Nuttruoc= styled.div
`   padding-top:9px;
    
    button{      
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;
        padding:0;
        border-radius:50%;
        img{
            width:40px;
            height:40px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
    }
`;

const Giua=styled.div
`   p{
        padding-top:15px;
    }
    input{
        width: 100%;
        height: 60px;
        border-radius:20%;
    }
`;

const Nutcuoi= styled.div
`   display: flex;
    justify-content: flex-end;
    padding-right: 7px;
    padding-top:5px;
    button{      
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;
        padding:0;
        border-radius:50%;
        margin-left: 5px;
        img{
            width:40px;
            height:40px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
    }
`;

export function List(props) {
    const guiList =(e)=>{
        props.setIntext1(e.target.value);
    }

    return (
        
        <Container>  
            <Hien style={{backgroundColor: props.com ? "green" : "gray" }}>            
                <Row>
                    <Col sm="1">
                        <Soid>
                            <p>{props.index+1}</p>
                        </Soid>
                    </Col>
                    <Col sm="1">
                        <Nuttruoc>
                            <button style={{display: props.com ? "none" : "block" }} 
                                    onClick={() => props.chuaThanh(props.index)}
                                ><img src={rac} /> 
                            </button>                                       
                            <button style={{display: props.com ? "block" : "none" }} 
                                    onClick={() => props.hoanThanh(props.index)}
                                    ><img src={vutrac} />
                            </button>     
                        </Nuttruoc>
                    </Col>
                    <Col sm="7">
                        <Giua>
                            <p style={{display: props.edit ? "none" : "block" }}>{props.text}</p> 
                            <input  value={props.intext1} 
                                    placeholder={props.text} 
                                    style={{display: props.edit  ? "block" : "none" }} 
                                    onChange={guiList}
                            />
                        </Giua>
                    </Col>
                    <Col sm="3">  
                        <Nutcuoi>
                            <button style={{display: (props.xoa) ? "block" : "none" }}
                                    onClick={() => props.xoaNut(props.index)}>
                                    <img src={delet} />
                            </button>
                            <button style={{display: (props.nhieu) ? "block" : "none" }}
                                    onClick={() => props.XoaNut1(props.index)}>
                                    <img src={dele1} />
                            </button>

                            <button style={{display: props.edit ? "none" : "block" }} 
                                    onClick={() => props.suaEdit(props.index)}
                                ><img src={edit} />
                            </button>
                            <button style={{display: props.edit ? "block" : "none" }} 
                                    onClick={() => props.suaEdit1(props.index)}>
                                <img src={edit} />
                            </button>                         
                            <button onClick={() => props.xoaDelete(props.index)}>
                                <img src={dele} />
                            </button>
                        </Nutcuoi>
                    </Col>
                </Row> 
            </Hien>                                                  
        </Container>
    );
  }
  
  export default List;