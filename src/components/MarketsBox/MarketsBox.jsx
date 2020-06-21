import React from 'react';
const MarketsBox = (props) => {
  const marketsStrings = ['S&P 500', 'Nasdaq', 'Russell 2K', 'Dow']
  return (<div className='markets-box'>
    <h1>Markets</h1>
    {marketsStrings.map(e =>
      <div>{e}</div>
    )}

  </div>);
}

export default MarketsBox;