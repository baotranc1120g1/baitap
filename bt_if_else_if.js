let userName = prompt("Who is there?", '');
if (userName == 'admin') {
    alert('Welcome');
} else if (userName == null){
    alert('Cancled');
} else {
    alert("I don't know you");
}
let Password = prompt("Password");
if (Password == 'theMaster'){
    alert('Welcome')
}else if (Password == null){
    alert('Cancled');
}else {
    alert('Wrong Pass');
}