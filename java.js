let array = []

while(true){
    let word = prompt("Enter a word with vergul, without spaces (add, del, stop):").split(",")
    let ex = word[0].toLocaleLowerCase()

    if(ex == "stop") {
        console.log("Stop");
        break;
    }else if(ex == "add"){
        let element = word[1]
        array.push(element)
        console.log("Added: ", element);
    }else if(ex == "del"){
        let element = word[1]
        let index = array.indexOf(element)
        array.splice(index, 1)
        console.log("Deleted: ", element);
    }else{
        console.log("Element NotFound: ", element);
    }
}
console.log(array);