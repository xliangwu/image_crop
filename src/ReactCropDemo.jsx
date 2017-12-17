import ReactCrop, {makeAspectCrop} from 'react-image-crop';
import React from "react";

class CropDemo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            crop: {
                x: 0,
                y: 0,
                // aspect: 16 / 9,
            },
            maxHeight: 80,
        }
    }

    onImageLoaded = (image) => {
        this.setState({
            crop: makeAspectCrop({
                x: 0,
                y: 0,
                aspect: 10 / 4,
                width: 50,
            }, image.naturalWidth / image.naturalHeight),
            image,
        });
    }

    onchange = (crop) => {
        this.setState({crop});
    }
    onCropComplete = (crop, pixelCrop) => {
        console.log('onCropComplete, pixelCrop:', pixelCrop);
    }

    render() {
        var crop = {
            x: 20,
            y: 10,
            width: 30,
            height: 10
        };

        return (
            <ReactCrop src="../dist/image/IMG_9809.JPG"
                       crop={crop}
                       onComplete={this.onCropComplete}
                       onImageLoaded={this.onImageLoaded}
                       onChange={this.onchange}/>
        );
    }
}

export default CropDemo;