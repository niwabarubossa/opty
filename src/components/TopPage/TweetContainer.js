import React, { Component } from 'react';
import '../../assets/TweetContainer.css'
import ContentsContainer from './ContentsContainer'

class TweetContainer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="tweetContainer">
                    <div className="clearfix">
                        <ContentsContainer />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TweetContainer;
