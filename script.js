
document.addEventListener("DOMContentLoaded", function() {
    var tux = { x: 0, y: 0 };

    var maze = [
        [6, 5, 5, 5, 3, 2, 6, 7, 7, 3],
        [14, 7, 5, 7, 13, 15, 11, 10, 14, 11],
        [12, 13, 5, 11, 6, 11, 14, 11, 10, 10],
        [2, 6, 5, 15, 15, 11, 14, 15, 15, 9],
        [12, 15, 5, 11, 12, 13, 13, 13, 13, 3],
        [4, 15, 5, 15, 5, 7, 5, 3, 4, 11],
        [2, 12, 7, 11, 6, 11, 6, 15, 5, 11],
        [14, 7, 13, 15, 15, 11, 12, 15, 5, 9],
        [12, 11, 2, 14, 11, 12, 3, 14, 3, 2],
        [0, 12, 13, 13, 13, 5, 13, 9, 12, 9]
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
        if(e.keyCode == 37 && maze[tux.y][tux.x-1] != 2){
            tux.x--;
        }
        else if(e.keyCode == 39 && maze[tux.y][tux.x+1] != 2){
            tux.x++;
        }
        else if(e.keyCode == 38 && maze[tux.y-1][tux.x] != 2){
            tux.y--;
        }
        else if(e.keyCode == 40 && maze[tux.y+1][tux.x] != 2){
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
