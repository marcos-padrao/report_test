import logo from './logo.svg';
import './App.css';

function App() {

    return (
      <header className="App-header">   

     <form>

    <div id = "top"> 
    <div id = "rep">
    <h1>Report</h1>
    </div>

    
    <div id = "btta">
    <button id = "buttona">Add new</button>
    </div>

    <div>
    <button id = "buttonb">Export json</button>
    </div>

    </div>
    

      <fieldset id= "campo1">

    <div id = "res">
    <h2>Result</h2> 
    </div>

    <fieldset id = 'boxes1' class = "camps">
    <div id= "box1">
        <label for="name" id = "lbl">Name</label>
        <input type="text" name="name" id="name" class = "input"></input>
    </div>

    <div id = "box2">     
        <label for="nvt" id = "lbl" >Nvt OID</label>
        <input type="text" name="nvt" id="nvt" class = "input"></input>
    </div> <br></br>

    </fieldset>

    <div id = "line2" class = "camps">
    <div>
    <label for="host">Host</label>
    <input type="text" name="host" id="host" class = "input"></input>
    </div>

    <div>
    <label for="port">Port</label>
    <input type="text" name="port" id="port" class = "input1"></input>
    </div>

    <div>
    <label for="cvss" >Cvss_base</label>
    <input type="text" name="cvss" id="cvss" class = "input1"></input>
    </div>

    <div>
    <label for="theat">Threat</label>
    <input type="text" name="theat" id="theat" class = "input1"></input>
    </div>

    <div>
    <label for="family">Family</label>
    <input type="text" name="family" id="family" class = "input"></input>
    </div>
    </div>

     <br></br>

        <div id = "textareas" class = "camps">
        <div id = "dsc">
        <label for="description">Description</label>
        <textarea name="description" id="description" class = "area"></textarea>
        </div>
        
        <div id = "sol">
        <label for="solution">Solution</label>
        <textarea name="solution" id="solution" class = "area"></textarea>
        </div>
        </div>
     <br></br>


        <div id = "buttons">
        <div id = "button1">
        <button id = "remove" class = "btns">Remove</button>
        </div>

        <div id = "button2">
        <button id = "save" class = "btns">Save</button>
        </div>
        </div>

    
    </fieldset> <br></br>

    <div>

    <fieldset id = "lists">

    <div id = "list1" class = "lsts"></div>
    <div id = "list2" class = "lsts"></div>
    <div id = "list3" class = "lsts"></div>  

    </fieldset>

    </div>
    </form>


      </header>

    );

}

export default App;
