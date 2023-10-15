import React, { useState } from 'react'
import "./App.css"


const App = () => {
	const temp = [
		{
			name: "Apple",
			isChecked: false,
			position: true
		},
		{
			name: "Banana",
			isChecked: false,
			position: true
		},
		{
			name: "Orange",
			isChecked: false,
			position: true
		},
		{
			name: "Grapes",
			isChecked: false,
			position: true
		},
		{
			name: "Guava",
			isChecked: false,
			position: true
		},
		{
			name: "Mango",
			isChecked: false,
			position: true
		},
		{
			name: "Kiwi",
			isChecked: false,
			position: true
		}
	];

	const [arr, setArr] = useState(temp);

	const moveRight = () => {
		const updatedArr = arr.map((item)=>{
			if(item.isChecked) {
				return{
					...item,
					isChecked: false,
					position: false
				}
			}
			return item;
		})
		setArr(updatedArr);
	}

	const moveLeft = () => {
		const updatedArr = arr.map((item)=>{
			if(item.isChecked) {
				return{
					...item,
					isChecked: false,
					position: true
				}
			}
			return item;
		})
		setArr(updatedArr);
	}

  	return(
		<div className="container">
			<div className="left">
				<div className="box">
					<div>
						{arr.filter((item)=>item.position===true).map((item,index)=>{
							return(						
								<div key={index}>
									<input 
										value={item.name} 
										type="checkbox" 
										// checked={item.isChecked}
                    					onChange={e => {
											item.isChecked = e.target.checked;
                    					}
									}/>
									<span>{item.name}</span>
								</div>)
						})}
					</div>
				</div>
			</div>
			<div className="middle">
				<div className="arrow" onClick={()=>moveRight()}>
					→
				</div>
				<div className="arrow" onClick={()=>moveLeft()}>
					←
				</div>
			</div>
			<div className="right">
				<div className="box">
					<div>
						{arr.filter((item)=>item.position === false).map((item,index)=>{
							return(						
								<div key={index}>
									<input 
										value={item.name} 
										type="checkbox" 
										// checked={item.isChecked}
										onChange={e => {
											item.isChecked = e.target.checked;
										}}
									/>
									<span>{item.name}</span>
								</div>)
						})}
					</div>
				</div>
			</div>
		</div>
  	)
}

export default App
