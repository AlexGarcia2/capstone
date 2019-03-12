import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Gallery extends Component ({
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/kick.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/lostBoys.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/girlsTeam.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
})

ReactDOM.render(<Gallery />, document.querySelector('.gallery'));
