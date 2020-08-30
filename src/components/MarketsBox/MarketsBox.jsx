import React from 'react';
import './MarketsBox.css'

const MarketsBox = (props) => {
  console.log(props)
  return (<div className='markets-box'> <h1>Markets</h1> 123
    {
      props.etfArray ?
        // props.etfArray.forEach(e =>
        <div className='testbox'> {props.etfArray ? console.log(props.etfArray) : console.log('string')}
      MMMMMMM</div> // )
        : <h1>WEWE</h1>
    }

  </div>);
}

export default MarketsBox;

