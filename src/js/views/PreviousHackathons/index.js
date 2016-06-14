import React from 'react';

var Masonry = require('react-masonry-component');


const Tile = React.createClass({
    render: function () {
        return (
            <div>
                <div className="tile image-element-class">
                    <div className="tileTitlePicture">{this.props.title}</div>
                    <img className="image" src={ require(this.props.imageSrc) }/>
                </div>
            </div>
        );
    }
});

const masonryOptions = {
    transitionDuration: 0
};


class PreviousHackathons extends React.Component {
    render() {
        return (
            <div className="previous-hackathons content-container">
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    options={ this.masonryOptions } // default {}
                    disableImagesLoaded={false} // default false
                    >
                    <Tile imageSrc="./images/Bitmap01.jpg"/>
                    <Tile imageSrc="./images/Bitmap02.jpg"/>
                    <Tile imageSrc="./images/Bitmap03.jpg"/>
                </Masonry>

            </div>
        );
    }
}

export default PreviousHackathons;
