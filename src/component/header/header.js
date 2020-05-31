import React from 'react';

import styled from '@emotion/styled'
import logo from '../../assets/Logo DrJeff@2x.png';
import phone from '../../assets/phone icon.svg';

const Strip = styled.div`
height: 78px;
background: #046C1A 0% 0% no-repeat padding-box;
opacity: 1;
position:relative;
`
const Logo = styled.div`
margin-left:37px;
`
const ContactNumber = styled.div`
top: 31px;
left: 80%;
position: absolute;
width: 25px;
height: 25px;
opacity: 1;
`

const PhoneIcon = styled.img`
-webkit-transform: matrix(0.99,0.12,-0.12,0.99,0,0);
-ms-transform: matrix(0.99,0.12,-0.12,0.99,0,0);
transform: matrix(0.99,0.12,-0.12,0.99,0,0);
margin-right:14px;
`
const Number = styled.div`
width: 12em;
font: Bold 20px/25px Muli;
letter-spacing: 0px;
color: #D1D4BA;
opacity: 1;
display:flex;
`

function Header() {
    return (
        <Strip>
            <Logo>
                <img src={logo} alt="DrJeff Logo"/>
            </Logo>
            <ContactNumber>
                <Number>
                    <PhoneIcon src={phone} alt="Phone" />
                    <span>1-888-580-5099</span>
                </Number>
            </ContactNumber>
        </Strip>
    );
}

export default Header;
