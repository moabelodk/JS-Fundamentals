const [,, arg1, arg2] = process.argv
if (!arg1){
    console.log("No argument")
}else if (!arg2){
    console.log('${arg1} is')
}else {
    console.log('${arg1} is ${arg2}')
}