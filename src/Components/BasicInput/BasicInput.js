import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';
import './Style/BasicInput.css';
import AddSubInput from '../Buttons/AddSubInput';


class BasicInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: this.props.ID,
      question: '',
      subInput: []
    }
    this.handleQuestion = this.handleQuestion.bind(this)
  }

  setDropdownBool = () => {
    this.setState({
      currentItem: 'Yes/No'
    })
  }

  setDropdownText = () => {
    this.setState({
      currentItem: 'Text'
    })
  }

  setDropdownNumber = () => {
    this.setState({
      currentItem: 'Number'
    })
  }

  handleQuestion(event) {
    this.setState({question: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }


    render() {
      const { currentItem, question } = this.state
      const { ID } = this.props
        return (
          <myContext.Consumer>
            {(value) => (
          <Grid className='BasicInput' key={ID}>
            
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
              Question
              </Col>
              <Col sm={10}>
                
                  <FormControl type="text" placeholder="Enter new question here" onChange={this.handleQuestion} />
                
              </Col>
              </FormGroup>
              
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Type
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                      componentClass="select"
                      bsStyle='Default'
                      title={this.state.currentItem}
                      
                    >
                    
                      <option value='1' onClick={this.setDropdownBool}>Yes/No</option>
                      <option value='2' onClick={this.setDropdownText}>Text</option>
                      <option value='3' onClick={this.setDropdownNumber}>Number</option>
                    </FormControl>
                  </Col>
                </FormGroup>

                <Col xs={12} className='Buttons'>
                  <AddSubInput key={ID} ID={ID} currentItem={currentItem} question={question} />
                  <Button className='DeleteButton'>
                    Delete
                  </Button>
                </Col>
              </Form>
          
          </Grid>
          )}
          </myContext.Consumer>
        );
      }
    }
    
export default BasicInput;