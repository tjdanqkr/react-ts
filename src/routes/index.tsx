import * as React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import Login from '../components/Login';

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
    overflow: hidden;
    min-width: 1190px;
`;
const Root: React.FC = () => (
  <BrowserRouter basename="/react-ts">
    <Switch>
      {/* <MainContainer> */}
      <Route path="/" exact component={Login} />
      <Container />
      {/* </MainContainer> */}
    </Switch>
  </BrowserRouter>
)

export default Root;