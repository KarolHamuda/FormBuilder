import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';

import '../BasicInput/Style/BasicInput.css';

let newObj = []
class AddSubInput extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            condition: '',
            addCondition: '',
            question: '',
            type: '',
            subItem: ''
        }
        
    }

    createNewObj = (condition, addCondition, question, type, subItem) => {
        return newObj = {
            condition: condition,
            addCondition: addCondition,
            question: question,
            type: type,
            subItem
        }
    }

    componentDidMount() {
        console.log(this.state.Obj)
    }

    render() {
    const { condition, addCondition, question, type, subItem } = this.state;
    const { ID } = this.props;
        return (
            <myContext.Consumer>
                {(value) => (
                <Button className='SubInputButton' onClick={
                    (e) => {
                        newObj= this.createNewObj(condition, addCondition, question, type, subItem)
                        e.preventDefault()
                        value.state.CreateSubInput(newObj, ID)
                    }
                    }>
                Add Sub-Input 
                </Button>
                )}
            </myContext.Consumer>
        )
    }
}

export default AddSubInput;