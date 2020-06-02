import React from 'react';
import previewImage from '../../assets/Packshot_1.1.png';
import guaranteeImage from '../../assets/Money guarantee.svg';
import questionMarkImage from '../../assets/questionMark.png';
import packShot from '../../assets/Packshot_DrJeff_031120_back_1pack@2x.png';
import { ItemOption } from './itemoption';
import { OfferHeader } from './offerheader';
import styled from '@emotion/styled'

const PreviewImage = styled('div')`
margin-top: 39px;
& > div {
  & > img {
  width: 68px;
  border: 1px solid #707070;
  border-radius: 2px;
  margin-left: 14px;
  }
  & img:nth-of-type(1) {
    margin-left:67px;
  }
}`;
const ProductInfo = styled.div({
  display:'flex',
  justifyContent: 'center',
  fontFamily: 'Muli'
});
const ProductDescription = styled('div')`
  margin-top:24px;
  margin-left:28px;
  color: #111111;
  font-family: "Muli";
  & > div.productName {
    width: 188px;
    font-family: "M PLUS Rounded 1c";
    height: 56px;
    text-align: center;
    font-weight: 800;
    letter-spacing: -0.8px;
    color:#006D12;
    text-transform: uppercase;
    font-size:40px;
    line-height:56px;
  }
  & > div.productTitleText {
    height: 42px;
    font-weight: 400;
    font-size:26px;
  }
  & > div.packageSelection {
    font-weight: 700;
    font-size: 18px;
    font-size:18px;
  }
  & > div#packageOptionsMenu {
    margin-top:10px;
    border: 1px solid #CCC;
    border-radius: 4px;
  }
  & > div.priceInfo {
    height: 50px;
    display: flex;
    position:relative;
    & div {
      position: absolute;
      top:25px;
      height: 23px;
      font-size: 18px;
      color: #404040;
      font-weight: 600;
    }
    & div:nth-of-type(2) {
      width: 95px;
      text-align: right;
      right:0px;
    }
  }
  & > button.buynow {
    margin-top: 27px;
    background: #FFC914;
    border-radius: 4px;
    text-align: center;
    color: #2A6035;
    font-size: 20px;
    font-weight: 900;
    width: 100%;
    height: 54px;
    font-family: 'Muli';
  }
`

const TotalSection = styled.div({
  position: 'relative',
  display: 'flex',
  color: '#404040',
},
  props => ({
    borderTop: props.applyBorder ? '1px solid #CCCCCC' : 'none',
    justifyContent: props.doCenter ? 'center' : '',
    marginTop: props.spaceTop ? props.spaceTop : '',
  }));
const TotalTitle = styled.div({
  marginTop: '25.5px',
  height: '23px',
  fontSize: '18px',
  fontWeight: 400,
});
const TotalPrice = styled.div({
  textAlign: 'right',
  fontSize: '26px',
  height: '33px',
  position: 'absolute',
  right: '0px',
  fontWeight: 700,
  marginTop: '15.5px',
});
const MoneyBackLabel = styled.div({
  color: '#006D12',
  marginLeft: '12.06px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
});
const QuestionImage = styled.img({
  width: '11px',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-100%)',
})
const OneTimePaymentLabel = styled.div({
  marginTop: '12px',
  fontSize: '16px',
  fontWeight: 400,
});
const ShippingLabel = styled.div({
  position: 'absolute',
  right: '0px',
  top: '12px',
  fontFamily: 'Muli',
  fontSize: '16px',
  fontWeight: 400,
  color: '#111111'
});

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
      offerPrice = this.state.selectedItem.offer;
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
              <img src={packShot} alt="Additional Product Image" />
              <img src={packShot} alt="Additional Product Image" />
              <img src={packShot} alt="Additional Product Image" />
              <img src={packShot} alt="Additional Product Image" />
            </div>
          </PreviewImage>
          <ProductDescription>
            <div className="productName">{this.state.itemInfo.title}</div>
            <div className="productTitleText">{this.state.itemInfo.description}</div>
            <div className="packageSelection">Select your package:</div>
            <div id="packageOptionsMenu">
              {this.state.itemOptionsData.map(item => {
                return (
                  <ItemOption {...item} checked={item.id == this.state.selectedItem.id} key={item.id} onClick={this.handleItemSelect}></ItemOption>
                );
              })}
            </div>
            <div className="priceInfo">
              <div>Normal Price</div>
              <div><s>${this.state.itemInfo.price * this.state.selectedItem.numberOfItems}</s></div>
            </div>
            <div className="priceInfo">
              <div>Instant Savings</div>
              <div>{this.state.selectedItem.offer ? `$${this.state.selectedItem.offer}` : 'No offers'}</div>
            </div>
            <TotalSection applyBorder={true}>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalPrice>${this.getFinalPrice()}</TotalPrice>
            </TotalSection>
            <TotalSection>
              <OneTimePaymentLabel>This is a one time payment</OneTimePaymentLabel>
              <ShippingLabel>FREE SHIPPING</ShippingLabel>
            </TotalSection>
            <button className="buynow" onClick={this.handleBuyNow}>BUY NOW ></button>
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
