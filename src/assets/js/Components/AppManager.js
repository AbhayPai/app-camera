/*
 *  All Usable Libraries in this File
 */
import React, { Fragment } from 'react';

/*
 *  Extending React Component
 */
class AppManager extends React.Component {
    constructor(props) {
        super(props);
        this.snapHandler = this.snapHandler.bind(this);
    }

    componentDidMount() {
        let video = document.getElementById('video');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).
                then(
                    (stream) => {
                        video.srcObject = stream;
                        video.play();
                    }
                );
        }
    }

    /*
     *  @render()
     *  React Lifecyle Function
     */
    render () {
        /*
         *  @JSX Syntax to display
         */
        return (
            <Fragment>
                <h1>Take a Snap!!!</h1>
                <video id='video' width='100%' height='auto' autoPlay />
                <button onClick={this.snapHandler}>Snap Photo</button>
                <canvas id='canvas' width='100%' height='auto' />
            </Fragment>
        );
    }

    snapHandler() {
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        context.drawImage(document.getElementById('video'), 0, 0, 640, 480);
    }
}

/*
 *  @AppManager
 *  Only class to export from this file
 */
export default AppManager;
