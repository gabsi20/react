import React from 'react';


const Person = ({name, remove, change}) => {
  return <div className="person"> 
  	<input 
  		type="text" 
  		className="person__name" 
  		value={name} 
  		onChange={change} 
  	/> 
  	<button 
	  	className="person__delete" 
	  	onClick={remove}
	>delete</button>
  </div>
}



Person.propTypes = {
  name: React.PropTypes.string
}

const List = ({entries, remove, change}) => {
  return <div>
  	<label>(to edit a user, just click the name)</label>	
    {
      entries.map(
      (entry) => 
      <Person 
	      key={entry.id} 
	      name={entry.name} 
	      remove={remove.bind(this,entry.id)}
	      change={change.bind(this,entry.id)}
      />)
    }
    </div>
}

export {List};