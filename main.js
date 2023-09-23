// const { count } = require("console")

function chaek(arr){
    for(let i=0;i<9;i+=3)
    if(arr[0+i]==arr[1+i] && arr[1+i]==arr[2+i] && arr[0+i]!=0)
    return true
    
    for(let i=0;i<3;i++)
    if(arr[0+i]==arr[3+i] && arr[3+i]==arr[6+i] && arr[0+i]!=0)
    return true

    if(arr[0]==arr[4] && arr[4]==arr[8]  && arr[0]!=0)
    return true

    if(arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=0)
    return true

    return false
}

//?main()
arr=[`<i class="fa-solid fa-x">`,`<i class="fa-solid fa-o">`]
player=["O","X"]

buttons=document.querySelectorAll("button")
winner=document.querySelector("p")
count=0
hsh=[0,0,0,0,0,0,0,0,0]


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        if(hsh[i]!==1 && hsh[i]!==2) {
            buttons[i].innerHTML=arr[count%2]
            buttons[i].style.backgroundColor="cornflowerblue"
            buttons[i].style.color="white"
            count++
            hsh[i]=count%2+1;
            console.log(hsh[i],i)
        }
        if(chaek(hsh)){
            console.log(chaek(hsh))   
            setTimeout(()=>{
                console.log(player[count%2],"won");
                for(let j=0;j<9;j++){
                hsh[j]=0;
                buttons[j].innerHTML=""
                buttons[j].style.backgroundColor="#efefef"
                buttons[j].style.color="black"}
                winner.innerText=`${player[count%2] } won`
                count=0
            },200)     
        }

        else if(count==9){
            winner.innerText=`Draw`
            setTimeout(()=>{for(let j=0;j<9;j++){
                hsh[j]=0;
                buttons[j].innerHTML=""
                buttons[j].style.backgroundColor="#efefef"
                buttons[j].style.color="black"}},200)
        }
    }



    )
}