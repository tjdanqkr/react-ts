import * as React from 'react';
import {BrowserRouter,Switch,Route, Redirect, HashRouter} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../lib/Footer';
import Headers from '../lib/Header';
import Login from '../components/Login';
import Main from '../components/Main';
import UserList from '../components/UserList';
import NotFound from '../lib/NotFound';

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
    @media (max-width:768px){
        padding: 20px;
    }
    @media (min-width:769px){
        padding: 40px 30px;
    }
    position: relative;
    width: 1130px;

    margin: 0 auto;
    letter-spacing: -.2px;
    /* background-color: white; */
    overflow:hidden;
    height:100%;
    
`;

const Height100 =styled.div`
    height:100%;
`;

const Root: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {/* <MainContainer> */}
      <Route path="/" exact component={()=><Login />} />
      {localStorage.getItem('id')===null?
        <Redirect to="/" />: ''}
      <Height100>
        <Headers />
        <MainContainer>
          <Switch>
            <Route path="/main" component={()=><Main />} />
            <Route path="/user" component={()=><UserList />} />
            <Route path="/*" component={()=><NotFound />} />
          </Switch>
        </MainContainer>
        <Footer />
      </Height100>     
    </Switch>
  </BrowserRouter>
)

export default Root;