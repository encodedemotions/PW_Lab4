import React, { Component } from 'react'

class musicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "";
        this.audio = new Audio(this.url);

    }

    toogle = () => { 
        if (this.state.play === false) {
            this.setState({ play: true, pause: false })
            this.audio.play();
        } else{
            this.setState({ play: false, pause: true })
            this.audio.pause();
        }
    }

    render() {
        return (
            <div>
                <button className="link" onClick={this.toogle}>{this.state.play ? <div>Pause</div> : <div>Play</div>}</button>
            </div>
        );
    }
}

export default musicPlayer