import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import '../BasicInput/Style/BasicInput.css';



class BoolForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Condition: [],
      subCondition: [],
      currentItem: 'Yes/No',
      question: [],
      type: [],
      subInput: []
    }
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


    render() {
        return (
          <Grid className='BasicInput'>
            
            <Form>
              
                <Col componentClass={ControlLabel} xs={3} sm={2}>
                  Condition
                </Col>
                <Col sm={5} xs={4}>
                <FormControl 
                    componentClass="select"
                    bsStyle='Default'
                    title={this.state.currentItem}
                    
                  >
                  
                    <option value='1' onClick={this.setDropdownBool}>Equals</option>
                    <option value='2' onClick={this.setDropdownText}>Greater then</option>
                    <option value='3' onClick={this.setDropdownNumber}>Less then</option>
                  </FormControl>
                </Col>
                <Col sm={5} xs={5}>
                <FormControl 
                    componentClass="select"
                    bsStyle='Default'
                    title={this.state.currentItem}
                    
                  >
                  
                    <option value='1' onClick={this.setDropdownBool}>Yes</option>
                    <option value='2' onClick={this.setDropdownText}>No</option>
                    
                  </FormControl>
                </Col>

            


              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Question
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Enter new question here" />
                </Col>
              </FormGroup>
              
              <FormGroup>
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
                <Button className='AddButton'>
                  Add Sub-Input
                </Button>
                <Button className='DeleteButton'>
                  Delete
                </Button>
              </Col>
            </Form>
          
          </Grid>
        );
      }
    }
    
export default BoolForm;