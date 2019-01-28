import React, { Component } from 'react';
import BasicInput from './BasicInput/BasicInput';
import SubInput from './SubInput/SubInput';
import Button from './Buttons/AddBasicInput';

import myContext from './ContextProvider/MyProvider';
import AddBasicInput from './Buttons/AddBasicInput';



export class Layout extends Component {
    render() {
        const returnObjects = (
    
            this.props.newObj.map((newObj, ID) => (
                <div key={ID}>
                <BasicInput key={ID} ID={ID} />
                    {newObj.subItem !== null ?  'error' : <SubInput />}
                </div>
             ))
)
        return (
            <myContext.Consumer>
            {(value) => (
                <div>

                 {returnObjects}
                    
                <AddBasicInput>
                      Add Input 
                </AddBasicInput>
                </div>
            )}
            </myContext.Consumer>
        );
    }
}

const LayoutProvider = () => (
    <myContext.Consumer>
        {(value) => {
            return <Layout newObj={value.state.newObj} />
        }}
    </myContext.Consumer>
)

export default LayoutProvider;