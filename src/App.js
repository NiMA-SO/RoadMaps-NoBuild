import './App.css';

function App() {



  let frontArray = [];
  let backArray = [];
  if(localStorage.getItem('front') != null){
    frontArray = localStorage.getItem('front').split(',');
  }
  if(localStorage.getItem('back') != null){
    backArray = localStorage.getItem('back').split(',');
  }

  let i = frontArray.length;
  let b = backArray.length;

  return (
    <div className="App">
      <input type='text' id="add" placeholder='Add...'/>
      <br/>
      <br/>
      <input type='checkbox' id="checkFront"/>
      <label for='checkFront'>  Road Map 1</label>
      <br/>
      <br/>
      <input type='checkbox' id="checkBack"/>
      <label for='checkBack'>  Road Map 2</label>
      <br/>
      <br/>
      <button id='btnAdd' type='button' onClick={()=>{
        const front = document.getElementById('checkFront');
        const back = document.getElementById('checkBack');
        const addText = document.getElementById('add').value;


        if(front.checked == true){
          i++;
        
          const parentLeft = document.querySelector('#left ol');

          const child = document.createElement('li');
          child.innerHTML = `
                  <label for="${i}">${addText}</label>
                    <div class="checkbox-container">
                      <button class="delete">Delete</button>
                      <input type="checkbox" id="${i}">
                  </div>
          `
          parentLeft.appendChild(child);

          frontArray.push(addText)
          localStorage.setItem('front',frontArray)
        }


        if(back.checked == true){
          b++;

          
          const parentRight = document.querySelector('#right ol');

          const child = document.createElement('li');
          child.innerHTML = `
                  <label for="b${b}">${addText}</label>
                    <div class="checkbox-container">
                      <button class="delete">Delete</button>
                      <input type="checkbox" id="b${b}">
                  </div>
          `
          parentRight.appendChild(child);

          backArray.push(addText)
          localStorage.setItem('back',backArray)
        }
      }}>Add</button>
    </div>
  );
}

export default App;