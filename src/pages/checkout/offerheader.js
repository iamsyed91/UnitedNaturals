import React from 'react';
import styled from '@emotion/styled'

const OfferHeaderStyle = styled.div`
margin-top:28px;
height: 42px;
text-align: center;
font: Bold 22px/26px Muli;
letter-spacing: 0px;
color: #111111;
margin: 28px auto 0px;
`

export function OfferHeader() {
    return (
        <OfferHeaderStyle>
        Special Internet-Only Deal on Dr. Jeff Optimum
        </OfferHeaderStyle>
    );
}