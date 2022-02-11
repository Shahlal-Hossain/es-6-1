const friendList = [ "anre rasel","devid onnar", "masrafi mortaja", "sabbir ruhman", "hadhim amla", "shahariya nafish", "mustafizur rohman"];
const friendTani = [ "musfikur rohim", "mahmudullah" , 22, 22, 6, 44, 32, 55, 111111];

// const allfriend = friendList + friendTani;
const mapping = friendList.map( fri => "my friend" + ' ' + fri)
// console.log(mapping)
const bigNameFilter = friendList.filter(person => person.length < 15)
console.log(bigNameFilter);

const bigNameFind= friendList.find( parent => parent.length > 12)
// console.log(bigNameFind)