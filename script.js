document.addEventListener("DOMContentLoaded", function() {
    var maze = [
        [2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,2,1,1,2,2,1,1,2],
        [2,1,2,2,1,2,1,1,1,2],
        [2,1,1,2,1,1,1,1,1,2],
        [2,1,1,2,5,1,2,1,1,2],
        [2,1,1,2,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2]
        
    ];
    var score = 0;
    var tux = { x: 1, y: 1 };
    var ghost = { x: 7, y: 5 };

    function displaymaze() {
        var output = "";
    
        for(var i = 0; i < maze.length; i++) {
            output += "\n<div class='row'>\n";
            for(var j = 0; j < maze.length; j++) {
                if(maze[i][j] == 5)
                    output += "<div class='cell cherry'></div>";
                if(maze[i][j] == 2)
                    output += "<div class='cell brick'></div>";
                if(maze[i][j] == 1)
                    output += "<div class='cell coin'></div>";
                if(maze[i][j] == 0)
                    output += "<div class='cell empty'></div>";
            }
            output += "\n</div>";
        }
        //console.log(output);
        document.getElementById('maze').innerHTML = output;
        return "Holy SHit!!"
    }
    function displaytux(){
        origin_y = document.getElementsByClassName('row')[0].getBoundingClientRect().y
        origin_x = document.getElementsByClassName('cell')[0].getBoundingClientRect().x
        document.getElementById('tux').style.top  = origin_y + tux.y*50 + "px";
        document.getElementById('tux').style.left = origin_x + tux.x*50 + "px";
    }
    function displayGhost(){
        document.getElementById('ghost').style.top  = ghost.y*50+"px";
        document.getElementById('ghost').style.left = ghost.x*50+"px";
    }
    function displayScore(){
        document.getElementById('score').innerHTML = score;
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