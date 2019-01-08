import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';

import '../BasicInput/Style/BasicInput.css';


class AddSubInput extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: 1,
            question: [],
            type: [],
            subItem: [],
            Obj: {condition: [], addCondition: [], question: [], type: [], subItem: []}
        }
        
    }

    componentDidMount() {
        console.log(this.state.Obj)
    }

    render() {
    const { Obj } = this.state;
    const { id } = this.props;
        return (
            <myContext.Consumer>
                {(value) => (
                <Button onClick={
                    (e) => {
                        e.preventDefault()
                        value.CreateSubInput(Obj, id)
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