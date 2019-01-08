import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';
import './Style/BasicInput.css';
import AddSubInput from '../Buttons/AddSubInput';


class BasicInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: [],
      currentItem: 'Yes/No',
      question: [],
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
      const { id } = this.props
        return (
          <myContext.Consumer>
            {(value) => (
          <Grid className='BasicInput' key={id}>
            
            <Form>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
              Question
              </Col>
              <Col sm={10}>
                 
                  <FormControl type="text" placeholder="Enter new question here" />
                
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
                  <AddSubInput id={id} />
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