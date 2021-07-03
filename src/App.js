import { useEffect, useState } from 'react';
import './App.css';

function CreateButton(props) {
	return (
		<div className={`numbtn ${props.class}`} onClick={() => props.action(props.val)}>
			{props.data}
		</div>
	)
}

function OperationButton(props) {
	return (
		<div className={`numbtn ${props.class}`} onClick={() => props.action(props.data)}>
			{props.data === '/' ? <b>&divide;</b> :
				props.data === '**' ? <b>^</b> :
					props.data === '*' ? <>x</> : props.data}
		</div>
	)
}

function App() {
	var [ans, setAns] = useState('0')
	var [finalAns, setFinalAns] = useState(0)
	var [theme, setTheme] = useState(true)
	var [brackets, setBrackets] = useState(0);

	const handleChange = (val) => {
		if (ans[0] === '0' && !isSymbol(val) && ans.length === 1) {
			if (val === '(') {
				setBrackets(prev => prev + 1)
				setAns(prev => val)
			}
			else if (val === ')') {
				// do nothing
			}
			else {
				setAns(prev => val)
			}
		}
		else if (isSymbol(ans[ans.length - 1]) && isSymbol(val)) {
			setAns(prev => ans[ans.length - 2] + val)
		}
		else {
			if (val === '(') {
				setBrackets(prev => prev + 1)
				setAns(prev => prev + val)
			}
			else if (val === ')') {
				if (brackets > 0) {
					setAns(prev => prev + val)
					setBrackets(prev => prev - 1)
				}
			}
			else {
				setAns(prev => prev + val)
			}

		}
	}

	const handleClear = () => {
		setAns("0");
		// setFinalAns(0)
	}

	const handleEvaluation = () => {
		try {
			var res = eval(ans).toString()
			setFinalAns(res);
			setAns(res)
		}
		catch (err) {
			setAns('Error')
		}
	}

	useEffect(() => {
		setTheme(true)
		handleThemeChange()
	}, [])

	const handleThemeChange = () => {
		if (theme === true) { // dark mode
			setTheme(prev => !prev)

			document.body.style.backgroundColor = 'black'
			document.body.style.color = 'white'

			// buttons
			var a = document.getElementsByClassName('numbtn')
			for (var i = 0; i < a.length; i++) {
				a[i].classList.add('numbtnDark')
				a[i].classList.remove('numbtnLight')
			}
		}
		else { // light mode
			setTheme(prev => !prev)

			document.body.style.backgroundColor = 'white'
			document.body.style.color = 'black'

			// buttons
			a = document.getElementsByClassName('numbtn')
			for (i = 0; i < a.length; i++) {
				a[i].classList.remove('numbtnDark')
				a[i].classList.add('numbtnLight')
			}
		}
	}

	const isSymbol = (s) => {
		var symbols = ['+', '-', '/', '**', '*']
		for (var i = 0; i < symbols.length; i++) {
			if (s === symbols[i]) {
				return true;
			}
		}
		return false
	}

	return (
		<div className="App">
			<h1 className='h1'>
				Calculator
			</h1>
			<div className='navbar'>
				<div>
					<label className="switch">
						<input type="checkbox" value={theme} onChange={() => handleThemeChange()} />
						<span className="slider round"></span>
					</label>
				</div>
			</div>
			<div className="calculator">
				<div className="screen">
					Ans = {finalAns}
					<br />
					{ans}
				</div>
				<div className='keypad'>
					<OperationButton action={handleChange} data='(' />
					<OperationButton action={handleChange} data=')' />
					<OperationButton action={handleChange} data='%' />
					<CreateButton data="CE" action={handleClear} />
					<br />
					<CreateButton val='7' data='7' action={handleChange} />
					<CreateButton val='8' data='8' action={handleChange} />
					<CreateButton val='9' data='9' action={handleChange} />
					<OperationButton action={handleChange} data='/' />
					<br />
					<CreateButton val='4' data='4' action={handleChange} />
					<CreateButton val='5' data='5' action={handleChange} />
					<CreateButton val='6' data='6' action={handleChange} />
					<OperationButton action={handleChange} data='*' />
					<br />
					<CreateButton val='1' data='1' action={handleChange} />
					<CreateButton val='2' data='2' action={handleChange} />
					<CreateButton val='3' data='3' action={handleChange} />
					<OperationButton action={handleChange} data='-' />
					<br />
					<OperationButton action={handleChange} data='.' />
					<CreateButton val='0' data='0' action={handleChange} />
					<OperationButton data='=' action={handleEvaluation} class="equalBtn" />
					<OperationButton action={handleChange} data='+' />
					<br />
					<OperationButton action={handleChange} data='**' />
				</div>
			</div>
			<footer>
				Copyright @2021,
				Shubham Jindal
			</footer>
		</div>
	);
}

export default App;
