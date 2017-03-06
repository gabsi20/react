import React from 'react';
import {Prompt} from './prompt.js';
import {List} from './list.js';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [{
      	id: 1,
      	name: 'Alexander Gabriel'
      },{
      	id: 2,
      	name: 'Sebastian Huber'
      },{
      	id: 3,
      	name: 'Daniel Trojer'
      }],
      currentValue: '',
      currentFilter: ''
    }
  }

  updateCurrentValue = (e) => {
    this.setState({
      currentValue: e.target.value
    })
  }

  addUserToList = () => {
		this.setState({
      entries: [...this.state.entries, {id: Date.now(), name: this.state.currentValue}],
      currentValue: ''
    })
  }

  removeUserFromList = (id) => {
  	this.setState({
  		entries: this.state.entries.filter((entry) => entry.id !== id)
  	})
  }

  changeUser = (id, e) => {
  	this.setState({
  		entries: this.state.entries.map( x => x.id === id ? {id: x.id, name: e.target.value} : x)
  	})
  }

  filtered = () => {
    let filter = this.state.currentFilter;
    return filter ? this.state.entries.filter( x => x.name.toLowerCase().includes(filter.toLowerCase())) : this.state.entries;
  }
  
  filter = (e) => {
    this.setState({
      currentFilter: e.target.value
    })
  }  

  render() {
    return <div>
    	<Prompt 
        filterChange={this.filter} 
        filter={this.state.currentFilter}
        inputChange={this.updateCurrentValue}
        value={this.state.currentValue}
        buttonClick={this.addUserToList} 
      />
      <List 
        entries={this.filtered()} 
        remove={this.removeUserFromList} 
        change={this.changeUser} 
      />
    </div>
  }
}







