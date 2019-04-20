import React, { Component } from 'react';
import classes from  '../../assets/mainPage/MainContainer.css'
import ContentCardContainer from './ContentCardContainer'
import { connect } from 'react-redux'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'
import RightContainer from './RightContainer'
import {Grid} from "@material-ui/core"
import ContentsHeader from './ContentsHeader'

class MainContainer extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
    componentDidMount(){
        this.props.getPosts()
    }
    render(){
        return(
            <div className="mainContainer">
                <Grid container spacing={16} >
                    <Grid item xs={12} md={8}>
                        <div className={classes.contentCardContainer}>
                            <ContentsHeader headerName={'タイムライン'} />
                            <ContentCardContainer />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContentsHeader headerName={'記録'} />
                        <RightContainer />
                        <ContentsHeader headerName={'トレンド'} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
