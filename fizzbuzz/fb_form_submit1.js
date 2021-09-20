function getData() {
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let middleInitial = document.getElementById('middle_initial').value;
        
   document.getElementById("greeting").textContent = "Welcome to Kyko Kombucha, " + firstName + " " + middleInitial + ". " + lastName + "!";
  bubbleSip();
}

function bubbleSip() {
  for (let i = 0; i <= 140; i++) {
    var word = '';
    
    if (i % 3 === 0) {
      word = word.concat('Sip');
    } 
    
    if (i % 5 === 0) {
      word = word.concat('SLURP!');
    }
    
    if (word === '') {
      word = 'Bubble';
    }
      
      
    
    //creates new element & stores in variable
    var newEl = document.createElement('li');
    
    //creates text node & stores in variable
    var newText = document.createTextNode(i + ' Bubble Sip - ' + word);
    
    //attaches text node to new element
    newEl.appendChild(newText);
    
    //find position where element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    //insert new element in correct position
    position.appendChild(newEl);
    
  }
  
}
