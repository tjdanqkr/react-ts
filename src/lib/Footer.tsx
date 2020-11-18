import React from 'react';
import styled from 'styled-components';

const FooterDiv =styled.div`
    background: none repeat scroll 0 0 white;
    border-top: 1px solid #e7eaec;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    position: absolute;
    right: 0;
`;


const Footer:React.FC =()=>{
    return(
      <FooterDiv>
        Copyright Swallaby © 2016-2020
      </FooterDiv>
    )
}


export default Footer;