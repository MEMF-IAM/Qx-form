/*
const QxForm = 'https://memo.3bdesign.nl/index.php?title=UPEM/Implementation/QxForm.css&action=raw&ctype=text%2Fcss';
const QxForm = 'https://www.bobdevries.nl/static/memo/QxForm.css';
*/

const QxForm = 'https://raw.githubusercontent.com/MEMF-IAM/Qx-form/main/styling/Qx-form.css';
const response = await fetch( QxForm );
const data = await response.text();
console.log( data );

/*
_link = '<link rel="stylesheet" href="' + QxForm + '">';
alert( 'Inserting stylesheet [' + _link + ']' );
document.head.insertAdjacentHTML('beforeend', _link );
*/

_override = '<style>' + data + '</style>';
document.head.insertAdjacentHTML('beforeend', _override );
