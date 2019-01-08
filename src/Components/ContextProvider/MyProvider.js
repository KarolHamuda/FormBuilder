import React, { Component, createContext } from 'react';

const myContext = createContext();

export class MyProvider extends Component {
    displayName = MyProvider.name
  
    constructor(props) {
      super(props)
      
      this.state = {
        type: [],

        id: [],
        currentItem: [],
        question: [],
        subInput: [],

        type: [],
        subCondition: [],

        newObj: [{question: [], type: [], subItem: []}]
      }
    }

    addInput = (Obj) => {
      
      console.log(Obj)
      console.log(this.state.newObj)
      this.setState({
        newObj:  [
          ...this.state.newObj,
          Obj
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

        CreateInput: (Obj) => {
          this.addInput(Obj)
        },

        CreateSubInput: (subObj, id) => {
          this.addSubInput(subObj, id)
        }

        }}>
          {this.props.children}
          </myContext.Provider>
  
        )
      }
    }

    export default myContext;