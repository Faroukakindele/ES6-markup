
    // module.exports = function newNameMark(name , mark = name.length){
    //   return name + '!'.repeat(mark)
    // }


const converter = {
    '"' : "&quot;",
    "'" : "&apos;",
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;",
}    

function html(arr, name, comment) {
    const parsedUsername = name.split("").map( char => {
        if (Object.keys(converter).includes(char))
            return converter[char]
        else
            return char
    }).join("")
    
    const parsedComment = comment.split("").map( char => {
        if (Object.keys(converter).includes(char))
            return converter[char]
        else
            return char
    }).join("")

    return `${arr[0]}${parsedUsername} ${arr[1]} "${parsedComment}"`
}


console.log(html`<b>${process.argv[2]}says</b>:${process.argv[3]}"`);