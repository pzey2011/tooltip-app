import React, { Component } from 'react';
import Tooltip from './Tooltip';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <p>کالای ۱ <Tooltip text={'این کالا موجود نیست'} type='onclick'><i class="fa fa-comments" aria-hidden="true"></i>کلیک</Tooltip></p>
        <p>کالای ۲ <Tooltip text={'موجودی : ۱ عدد'} type='onclick'><i class="fa fa-comments" aria-hidden="true"></i>کلیک</Tooltip></p>
        <p>کالای ۳ <Tooltip text={'این کالا موجود نیست'} type='hover'><i class="fa fa-comments" aria-hidden="true"></i></Tooltip>هاور</p>
        <p>کالای ۴ <Tooltip text={'موجودی : ۲ عدد'} type='hover'><i class="fa fa-comments" aria-hidden="true"></i></Tooltip>هاور</p>
        <p>کالای ۵ <Tooltip text={'این کالا موجود نیست'} type='onclick'><i class="fa fa-comments" aria-hidden="true"></i></Tooltip>کلیک</p>
        <p>کالای ۶ <Tooltip text={'موجودی : ۳ عدد'} type='onclick'><i class="fa fa-comments" aria-hidden="true"></i></Tooltip>کلیک</p>
        <p>کالای ۷ <Tooltip text={'این کالا موجود نیست'} type='hover'><i class="fa fa-comments" aria-hidden="true"></i></Tooltip>هاور</p>
      </div>
    );
  }
}

export default App;
