

const board = document.querySelector(".board");
const h1 = document.querySelector("h1");
function clear(board_t,icons,m,n){
    for(let i=0;i<n*m;i++){
        icons[i].classList = "";
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            board_t[j][i] = "";
        }
    }
}


function game(m =3,n =3,l=3){
    const squares = document.querySelectorAll(".squares");
    let value = ''; // by default
    const board_t = [...Array(n)].map(e => Array(m).fill(value));

    const player = ["X","O"]
    const icons = document.querySelectorAll("i");
    const class_list = ["fa-x","fa-0"]
    let count=0;
    let pos = new Array(m*n); 
    for(let i=0;i<m*n;i++) pos[i] =0;

    console.log(icons)

    for(let i=0;i<m*n;i++){
        squares[i].addEventListener("click",()=>{
            if(pos[i]==0){
                pos[i]=1;
                //---
                icons[i].classList.add(class_list[count%2])
                board_t[Math.floor(i/m)][i%m] = player[count%2]
                console.log(board_t)
                if(have_won(board_t,player[count%2],n,m,l)){
                    console.log(player[count%2] ,"Won")
                    h1.innerHTML = `${player[count%2]} Won`
                    setTimeout(()=>{
                        clear(board_t,icons,m,n)
                        count = 0;
                        pos.fill(0);
                    },200)
                }

                console.log("dfds")
                count++;

            }
        })
    }

}
let n=5,m=5,l=4;
let eles = "";
for(let i=0;i<n*m;i++){
    eles = eles + ' <div class="squares"><i class="fa-solid "></i></div>';
}
let cols = '';
for(let i=0;i<n;i++) 
    cols = cols + " 1fr"

let rows = '';
for(let i=0;i<m;i++) 
    rows = rows + " 1fr"

board.style.gridTemplateColumns = rows
board.style.gridTemplateRows = cols
// board.style.gridTemplateColumns = `repete(${n},1fr)`

board.innerHTML = eles;

game(m,n,l)
