import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { Carousel } from '@trendyol-js/react-carousel';

export default function Slideshow() {
   

     return ( 

ReactDOM.render(
	<Carousel className='slider' show={3.5} slide={2} transition={0.5}>
    <>recipe1</>
    <>recipe2</>
    <>recipe3</>
    <>recipe4</>
</Carousel>
	// document.getElementById('root'),
));
}