import React, { Component } from 'react';
import Tooltip from './Tooltip';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <p>کالای ۱ <Tooltip text={'این کالا موجود نیست'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۲ <Tooltip text={'موجودی : ۱ عدد'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۳ <Tooltip text={'این کالا موجود نیست'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۴ <Tooltip text={'موجودی : ۲ عدد'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۵ <Tooltip text={'این کالا موجود نیست'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۶ <Tooltip text={'موجودی : ۳ عدد'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
        <p>کالای ۷ <Tooltip text={'این کالا موجود نیست'}><i class="fa fa-comments" aria-hidden="true"></i></Tooltip></p>
      </div>
    );
  }
}

export default App;
