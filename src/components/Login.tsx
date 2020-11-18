import React, { useState } from 'react';


import {  Button, Col,  FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import styled from 'styled-components';


const LoginForm = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 140px 20px 20px 20px;
`;
const IboxContent = styled.div`
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
`
const LoginTitle = styled.h2`
    margin-bottom:30px;
    text-align:center;
`;


const Login:React.FC = ()=>{
    const [state,setState] = useState({
        id:'',
        pw:''
    })
    
    const onChangeHander =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name} = e.target;
        
        setState({
            ...state,
            [name]:value
        })
        
    }

    const onClickLogin = ()=>{
        localStorage.setItem("id",state.id);
        window.location.href= "react-ts/main";
    }
    return(
      <LoginForm>
        <Row>
          <Col md="12">
            <IboxContent>
              <LoginTitle>Walkon Management</LoginTitle>
              <p />
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>ID</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="id" name="id" onChange={e=> onChangeHander(e)} />
              </InputGroup>
              <p />
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>PW</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="password" name="pw" type="password" onChange={e=> onChangeHander(e)} />
              </InputGroup>
              <p />
              <Button block onClick={e=>onClickLogin()}>Login</Button>
            </IboxContent>
          </Col>
        </Row>
          
        
        
        
        
      </LoginForm>
    )
}

export default Login;