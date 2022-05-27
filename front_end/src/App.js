import './App.css';
import {List} from './components/list';
import React, {useState} from 'react';





function App() {
 
  const [Users, setUsers] = useState([]);

  const [UserName, setUserName] = useState('');
  const [UserPort, setUserPort] = useState('');
  const [UserHost, setUserHost] = useState('');

  function handleAddUser(){

      if (UserName === '' || UserPort === '' || UserHost === '') {
        alert ("Preencha os campos obrigatórios")
        return;
      }

    const newUser = {
      name: UserName,
     host: UserHost,
      port: UserPort,
        time: new Date().toLocaleTimeString("pt-br", {
        hour:'2-digit',
        minute:'2-digit',
      }) 
    }
   
    setUsers (prevState => ([...prevState, newUser]));
    
  }  



    return (
      <header className="App-header">   

      <form>

    <div id = "top"> 
    <div id = "rep">
    <h1>Report</h1>
    </div>

    
    <div id = "btta">
    <button type='reset' id = "buttona" onClick={handleAddUser}>Add new</button>
    </div>

    <div>
    <button type = "button" id = "buttonb">Export json</button>
    </div>

    </div>
    

      <fieldset id= "campo1">

    <div id = "res">
    <h2>Result</h2> 
    </div>

    <fieldset id = 'boxes1' className = "camps">
    <div id= "box1">
        <label for="name" id = "lbl">Name</label>
        <input required type="text" name="name" id="name" className = "input"
        onChange={i => setUserName (i.target.value)}></input>
    </div>

    <div id = "box2">     
        <label for="nvt" id = "lbl" >Nvt OID</label>
        <input type="text" name="nvt" id="nvt" className = "input"></input>
    </div> <br></br>

    </fieldset>

    <div id = "line2" className = "camps">
    <div>
    <label for="host">Host</label>
    <input required type="text" name="host" id="host" className = "input"
     onChange={e => setUserHost (e.target.value)}></input>
    </div>

    <div>
    <label for="port">Port</label>
    <input required type="text" name="port" id="port" className = "input1"
    onChange={a => setUserPort (a.target.value)}></input>
    </div>

    <div>
    <label for="cvss" >Cvss_base</label>
    <input type="text" name="cvss" id="cvss" className = "input1"></input>
    </div>

    <div>
    <label for="theat">Threat</label>
    <input type="text" name="theat" id="theat" className = "input1"></input>
    </div>

    <div>
    <label for="family">Family</label>
    <input type="text" name="family" id="family" className = "input"></input>
    </div>
    </div>

     <br></br>

        <div id = "textareas" className = "camps">
        <div id = "dsc">
        <label for="description">Description</label>
        <textarea name="description" id="description" className = "area"></textarea>
        </div>
        
        <div id = "sol">
        <label for="solution">Solution</label>
        <textarea name="solution" id="solution" className = "area"></textarea>
        </div>
        </div>
     <br></br>


        <div id = "buttons">
        <div id = "button1">
        <button type='reset' id = "remove" className = "btns" >Remove</button>
        </div>

        <div id = "button2">
        <button type='reset' id = "save" className = "btns" onClick={handleAddUser}>Save</button>
        </div>
        </div>

    
    </fieldset> <br></br>

    <div>

    <fieldset id = "lists">

  {
     
  }

  {Users.map (User => <List name = {User.name} port = {User.port} host = {User.host} time = {User.time} />)
  }
  
    </fieldset>

    </div>
  
    </form>

      </header>

    );

    }
 
export default App;
