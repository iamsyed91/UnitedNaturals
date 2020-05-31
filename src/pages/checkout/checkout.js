import React from 'react';
import previewImage from '../../assets/Packshot_1.1.png';
import guaranteeImage from '../../assets/Money guarantee.svg';
import questionMarkImage from '../../assets/questionMark.png';
import packShot from '../../assets/Packshot_DrJeff_031120_back_1pack@2x.png';
import { ItemOption } from './itemoption';
import { OfferHeader } from './offerheader';
import styled from '@emotion/styled'

const PreviewImage = styled.div`
margin-top: 39px;
`
const ProductInfo = styled.div`
display:flex;
justify-content: center;
`
const ProductDescription = styled.div`
margin-top:24px;
margin-left:28px;
`
const ProductName = styled.div`
width: 188px;
height: 56px;
text-align: center;
font: ExtraBold 40px/45px Rounded Mplus 1c;
letter-spacing: -0.8px;
color: #006D12;
text-transform: uppercase;
opacity: 1;
font-size:40px;
line-height:56px;
`
const ProductTitleText = styled.div`
height: 42px;
font: Regular 26px/26px Muli;
color: #111111;
font-size:26px;
`
const PackageSelection = styled.div`
font: Bold 18px/26px Muli;
color: #111111;
`
const PackageOptions = styled.div`
margin-top:10px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #CCCCCC;
border-radius: 4px;
`
const TotalSection = styled.div({
  position: 'relative',
  display: 'flex'
},
  props => ({
    borderTop: props.applyBorder ? '1px solid #CCCCCC' : 'none',
    justifyContent: props.doCenter ? 'center' : '',
    marginTop: props.spaceTop ? props.spaceTop : '',
  }));
const PriceInfo = styled.div`
height: 50px;
display: flex;
position:relative;
`;
const PriceInfoText = styled.div`
position:absolute;
top:25px;
height: 23px;
font: Regular 18px/30px Muli SemiBold;
color: #404040;
`;
const PriceInfoNumber = styled.div`
position:absolute;
top:25px;
width: 95px;
height: 23px;
text-align: right;
font: Regular 18px/30px Muli SemiBold;
color: #404040;
right:0px;
`;
const BuyNowButton = styled.button({
  marginTop: '27px',
  background: '#FFC914',
  borderRadius: '4px',
  textAlign: 'center',
  color: '#2A6035',
  fontFamily: 'Muli',
  fontSize: '20px',
  fontWeight: '900',
  width: '100%',
  height: '54px'
});
const TotalTitle = styled.div({
  marginTop: '25.5px',
  height: '23px',
  font: 'Regular 18px/30px Muli SemiBold',
  color: '#404040',
  opacity: '1',
});
const TotalPrice = styled.div({
  textAlign: 'right',
  height: '33px',
  position: 'absolute',
  right: '0px',
  font: 'Bold 26px/36px Muli',
  marginTop: '15.5px',
  height: '23px',
  color: '#404040',
  opacity: '1',
});

const MoneyBackLabel = styled.div({
  color: '#006D12',
  marginLeft: '12.06px',
  fontFamily: 'Muli',
  fontWeight: 600,
});
const QuestionImage = styled.img({
  width: '11px',
})
const OneTimePaymentLabel = styled.div({
  marginTop: '12px',
  font: 'Regular 16px/30px Muli',
  color: '#404040'
});
const ShippingLabel = styled.div({
  position: 'absolute',
  right: '0px',
  top: '12px',
  font: 'Regular 16px/24px Muli',
  color: '#111111'
});
const AdditionalImages = styled.img({
  width: '68px',
  border: '1px solid #707070',
  borderRadius: '2px',
},
  props => ({
    marginLeft: props.isFirst ? '67px' : '14px',
  }));

class Checkout extends React.Component {
  state = {
  }
  componentDidMount() {
    fetch('http://localhost:3000/item').then(res => res.json())
      .then(response => {
        this.setState(() => {
          return {
            ...response,
            selectedItem: response.itemOptionsData.filter(item => item.isPreferred)[0]
          }
        })
      }).catch(err => {
        console.log(err);
      })
  }
  handleBuyNow = () => {
    alert('Order is placed');
  }
  handleItemSelect = () => {
    const selectedId = parseInt(event.target.getAttribute('value'), 10);
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedItem: this.state.itemOptionsData.filter(item => item.id === selectedId)[0],
      }
    })
  }
  getFinalPrice() {
    let offerPrice = 0;
    if (this.state && this.state.selectedItem && this.state.selectedItem.offer) {
      offerPrice = this.state.selectedItem.offer.split('$')[1];
    }
    return ((this.state.itemInfo.price * this.state.selectedItem.numberOfItems) - offerPrice).toFixed(2);
  }
  render() {
    return (
      <>
        <OfferHeader></OfferHeader>
        {this.state.itemInfo && <ProductInfo>
          <PreviewImage>
            <img src={previewImage} alt="Preview Image" />
            <div>
              <AdditionalImages src={packShot} alt="Additional Product Image" isFirst={true} />
              <AdditionalImages src={packShot} alt="Additional Product Image" />
              <AdditionalImages src={packShot} alt="Additional Product Image" />
              <AdditionalImages src={packShot} alt="Additional Product Image" />
            </div>
          </PreviewImage>
          <ProductDescription>
            <ProductName>{this.state.itemInfo.title}</ProductName>
            <ProductTitleText>{this.state.itemInfo.description}</ProductTitleText>
            <PackageSelection>Select your package:</PackageSelection>
            <PackageOptions id="packageOptionsMenu">
              {this.state.itemOptionsData.map(item => {
                return (
                  <ItemOption {...item} checked={item.id == this.state.selectedItem.id} key={item.id} onClick={this.handleItemSelect}></ItemOption>
                );
              })}
            </PackageOptions>
            <PriceInfo>
              <PriceInfoText>Normal Price</PriceInfoText>
              <PriceInfoNumber><s>${this.state.itemInfo.price * this.state.selectedItem.numberOfItems}</s></PriceInfoNumber>
            </PriceInfo>
            <PriceInfo>
              <PriceInfoText>Instant Savings</PriceInfoText>
              <PriceInfoNumber>{this.state.selectedItem.offer ? this.state.selectedItem.offer : 'No offers'}</PriceInfoNumber>
            </PriceInfo>
            <TotalSection applyBorder={true}>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalPrice>${this.getFinalPrice()}</TotalPrice>
            </TotalSection>
            <TotalSection>
              <OneTimePaymentLabel>This is a one time payment</OneTimePaymentLabel>
              <ShippingLabel>FREE SHIPPING</ShippingLabel>
            </TotalSection>
            <BuyNowButton onClick={this.handleBuyNow}> BUY NOW ></BuyNowButton>
            <TotalSection doCenter={true} spaceTop='24px'>
              <div><img src={guaranteeImage} alt="Gaurantee Checkmark" /></div>
              <MoneyBackLabel>100% Money Back Guarantee</MoneyBackLabel>
              <div><QuestionImage src={questionMarkImage} alt="Gaurantee Checkmark" /></div>
            </TotalSection>
          </ProductDescription>
        </ProductInfo>}
      </>
    );
  }
}
export default Checkout;
