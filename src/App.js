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
  const options2 = [
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
            <div>
              <div style={{marginBottom: 3}}>Disabled</div>
              <SelectBox options={options1} onChange={(v) => {setValue1(v)}} isDisabled={true}/>
            </div>
            <div className="resultContainer">
              <div><div>SELECTED LABEL</div><span>{value1.label}</span></div>
              <div><div>SELECTED VALUE</div><span>{value1.value}</span></div>
            </div>
          </div>
          <div>
          <div>
            <div style={{marginBottom: 3, color: '#000'}}>Large</div>
              <SelectBox options={options2} onChange={(v) => {setValue2(v)}} size={'large'}/>
            </div>
            <div>
              <div style={{marginBottom: 3, color: '#000'}}>Medium</div>
              <SelectBox options={options2} onChange={(v) => {setValue2(v)}} size={'medium'}/>
            </div>
            <div>
              <div style={{marginBottom: 3, color: '#000'}}>Small</div>
              <SelectBox options={options2} onChange={(v) => {setValue2(v)}} size={'small'}/>
            </div>
            <div>
              <div style={{marginBottom: 3, color: '#000'}}>Disabled</div>
              <SelectBox options={options2} onChange={(v) => {setValue2(v)}} isDisabled={true}/>
            </div>
            <div className="resultContainer">
              <div><div>SELECTED LABEL</div><span>{value2.label}</span></div>
              <div><div>SELECTED VALUE</div><span>{value2.value}</span></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
