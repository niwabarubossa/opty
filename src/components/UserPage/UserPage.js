import React, { Component } from 'react';
import { getDisplayUserInformation } from '../../actions'
import { connect } from 'react-redux'
import UserPageChild from './UserPageChild'
class UserPage extends Component {

    componentDidMount(){
        this.props.getDisplayUserInformation(this.props.match.params.id)
    }

    render(){
        return(
            <div style={{color: 'black'}}>
            <h3>aaaaaaaaaaaaaa</h3>
                <h3>{this.props.match.params.id}</h3>
                <UserPageChild props={this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {    
  return { 
    display_user: state.firebase.display_user
  }
}

const mapDispatchToProps = ({ getDisplayUserInformation })

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)