import React, { Component, createContext } from 'react';

const myContext = createContext();

export class MyProvider extends Component {
    displayName = MyProvider.name
  
    constructor(props) {
      super(props)
      
      this.state = {
        newObj: 
        [
          {
            question: '', 
            type: '', 
            subItem: ''
          }
        ],

        CreateSubInput: (subObj, id) => {
          this.addSubInput(subObj, id)
        }
      }
    }

    addInput = () => {
      this.setState({
        newObj:  [
          ...this.state.newObj,
          {
            question: '',
            type: '',
            subItem: ''
          }
        ]
      })
    }

    addSubInput = (Obj, id) => {
      let TempObj = this.state.newObj
      
      TempObj[id].subItem = Obj
      console.log(TempObj)
      this.setState({
        newObj: TempObj
      })
    }

    componentDidUpdate() {
      console.log(this.state.newObj)
    }

    render() {      
      return (
        <myContext.Provider value={{
          state: this.state,

        CreateInput: () => {
          this.addInput()
        },



        }}>
          {this.props.children}
          </myContext.Provider>
  
        )
      }
    }

    export default myContext;