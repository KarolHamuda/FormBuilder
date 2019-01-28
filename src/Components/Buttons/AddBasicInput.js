import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';


class AddBasicInput extends Component {
    render() {
        return (
            <myContext.Consumer>
                {(value) => (
                    <div>
                <Button className='BasicInputButton' onClick={
                    (event) => { 
                        event.preventDefault()
                        value.CreateInput()
                    }
                    }>
                Add Input asdsad
                </Button>
                </div>
                )}
            </myContext.Consumer>
        )
    }
}

export default AddBasicInput;