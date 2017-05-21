/**
 * Created by anth on 21.05.2017.
 */

const Blueprint = require('./blueprint'); //TODO move to regular package once changes are merged
const fs = require('fs');
const str = fs.readFileSync('./balancers.txt', 'utf8');

let book =  Blueprint.getBook(str);
for(let key in book) {
    let words = key.trim().split(" ");
    let from = parseInt(words[0]);
    let to = parseInt(words[2]);

    book[from]  = book[from] || [];
    book[from][to] = book[key];
}

module.exports = book;