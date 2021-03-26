import React from 'react'
import './App.css';
import SelectBox from './components/SelectBox'

function App() {
  const [value1, setValue1] = React.useState({label: '', value: ''})
  const [value2, setValue2] = React.useState({label: '', value: ''})

  const options1 = [
    { value: 'value1', label: 'Lorem ipsum' },
    { value: 'value2', label: 'dolor sit amet' },
    { value: 'value3', label: 'consectetur adipisicing elit' },
    { value: 'value4', label: 'sed do eiusmod tempor' },
    { value: 'value5', label: 'incididunt ut labore et' },
  ]
  const option2 = [
    { value: 'value1', label: 'Lorem ipsum' },
    { value: 'value2', label: 'dolor sit amet', disabled: true },
    { value: 'value3', label: 'consectetur adipisicing elit', disabled: true },
    { value: 'value4', label: 'sed do eiusmod tempor' },
    { value: 'value5', label: 'incididunt ut labore et' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div>
            <div>
              <div style={{marginBottom: 3}}>Large</div>
              <SelectBox options={options1} onChange={(v) => {setValue1(v)}} size={'large'}/>
            </div>
            <div>
              <div style={{marginBottom: 3}}>Medium</div>
              <SelectBox options={options1} onChange={(v) => {setValue1(v)}} size={'medium'}/>
            </div>
            <div>
              <div style={{marginBottom: 3}}>Small</div>
              <SelectBox options={options1} onChange={(v) => {setValue1(v)}} size={'small'}/>
            </div>
            <div className="resultContainer">
              <div>SELECTED LABEL : {value1.label}</div>
              <div>SELECTED VALUE : {value1.value}</div>
            </div>
          </div>
          <div>
          <div>
            <div style={{marginBottom: 3, color: '#000'}}>Large</div>
              <SelectBox options={option2} onChange={(v) => {setValue2(v)}} size={'large'}/>
            </div>
            <div>
              <div style={{marginBottom: 3, color: '#000'}}>Medium</div>
              <SelectBox options={option2} onChange={(v) => {setValue2(v)}} size={'medium'}/>
            </div>
            <div>
              <div style={{marginBottom: 3, color: '#000'}}>Small</div>
              <SelectBox options={option2} onChange={(v) => {setValue2(v)}} size={'small'}/>
            </div>
            <div className="resultContainer">
              <div>SELECTED LABEL : {value2.label}</div>
              <div>SELECTED VALUE : {value2.value}</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
