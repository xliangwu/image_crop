import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx"
import CropDemo from "./ReactCropDemo.jsx"

import 'react-image-crop/dist/ReactCrop.css';

ReactDOM.render(
    <CropDemo/>,
    document.getElementById('root')
);