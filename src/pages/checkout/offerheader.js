import React from 'react';
import styled from '@emotion/styled';

const OfferHeaderStyle = styled.div({
    marginTop:'28px',
    height: '42px',
    textAlign: 'center',
    fontFamily: 'Muli',
    fontWeight: 700,
    fontSize: '22px',
    color: '#111111',
    margin: '28px auto 0px'
});

export function OfferHeader() {
    return (
        <OfferHeaderStyle>
        Special Internet-Only Deal on Dr. Jeff Optimum
        </OfferHeaderStyle>
    );
}