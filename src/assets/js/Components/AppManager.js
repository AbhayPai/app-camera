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
        try {
            this.video = document.getElementById('video');
            this.video = document.getElementById('video');
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d') || null;
        } catch(error) {
            // Do Nothing.
        }
    }

    componentDidMount() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).
                then(
                    (stream) => {
                        this.video.srcObject = stream;
                        this.video.play();
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
        this.context.drawImage(this.video, 0, 0, 640, 480);
    }
}

/*
 *  @AppManager
 *  Only class to export from this file
 */
export default AppManager;
