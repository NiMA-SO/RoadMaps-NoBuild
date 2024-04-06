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
  const btnName = document.getElementById('btnName');
  const road1Name = document.getElementById('road1Name')
  const road2Name = document.getElementById('road2Name')
  const leftH1 = document.querySelector('#left').firstElementChild;
  const rightH1 = document.querySelector('#right').firstElementChild;
  const NameContainer = document.getElementById('NameContainer')

  btnName.addEventListener('click',()=>{
    if(road1Name.value != '' && road2Name.value != ''){
      leftH1.textContent = road1Name.value;
      rightH1.textContent = road2Name.value;
      NameContainer.style.display = "none";

      localStorage.setItem('roadmapName',leftH1.textContent+","+rightH1.textContent)
    }else{
      alert('همه فیلد ها باید پر شوند')
    }
  })

  return (
    <div className="App">
      <input type='text' id="add" placeholder='Add...'/>
      <br/>
      <br/>
      <input type='checkbox' id="checkFront"/>
      <label for='checkFront' id='lbl1'> RoadMap-Left</label>
      <br/>
      <br/>
      <input type='checkbox' id="checkBack"/>
      <label for='checkBack' id='lbl2'> RoadMap-Right</label>
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
        // addText.value = '';
      }}>Add</button>
    </div>
  );
}

export default App;