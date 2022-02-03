import React, {useEffect, useState} from "react";
import {Navbar,Nav,NavDropdown,Container, Button, Spinner } from 'react-bootstrap';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';

import { CSSTransition } from "react-transition-group";
import {재고context} from './App.js'

let 박스 = styled.div`
    padding : 30px;
`;
    
let 제목 = styled.h4`
    font-size : 25px; 
    color : ${ props => props.색상 }
    `;

function Detail(props) {
    // my-alert 2초후 사라지게하기
    // 1. id 부여하고 display = none 
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.getElementById("alert1").style.display = "none"
    //     }, 2000)
    // })

    // 2. state 변수 만들어서 삼항연산자로 
    let [alert, c_alert] = useState(true);

    let [tab, c_tab] = useState(0);
    let [스위치, 스위치변경] = useState(false);


    useEffect(() => {
        let Timer = setTimeout(() => {c_alert(false);}, 2000)
        return () => { clearTimeout(Timer)}
    }, [alert]);
    // 마지막 [alert] 는 alert가 업데이트 될때만 실행해주세요 라는 뜻 [alert, inputdata, ---] 여러가지 쓸 수 있음
    // [] 만 쓰면 페이지 로드될 때만 실행됨
    // setTimeout 썼을때 버그 대비로 return () => { clearTimeout(---)} 써주는게좋음
    let [inputdata, c_inputdata] = useState('');
    
    let history = useHistory();
    let { id } = useParams();
    let 찾은상품 = props.shoes.find(x=> x.id == id);

    return(
        <div className="container">
            <박스>
                <제목 색상='red'>Detail</제목>
            </박스>
            
            <input onChange={(e) => c_inputdata(e.target.value)} />
            {
                alert === true
                ? (<div id="alert1" className="my-alert">
                    <p>재고없음</p>
                  </div>)
                : null
            }
            {inputdata}
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{history.push("/");}}>뒤로가기</button>
                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); c_tab(0)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); c_tab(1)}}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent tab={tab} 스위치변경={스위치변경}/>
            </CSSTransition>
        </div> 
    )
}

function TabContent (props) {
    useEffect(()=> {
        props.스위치변경(true);
    });

    if (props.tab === 0) {
        return <div>0번째 입니다.</div>
    } else if (props.tab === 1) {
        return <div>1번째 입니다.</div>
    }
}

export default Detail;