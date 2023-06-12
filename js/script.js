
// 1 RICHIESTA DEL NOME

const userFirstName = prompt("Qual'è il tuo Nome?");

console.log('userFirstName', userFirstName, typeof userFirstName);
//--------------------------------------------------------------------------------//




// 2 RICHIESTA DEL COGNOME

const userLastName = prompt("Qual'è il tuo Cognome?");

console.log('userLastName', userLastName, typeof userLastName);
//--------------------------------------------------------------------------------//




// 3 RICHIESTA DEL COLORE

const userColor = prompt("Qual'è il tuo Colore preferito?");

console.log('userColor', userColor, typeof userColor);
//--------------------------------------------------------------------------------//




// 4 CONCATENAZIONE STRINGHE
const preferiteNumber = 101;

const pwd = `${userFirstName}${userLastName}${userColor}${preferiteNumber}`;

console.log('pwd', pwd, typeof pwd);
//--------------------------------------------------------------------------------//



// 5 MOSTRARE IL RISULTATO SU SCHERMO
const pwdContainer = document.getElementById('pwd-container');

console.log('pwdContainer', pwdContainer, typeof pwdContainer);

const previousText = pwdContainer.innerHTML;

console.log('previousText', previousText, typeof previousText);

pwdContainer.innerHTML = previousText + pwd;
//--------------------------------------------------------------------------------//
