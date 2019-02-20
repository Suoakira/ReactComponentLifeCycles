import React, { Component } from 'react';

class Discussion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pageTitle: "Discussion",
            curerntTime: String(new Date())
         }
    }


    // we need to et interval like every 30 secs make an api call...
    // we need to store this in a variable, so we can provide clean up later
    // this avoids potential memmory links
    componentDidMount() {
        this.liveTime = setInterval(() =>
            this.setState({ curerntTime: String(new Date()) }), 1000)
        }
    

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    // here we make sure we stop the api calls or updates when we arnt viewing the page
    componentWillUnmount() {
        clearInterval(this.liveTime)
    }

    render() { 
        const { pageTitle, curerntTime } = this.state
        return ( 
        <div>
            <h1>{pageTitle}</h1>
            <div>
                {curerntTime}
            </div>
        </div> 
        )
    }
}
 
export default Discussion;