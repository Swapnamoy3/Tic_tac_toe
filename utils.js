

function along_row_check(board, player, row, col, l) {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c <= col - l; c++) {
            //  
            let isTrue = true;
            for (let k = 0; k < l; k++) {
                isTrue = isTrue && (board[r][c + k] == player)
                // console.log(r,c+k);
            }
            if (isTrue) return true;
        }
    }

    return false;
};

function along_col_check(board, player, row, col, l) {
    for (let c = 0; c < col; c++) {
        for (let r = 0; r <= row - l; r++) {
            //  
            let isTrue = true;
            for (let k = 0; k < l; k++) {
                isTrue = isTrue && (board[r + k][c] == player)
            }
            if (isTrue) return true;
        }
    }
    return false;
};


function along_diagonal1_check(board, player, row, col, l) {
    for(let st =0;st<row;st++)
    for (let r = st, c = 0; r <= row-l && c <= col-l; r++, c++) {
        let isTrue = true;
        for (let k = 0; k < l; k++) {
            isTrue = isTrue && (board[r + k][c + k] == player)
        }
        if(isTrue) return true; 
    }


    for(let st =0;st<col;st++)
    for (let r = 0, c = st; r <= row-l && c <= col-l; r++, c++) {
        let isTrue = true;
        for (let k = 0; k < l; k++) {
            isTrue = isTrue && (board[r + k][c + k] == player)
        }
        if(isTrue) return true;
    }

    return false;
} 


function along_diagonal2_check(board, player, row, col, l) {

    for(let st = 0;st<row;st++)
    for(let r=st,c=col-1;r<=row-l && c>=l-1;r++,c--){
        let isTrue = true;
        for(let k = 0;k<l;k++){
            isTrue = isTrue && (board[r+k][c-k] == player)
        }
        if(isTrue) return true;
    }


    for(let st = 0;st<col;st++)
    for(let r=0,c=col-1-st;r<=row-l && c>=l-1;r++,c--){
        let isTrue = true;
        for(let k = 0;k<l;k++){
            isTrue = isTrue && (board[r+k][col-k] == player)
        }
        if(isTrue) return true;
    }

    return false
} 


function have_won(board,player,row,col,l){
    return along_col_check(board,player,row,col,l) ||
     along_row_check(board,player,row,col,l) ||
     along_diagonal1_check(board,player,row,col,l) ||
     along_diagonal2_check(board,player,row,col,l) 
}