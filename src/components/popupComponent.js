import React from 'react';
import Currency from 'react-currency-formatter';
import './popupComponent.css';

function PopupComponent(props) {
  const { data, onClose } = props;
  return (
    <div className="popupComponent">
      <div className='modal-container'>
        <div className='cross'>
          <img alt='' src='/images/delete.png' onClick={onClose}/>
        </div>
        <div className='image'><img alt="" src={data.image_url} /></div>
        <div className='name'>{data.name}</div>
        <div className='buy-product'>
          <div className='price-block'>
            <div className='price-container'>
              <div className='price'>
                <Currency
                  quantity={data.price}
                  currency={data.currency}
                  decimal="."
                  group=" "
                />
              </div>
              <div className='current-price'>
                <Currency
                  quantity={data.current_price}
                  currency={data.currency}
                  decimal="."
                  group=" "
                />
              </div>
            </div>
          </div>
          <div className='button'>
            <button className='button-text'>
              <a href={data.url}>{data.button_text}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupComponent;
