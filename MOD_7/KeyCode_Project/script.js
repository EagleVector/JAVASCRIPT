// Method-1
// We change the innerHTML which is the dirty way of doing

// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = ` 
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>
  
//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>
  
//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });

// Method-2
// Creating an event object -> Much better way

function showKeyCode(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.Key': e.key === ' ' ? 'Space' : e.key,
    'e.KeyCode': e.keyCode,
    'e.Code': e.code
  };

  console.log(keyCodes);
  // Using for in loop to iterate through

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';

    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}
window.addEventListener('keydown', showKeyCode);