import React, { Component } from 'react';
import classes from '../../assets/mainPage/ContentsHeader.css'

class ContentsHeader extends Component {
    render(){
        return(
            <div className={classes.contentsHeader}>
                {this.props.headerName}
            </div>
        )
    }
}

export default ContentsHeader;