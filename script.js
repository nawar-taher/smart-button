let btn=document.getElementsByTagName('button')[0];
let con =document.getElementById('con')

btn.addEventListener('click',()=>{
    getfuncation()

})

function getfuncation(){
    let action=document.createElement('div');
    action.innerText='can you trust me ';
    action.classList.add('test');
    con.appendChild(action);

    setTimeout( ()=>{
        action.remove('.test')
    },4000)
}