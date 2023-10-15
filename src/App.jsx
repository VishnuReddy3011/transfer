import React, { useState } from 'react'
import "./App.css"

const App = () => {
	const tempArr = ["Apple","Banana","Orange","Grapes","Guava","Mango","Kiwi"];

	const [leftarr, setLeftarr] = useState([...tempArr]);
	const [leftChecks, setLeftChecks] = useState(
		new Array(tempArr.length).fill(false)
	);

	const [rightarr, setRightarr] = useState([]);
	const [rightChecks, setRightChecks] = useState([]);

	const handleChangeLeft = (index) => {
		const newCheckedItems = [...leftChecks];
		newCheckedItems[index] = !newCheckedItems[index];
		setLeftChecks(newCheckedItems);
	}
	const handleChangeRight = (index) => {
		const newCheckedItems = [...rightChecks];
		newCheckedItems[index] = !newCheckedItems[index];
		setRightChecks(newCheckedItems);
	}

	const moveRight = () => {
		const newLeft = leftarr.filter((item,index) => {
			return leftChecks[index] === false;
		});
		const newRight = [...rightarr];
		for(let i=0; i<leftarr.length; i++){
			if(leftChecks[i] === true){
				newRight.push(leftarr[i]);
			}
		}
		const newLeftChecks = new Array(newLeft.length).fill(false);
		const newRightChecks = new Array(newRight.length).fill(false);

		setLeftarr(newLeft);
		setRightarr(newRight);

		setLeftChecks(newLeftChecks);
		setRightChecks(newRightChecks);
	}

	const moveLeft = () => {
		const newLeft = [...leftarr];
		for(let i=0; i<rightarr.length; i++){
			if(rightChecks[i] === true){
				newLeft.push(rightarr[i]);
			}
		}
		const newRight = rightarr.filter((item,index) => {
			return rightChecks[index] === false;
		});
		const newLeftChecks = new Array(newLeft.length).fill(false);
		const newRightChecks = new Array(newRight.length).fill(false);

		setLeftarr(newLeft);
		setRightarr(newRight);

		setLeftChecks(newLeftChecks);
		setRightChecks(newRightChecks);
	}

  	return(
		<div className="container">
			<div className="left">
				<div className="box">
					<div>
						{leftarr.map((item,index)=>{
							return(						
								<div key={index}>
									<input 
										value={item} 
										type="checkbox" 
										checked = {leftChecks[index]}
										onChange={()=>handleChangeLeft(index)}
									/>
									<span>{item}</span>
								</div>
							)
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
						{rightarr.map((item,index)=>{
							return(						
								<div key={index}>
									<input 
										value={item} 
										type="checkbox" 
										checked={rightChecks[index]}
										onChange={()=>handleChangeRight(index)}
									/>
									<span>{item}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
  	)
}

export default App