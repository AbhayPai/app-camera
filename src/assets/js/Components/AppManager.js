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
        this.snapDownloadHandler = this.snapDownloadHandler.bind(this);
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
                <button onClick={this.snapHandler}>Snap Photo</button>
                <button onClick={this.snapDownloadHandler}>
                    Snap and Download
                </button>
                <video id='video' width='100%' height='auto' autoPlay />
                <canvas id='canvas' />
                <a id='download' />
            </Fragment>
        );
    }

    snapHandler() {
        let canvas = document.getElementById('canvas');
        canvas.width = document.getElementById('video').clientWidth;
        canvas.height = document.getElementById('video').clientHeight;
        let context = canvas.getContext('2d');
        context.drawImage(
            document.getElementById('video'),
            0,
            0,
            document.getElementById('video').clientWidth,
            document.getElementById('video').clientHeight
        );
    }

    snapDownloadHandler() {
        let canvas = document.getElementById('canvas');
        canvas.width = document.getElementById('video').clientWidth;
        canvas.height = document.getElementById('video').clientHeight;
        var download = document.getElementById('download');
        download.setAttribute('download', 'download.png');
        download.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        download.click();
    }
}

/*
 *  @AppManager
 *  Only class to export from this file
 */
export default AppManager;
