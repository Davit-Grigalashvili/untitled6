//Header
const header1 = document.getElementById('header_wrapper');//
const initialClass = header1.getAttribute('class');//
console.log('text of header:', initialClass);//text of header: card-header
header1.setAttribute('h1info', 'exemple');//
console.log('h1Info:', header1.getAttribute('h1Info'));//h1Info: exemple
const hasDataInfo = header1.hasAttribute('h1Info')//
console.log('is h1Info atribute?', hasDataInfo)//is h1Info atribute? true
header1.removeAttribute('h1Info')//
console.log('is h1Info atribute?', header1.getAttribute('h1info'));//is h1Info atribute? null
header1.classList.add('highLight');//
console.log('class result:', header1.classList.value);//class result: card-header highLight

const h1 = document.getElementById('h1');
console.log('h1 text:', 'h1');
h1.setAttribute('class', 'textred')
console.log(h1)
console.log('class', CSS.textred )
console.log('style', CSS.textred )
fetch('CSS.css')
    .then(response =>response.text())
    .then(cssText => { console.log('CSS file content:', cssText);
        // აქ შეგიძლიათ გაანალიზოთ cssText თუ გჭირდებათ
    })
    .catch(error => console.error('Error loading CSS file:', error));


// getAtribute()
// setAtribute()
// hasAtribute()
// removeAtribute()
// classList
