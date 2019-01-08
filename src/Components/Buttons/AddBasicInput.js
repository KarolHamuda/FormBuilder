import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import myContext from '../ContextProvider/MyProvider';


class AddBasicInput extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: 1,
            question: [],
            type: [],
            subItem: [],
            Obj: {question: [], type: [], subItem: []}
        }
        
    }

    componentDidMount() {
        console.log(this.state.Obj)
    }

    componentDidUpdate() {
        console.log(this.state.Obj)
    }

    render() {
    const { Obj } = this.state;
        return (
            <myContext.Consumer>
                {(value) => (
                    <div>
                <Button onClick={
                    (event) => { 
                        event.preventDefault()
                        value.CreateInput(Obj)
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