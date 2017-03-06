import React from 'react';


const Input = ({onChange, value}) => {
  return <input type="text" value={value} onChange={onChange}/>
};


const Button = ({onClick}) => {
  return <button className="person__add" onClick={onClick}>+</button>
}

const Prompt = ({filterChange, inputChange, buttonClick, value, filter}) => {
	return <div className="prompt">
	<label>- Add New User -</label>
		<Input onChange={inputChange} value={value}/><Button onClick={buttonClick} />
		<label>- Filter Users -</label>
		<Input onChange={filterChange} value={filter} />
	</div>
}

export {Prompt};