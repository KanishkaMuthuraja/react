/*function Sample()
{
    return(
        <div>
        <p>This is sample Component</p>
        </div>
    )
}
export default Sample*/
function sum(....args){
    let sum=0;
    for (let i=0;i<args.lenght;i++){
        sum+=args[i];
    }
    return sum;
}
console.log(sum(2,4,5,6))
console.log(sum(20,30,40))