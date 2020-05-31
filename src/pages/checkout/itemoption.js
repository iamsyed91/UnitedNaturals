
import React from 'react';
import checkedRadio from '../../assets/Radio-on.svg';
import uncheckedRadio from '../../assets/Radio-off.svg';
import styled from '@emotion/styled'

const ItemOfferStyle = styled.div({
    position: 'absolute',
    right: '12px',
    top: '17px'
  },
    props => ({
      color: props.checked ? '#BADEBA' : '#8D8D8D'
    }));
  
  const RadioImageStyle = styled.img({
    margin: '0px 10px 0px 15px',
    '&:hover': {
      cursor: 'pointer'
    }
  })
  
const ItemOptionStyle = styled.div(
    {
        width: '472px',
        height: '50px',
        display: 'flex',
        opacity: '1',
        position: 'relative',
    },
    props => ({
        background: props.checked ? '#276133' : '#fff'
    })
)

const ItemNameStyle = styled.div(
    {
        margin: '10px 15px 33px 0px',
        width: '60px',
        height: '23px',
        'text-align': 'left',
        font: 'Bold 18px/30px Muli',
        'letter-spacing': '0px',
        color: '#2A6035',
    },
    props => ({
        color: props.checked ? '#FFFFFF' : '#2A6035'
    })
);
const ItemDescriptionStyle = styled.div({
    height: '20px',
    'margin-top': '17px',
    'text-align': 'left',
    font: 'Regular 16px/30px Muli',
    'letter-spacing': '0px',
    color: '#404040'
},
    props => ({
        color: props.checked ? '#FFFFFF' : '#404040'
    }));


export function ItemOption(props) {
    return (
        <ItemOptionStyle checked={props.checked}>
            <RadioImage {...props} />
            <ItemNameStyle checked={props.checked}>{props.name}</ItemNameStyle>
            <ItemDescriptionStyle checked={props.checked}>{props.description}</ItemDescriptionStyle>
            <ItemOfferStyle>{props.offer}</ItemOfferStyle>
        </ItemOptionStyle>
    );
}

function RadioImage(props) {
    if (props.checked)
        return <RadioImageStyle src={checkedRadio} alt="Check Radio button" value={props.id} {...props} />

    return <RadioImageStyle src={uncheckedRadio} alt="Unchecked Radio button" value={props.id} onClick={props.onClick} />
}
