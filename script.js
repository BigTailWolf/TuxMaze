
document.addEventListener("DOMContentLoaded", function() {
    var tux = { x: 0, y: 0 };

    var maze = [
        [4, 7, 3, 6, 3, 6, 5, 7, 3, 2, 6, 5, 5, 7, 7, 7, 5, 5, 3, 0],
        [6, 11, 14, 15, 13, 13, 7, 11, 10, 12, 11, 6, 7, 13, 13, 11, 4, 3, 10, 0],
        [10, 10, 10, 10, 6, 5, 11, 12, 11, 6, 11, 12, 13, 5, 7, 15, 5, 15, 13, 3],
        [12, 11, 12, 13, 11, 6, 13, 7, 13, 11, 10, 6, 7, 3, 14, 15, 3, 10, 6, 9],
        [6, 11, 2, 4, 15, 11, 6, 13, 5, 13, 15, 15, 13, 15, 11, 14, 11, 10, 12, 1],
        [10, 14, 15, 7, 15, 11, 12, 7, 3, 6, 13, 11, 4, 11, 10, 10, 10, 10, 2, 2],
        [14, 13, 11, 14, 13, 11, 2, 14, 11, 14, 3, 12, 5, 15, 15, 11, 10, 14, 11, 10],
        [12, 3, 10, 14, 5, 13, 11, 10, 14, 13, 15, 5, 5, 15, 15, 11, 10, 12, 13, 11],
        [2, 10, 14, 11, 6, 7, 11, 14, 11, 6, 13, 7, 3, 12, 13, 13, 13, 3, 6, 11],
        [8, 12, 13, 9, 12, 13, 13, 9, 12, 13, 1, 12, 13, 5, 1, 4, 5, 13, 9, 8]
    ]

    function displaymaze() {
        var output = "";
    
        for(var i = 0; i < maze.length; i++) {
            output += "\n<div class='row'>\n";
            for(var j = 0; j < maze[i].length; j++) {
                output += "<div class='cell' maze_val='"+maze[i][j]+"'></div>";
            }
            output += "\n</div>";
        }
        document.getElementById('maze').innerHTML = output;
    }
    function displaytux(){
        origin_top  = document.getElementsByClassName('row')[0].getBoundingClientRect().top
        origin_left = document.getElementsByClassName('cell')[0].getBoundingClientRect().left
        document.getElementById('tux').style.top  = origin_top  + tux.y*50 + "px";
        document.getElementById('tux').style.left = origin_left + tux.x*50 + "px";
    }
    
    displaymaze();
    displaytux();
    
    document.onkeydown = function(e){
        if(e.keyCode == 37 && (maze[tux.y][tux.x] & 0b0001) != 0){
            tux.x--;
        }
        else if(e.keyCode == 39 && (maze[tux.y][tux.x] & 0b0100) != 0){
            tux.x++;
        }
        else if(e.keyCode == 38 && (maze[tux.y][tux.x] & 0b1000) != 0){
            tux.y--;
        }
        else if(e.keyCode == 40 && (maze[tux.y][tux.x] & 0b0010) != 0){
            tux.y++;
        }
        //console.log(e.keyCode);
        displaytux();
    }
})

$(document).ready(function() {
    var cells = $(".cell")
    console.log(cells)
    for (cell of cells) {
        var v = cell.attributes.maze_val.value;
        //maze[r][c]
        if ((v & 0b1000) == 0) { cell.style.borderTopWidth = 1 }
        if ((v & 0b0100) == 0) { cell.style.borderRightWidth = 1 }
        if ((v & 0b0010) == 0) { cell.style.borderBottomWidth = 1 }
        if ((v & 0b0001) == 0) { cell.style.borderLeftWidth = 1 }
        cell.style.color = "white"
    }
    console.log("Holy Shit")
})
