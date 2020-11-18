import * as React from 'react';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Headers from '../components/Header';
import Login from '../components/Login';
import Main from '../components/Main';
import SideBar from '../components/SideBar';

const Container =styled.div`
    /* @media (max-width: 640px) {
        max-width:800px;
        position:relative;
        padding:20px 30px;
        margin:0 auto;
        letter-spacing:-.2px;
    }

    @media (min-width: 768px) {
        max-width:1080px;
        position:relative;
        padding:20px 30px;
        margin:0 auto;
        letter-spacing:-.2px;
    }

    @media (min-width: 1024px) {
        max-width:1800px;
        position:relative;
        padding:20px 30px;  
        margin:0 auto;
        letter-spacing:-.2px;
    } */
    

`
const MainContainer =styled.div`
    position: relative;
    width: 1130px;
    padding: 20px 30px;
    margin: 0 auto;
    letter-spacing: -.2px;
    background-color: white;
    overflow:hidden;
    height:100%;
    
`;

const Height100 =styled.div`
    height:100%;
`;
const Root: React.FC = () => (
  <BrowserRouter basename="/react-ts">
    <Switch>
      {/* <MainContainer> */}
      <Route path="/" exact component={Login} />
      {localStorage.getItem('id')===null?
        <Redirect to="/" />: (
          <Height100>
            <Headers />
            {/* <SideBar /> */}
            
            <MainContainer>
              <Route path="main" component={Main} />
            </MainContainer>
            
          </Height100>
      )}
      <Container />
      {/* </MainContainer> */}
    </Switch>
  </BrowserRouter>
)

export default Root;