function generateArray() {
    let searchBar = document.getElementById('searchBar');
    let number = parseInt(searchBar.value);
  
    if (isNaN(number) || number < 0 || number > 15) {
      alert('Please enter a valid number between 0 and 15');
      return;
    }
  
    let array = [];
    let sum = 0;
  
    while (sum !== number) {
      array = [];
      sum = 0;
  
      for (let i = 0; i < number; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        array.push(randomNum);
        sum += randomNum;
      }
    }
  
    let result = document.getElementById('result');
    result.textContent = 'Result: ' + array.join(', ');
  }
  