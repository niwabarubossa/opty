import React, { Component } from 'react';
import 'firebase/firestore';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { submitTweet } from '../actions'
import Button from '@material-ui/core/Button';

class ContentsContainer extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.firebase_submit = this.firebase_submit.bind(this)
    }
    renderField(field){
        const { input, label, type, meta: {touched, error} } = field   
        return (
            <TextField 
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
            />
        )
    }

    async onSubmit(values){
        await this.props.submitTweet(values)
    }
    firebase_submit = (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(e)
    }

    render(){
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }
        return(
            <div className="contentsContainer" style={{marginTop: '60px'}}>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                    <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
                    <div><Field label="Body" name="sample" type="text" component={this.renderField} /></div>
                    <RaisedButton label="Submit" type="submit" style={style} />
                </form>
                {/* <form onSubmit={this.firebase_submit}>
                    <textarea id="content" onChange={this.handleChange}/>
                    <button>create</button>
                    <Button variant="contained" color="primary">Primary</Button>
                </form> */}
            </div>
        )
    }
}

const validate = values => {
    const errors = {}
    if (!values.title) errors.title = "タイトルが空です"
    if (!values.body) errors.body = "内容が空です"
    return errors
}
const mapDispatchToProps = ({ submitTweet })
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'contentsContainerForm' })(ContentsContainer)
)
// export default connect(null, mapDispatchToProps)(ContentsContainer)


