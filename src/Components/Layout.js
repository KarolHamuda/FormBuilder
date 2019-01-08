import React, { Component } from 'react';
import BasicInput from './BasicInput/BasicInput';
import SubInput from './SubInput/SubInput';
import Button from './Buttons/AddBasicInput';

import myContext from './ContextProvider/MyProvider';
import AddBasicInput from './Buttons/AddBasicInput';



class Layout extends Component {

    render() {
        return (
            <myContext.Consumer>
            {(value) => (
                <div>
                    {value.state.newObj.map(({ question, type, subItem }, ID) => (
                       <BasicInput id={ID} question={question} type={type} subItem={subItem} />     
                    ))}
                 
                    
                <AddBasicInput>
                      Add Input 
                </AddBasicInput>
                </div>
            )}
            </myContext.Consumer>
        );
    }
}

export default Layout;