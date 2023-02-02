import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {List} from './List';
import lamlai from '../images/lamlai.jpg';
import xoa from '../images/xoa.jpg';
import nhamay from '../images/nhamay.jpg';
import anhnen2 from '../images/anhnen2.jpg';

const Mami=styled.div
`   background-image: url(${anhnen2}); 
    width: 100%;
    max-height:100%;
    background-size: 100%100%;
`;
const Nutthem=styled.div
`   display: flex;
    justify-content: center;
    border-radius:20%;
    background-color: #a9a9a9a3;
    opacity: 0.7;
    color: white;
    padding-top:10px;
    padding-bottom:10px;
    margin-top: 30px;
    margin-bottom: 30px;
    
    input{
        height: 50px;
        width: 300px;
        border-radius:20%;
        border-color: green;
    }
    button{
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;     
        border-radius:50%;
        margin-left: 5px;
        margin-right: 5px;
        img{
            width:35px;
            height:35px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
}
`;
const Menuu=styled.ul
`  
`;

function Man() {

    const [intext1, setIntext1] = useState("");
    const [intext, setIntext] = useState("");
    const [innews, setInnews] = useState(() =>{
        const storageInnews=JSON.parse(localStorage.getItem('innews'));
        if(storageInnews){
            return  storageInnews;
        }else{
            return [];
        }
    });
    const inthem= {
        text:"",
        com: false,
        edit: false,
        xoa: false,
        nhieu: false,
    };     
    const [inan1, setInan1] = useState(()=>{
        const storageInan1=JSON.parse(localStorage.getItem('inan1'));
        return  storageInan1;
    });
    const [inan2, setInan2] = useState(false);
    
    const nhanList =(a)=>{
        setIntext1(a);
    }
    const themMoi = () =>{
        
        if(!intext || (inan1===true) ){
            alert("Bạn làm không đúng cách, hãy xem lại!");
        }
        else{
            inthem.text=intext;         
            setInnews(prev => {
                const newInnews=[...innews, inthem];
                const jsonInnews=JSON.stringify(newInnews);
                localStorage.setItem('innews', jsonInnews);
                return newInnews;
            });
            setIntext("");
            alert("Thêm một hành động nhỏ cho cuộc sống thêm xanh");    
           
        }
    }
    const xoaTat = () =>{
        const innews1=[];
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Xóa đi để bắt đầu kế hoạch ngày mới nào!");    
    }
    const xoaNhieu = () =>{
        const innews1= innews.map((inthem,index) => {                                  
            return {...inthem, xoa: true};                            
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        setInan2(true);
        setInan1(true);
        const jsonInan=JSON.stringify(true);
        localStorage.setItem('inan1', jsonInan);
        alert("Nhiều quá, bạn nhớ phân loại trước khi vứt nha!");
    }
    const xoaNhieu1 = () =>{ 
        const newList1 = innews.filter((inthem) => (inthem.nhieu !== true));
        const innews1= newList1.map((inthem,index) => {                                  
            return {...inthem, xoa: false};                            
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        setInan2(false);
        setInan1(false);  
        const jsonInan=JSON.stringify(false);
        localStorage.setItem('inan1', jsonInan);      
        alert("Ok rồi, nhà máy xử lý nhanh thôi!");
    }
    const xoaNut = (indexidd) =>{
        const innews1=  innews.map((inthem,index) => {
            if(index === indexidd){
                return {...inthem, xoa: false, nhieu: true};                   
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Rác không tái chế được nên từ bỏ thôi!");
    }
    const xoaNut1 = (indexidd) =>{
        const innews1=innews.map((inthem,index) => {
            if(index === indexidd){
                return {...inthem, xoa: true, nhieu: false};                   
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Khoan đã, cái này còn tái chế được!");
    }
    const xoaDelete = (indexid) =>{
        const newList = innews.filter((innews,index) => (index !== indexid));
        setInnews(newList);
        alert("Thật tiếc phải vứt bỏ bạn!");
        const jsonInnews=JSON.stringify(newList);
        localStorage.setItem('innews', jsonInnews);
    }
    const suaEdit = (indexidd) =>{
        const innews1=innews.map((inthem,index) => {
            if(index === indexidd){
                return {...inthem, edit: true};                   
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Cái này còn dùng được mà, để thử chút không nên lãng phí!");
    }
    const suaEdit1 = (indexidd) =>{
        const innews1= innews.map((inthem,index) => {
            if(index === indexidd){                    
                return {...inthem, text: intext1, edit: false};                  
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Tái chế đã thành công!");
    }
    const chuaThanh =(indexii)=>{       
        const innews1=  innews.map((inthem,index) => {
            if(index === indexii){
                return {...inthem, com: true};
                
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        alert("Thành công, hãy tiếp tục nào!");
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        
    };
    const hoanThanh =(indexii)=>{
        const innews1= innews.map((inthem,index) => {
            if(index === indexii){
                return {...inthem, com: false};
                
            } else{
                return inthem;
            }
        })
        setInnews(innews1);
        const jsonInnews=JSON.stringify(innews1);
        localStorage.setItem('innews', jsonInnews);
        alert("Thật tiếc, mong đợi vậy mà!");
    };

    return (   
        <Mami> 
            <Container>  
                <Row>
                    <Col md="3" sm="0"></Col>
                    <Col md="6" sm="12">
                        <Nutthem>
                            <button onClick={xoaTat}>
                                <img src={xoa} />
                            </button>
                            <input value={intext} onChange={e => setIntext(e.target.value)}/>
                            <button onClick={themMoi}>
                                <img src={lamlai} />
                            </button> 
                            <button onClick={xoaNhieu} style={{display: (inan2 ) ? "none" : "block" }}>
                                <img src={nhamay} />
                            </button> 
                            <button onClick={xoaNhieu1} style={{display: inan2 ? "block" : "none" }}>
                                <img src={nhamay} />
                            </button> 
                        </Nutthem> 
                    </Col>
                    <Col md="3" sm="0"></Col>
                </Row>
                <Row>
                    <Col md="2" sm="0"></Col>
                    <Col md="8" sm="12">
                        <Menuu type="none">
                            {innews.map((inthem, index) => {
                                return(
                                    <li key={index}>
                                        <List 
                                            index={index}
                                            text={inthem.text}
                                            edit={inthem.edit}
                                            com={inthem.com}
                                            xoa={inthem.xoa}
                                            nhieu={inthem.nhieu}
                                            setIntext1={nhanList}                                  
                                            xoaDelete={ xoaDelete}
                                            suaEdit={suaEdit}
                                            suaEdit1={suaEdit1}
                                            chuaThanh={chuaThanh}
                                            hoanThanh={hoanThanh}
                                            xoaNut={xoaNut}
                                            xoaNut1={xoaNut1}
                                        />
                                    </li>
                                )
                            })}                       
                        </Menuu>
                    </Col>
                    <Col md="2" sm="0"></Col>             
                </Row>
            </Container>
        </Mami>      
    );
  } 
export default Man;