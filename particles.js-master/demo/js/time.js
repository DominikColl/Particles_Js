//gets current time
//plugin
function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm:ss A');
}
//my code
timeConverter=(time)=>{
    console.log(time);
    //13:4
    if(time.length==4){
        let e=time[3];
        time=time.slice(0,3);
        console.log(time);
        time+=`0${e}:00`;
    }else{
        time+=':00';
    }
    return convert(time);
}
//gets times object starts sequence of manipulating time
getTime=()=>{
    let currentTime=new Date();
    let t=timeConverter(`${currentTime.getHours()}:${currentTime.getMinutes()}`);
    t=t.slice(0,4);
    console.log(t);
    return t;
}
window.setInterval(function(){
    document.querySelector('#time').innerHTML=getTime();
},1000);
