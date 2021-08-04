
let cell = '';
let speed = 100;
let maxCol = 10;
let ghosts = new Array();
let pinky = new Ghost(9, -10, '#ff69b4'); // pink
let inky = new Ghost(9, -10, '#0099f6'); // light blue
let blinky = new Ghost(9, -10, '#f60c00'); // red
let clyde = new Ghost(9, -10, '#ffa500'); // orange
let scared = new Ghost(9, -10, '#00f'); // blue
let player = new Player();
let ship = new Ship(32, 45);

ghosts.push(pinky);
let pacman = new Pacman(9, -45);
let PacColors = [
    'rgb(0, 0, 0)',           // 0 // black 
    'rgb(255, 255, 0)',       // 1 // yellow 
    'rgba(0, 0, 0, 0)',       // 2 // transparent
    'rgb(255, 255, 255)',     // 3 // white
    'rgb(0, 0, 255)'          // 4 // blue
];
let CentColours = [
    'rgb(0, 0, 0)',                                                     // 0  // black 
    'rgb(255, 255, 255)',                                               // 1  // white
    'rgb(165, 221, 10)',                                                // 2  // mushroom stump
    'linear-gradient(to top, rgb(165, 221, 10) 95%, #000 5%)',          // 3  // mushroom top middle
    'linear-gradient(to top left, rgb(165, 221, 10) 20%, #000 80%)',    // 4  // mushroom top left
    'linear-gradient(to top right, rgb(165, 221, 10) 20%, #000 80%)',   // 5  // mushroom top right
    'linear-gradient(to top left, rgb(59, 89, 152) 20%, #000 80%)',     // 6  // centepied
    'linear-gradient(to top right, rgb(59, 89, 152) 20%, #000 80%)',    // 7  // centepied
    'linear-gradient(to bottom left, rgb(59, 89, 152) 20%, #000 80%)',  // 8  // centepied
    'linear-gradient(to bottom right, rgb(59, 89, 152) 20%, #000 80%)', // 9  // centepied
    'rgb(0, 160, 200)',                                                // 10 // blue mushroom stump
    'linear-gradient(to top, rgb(0, 160, 200) 95%, #000 5%)',          // 11 // blue mushroom top middle
    'linear-gradient(to top left, rgb(0, 160, 200) 20%, #000 80%)',    // 12 // blue mushroom top left
    'linear-gradient(to top right, rgb(0, 160, 200) 20%, #000 80%)'    // 13 // blue mushroom top right
];
let GalaColours = [
    'rgb(0, 0, 0)',             // 0 // black
    'rgb(255, 255, 255)',       // 1 // white
    'rgb(255, 255, 0)',         // 2 // yellow
    'rgb(0, 0, 255)',           // 3 // blue
    'rgb(0, 255, 0)',           // 4 // green
    'rgb(225, 0, 0)',           // 5 // red
    'rgba(0, 0, 0, 0)'          // 6 // transparent
];
let glitchColors = [ 
    'rgb(255, 0, 255)',
    'rgb(255, 0, 100)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 255)'
];
let glitchVals = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '?', '`', '~'
];
let gridData = new Array();
let itemGrid = new Items();
let chomp = document.getElementById('chomp');
//chomp.play();
chomp.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
for(let i = 0; i < 40; i++){
    gridData[i] = new Array();
    for(let j = 0; j < 100; j++)
    {
        gridData[i][j] = 0;
    }
}
let gameTimer = setInterval("Move()", speed);
let playerTimer = '';
$('document').ready(function(){
    PaintGrid();
});

function DrawGhost(thatGhost){
    let toggle = ghost.scared ? ghost.ghostData : ghost.scaredGhost;
    
    for(let i = 0; i < thatGhost.ghostData[0].length; i++)
    {
        for(let j = 0; j < thatGhost.ghostData[1].length; j++)
        {
            let val = toggle[i][j];
            if(val == 1)
            {
                let x = thatGhost.x + i;
                let y = thatGhost.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', thatGhost.color);
                if(itemGrid != null)
                {
                    if(itemGrid.itemGrid[x][y] == 1)
                    {
                        itemGrid.itemGrid[x][y] = 3;
                    }
                }
            }
            else if(val == 2)
            {
                let x = thatGhost.x + i;
                let y = thatGhost.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', PacColors[3]);
                if(itemGrid != null)
                {
                    if(itemGrid.itemGrid[x][y] == 1)
                    {
                        itemGrid.itemGrid[x][y] = 3;
                    }
                }
            }
            else if(val == 4)
            {
                let x = thatGhost.x + i;
                let y = thatGhost.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', PacColors[4]);
                if(itemGrid != null)
                {
                    if(itemGrid.itemGrid[x][y] == 1)
                    {
                        itemGrid.itemGrid[x][y] = 3;
                    }
                }
            }
        }
    }
}

function DrawPacMan(){
    let pman = pacman.open ? pacman.pacmanOpen : pacman.pacmanClosed;
    for(let i = 0; i < pacman.pacmanOpen[0].length; i++)
    {
        for(let j = 0; j < pacman.pacmanOpen[1].length; j++)
        {
            let val = pman[i][j];
            if(val == 1)
            {
                let x = pacman.x + i;
                let y = pacman.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', PacColors[1]);
                if(itemGrid.itemGrid[x][y] == 3)
                {
                    itemGrid.itemGrid[x][y] = 1;
                }
            }
        }
    }
    pacman.open = !pacman.open;
}

function ClearGrid(){
    for(let i = 0; i < 40; i++)
    {
        for(let j = 0; j < 100; j++)
        {
            if(gridData[i][j] < 6)
            {
                cell = $('#r' + i + 'c' + j);
                cell.css('background', PacColors[0]);
            }
            else if(gridData[i][j] == 6)
            {
                cell = $('#r' + i + 'c' + j);
                cell.text(glitchVals[Math.floor(Math.random() * glitchVals.length)]);
                cell.css('color', glitchColors[Math.floor(Math.random() * glitchColors.length)]);
                cell.css('background', '#222');
            }
            else
            {
                cell = $('#r' + i + 'c' + j);
                cell.text('');
                cell.css('background', PacColors[2]);
            }
        }
    } 
}

function PaintGrid(){
    let header = $('header');
    header.empty();
    
    let pageW = window.innerWidth;
    let calcHeight = pageW / 100;
    let ourStyle = '<style>.block{width: 1%; font-size: .3em; text-align: center; background: #000; float: left; height: ';
    ourStyle += calcHeight;
    ourStyle += 'px; z-index: 13; padding-top: -3px; position: relative;}</style>';
    let headerHeight = calcHeight * 40;
    $('header').css('min-height', headerHeight);
    $('head').append(ourStyle);
    for(let i = 0; i < 40; i++)
    {
        for(let j = 0; j < 100; j++)
        {
            let block = document.createElement('div');
            block.setAttribute('class', 'block');
            block.setAttribute('id', 'r' + i + 'c' + j);
            header.append(block);
        }
    }
    
    for(ghost of ghosts)
    {
        DrawGhost(ghost);
    }
} // PaintGrid()

function DrawItems(){
    for(let i = 0; i < itemGrid.itemGrid.length; i++)
    {
        for(let j = 0; j < itemGrid.itemGrid[0].length; j++)
        {
            if(itemGrid.itemGrid[i][j] == 3)
            {
                cell = $('#r' + i + 'c' + j);
                cell.css('background', PacColors[1]);
            }
        }
    }
}

function Move(){
    ClearGrid();
    DrawItems();
    for(ghost of ghosts)
    {
        ghost.Move(ghost.color);
        DrawGhost(ghost);
    }
    pacman.Move();
    DrawPacMan();
    // maybe stop the madness?
    if(pacman.moves >= 150)
    {
        clearInterval(gameTimer);
        ghosts.pop(inky);
        inky = null;
        pinky = null;
        pacman = null;
        blinky = null;
        clyde = null;
        itemGrid = null;
        gameTimer = setInterval("Move2()", speed / 2);
    }
    
    if(pacman != null)
    {
        if(pacman.moves == 90)
        {
            // kill pinky, swap with inky
            // then carry on
            scared.y = pinky.y;
            // inky.itemGrid = pinky.itemGrid;
            scared.moves = pinky.moves;
            ghosts.pop(pinky);
            ghosts.push(scared);
            pinky = null;
            DrawGhost(ghosts[0]);
        } // Move()
    }
} // Move()

function Move2(){
    ClearGrid();
    if(ghosts.length === 0)
    {
        // add new ghosts
        inky = new Ghost(0, -25, '#0099f6'); // light blue
        blinky = new Ghost(14, -15, '#f60c00'); // red
        clyde = new Ghost(25, -28, '#ffa500');
        ghosts.push(inky, blinky, clyde);
    }
    
    for(ghost of ghosts)
    {
        ghost.Move(ghost.color);
        DrawGhost(ghost);
    }
    
    if(ghosts[2].moves >= 42)
    PickCells();
} // Move2

function PickCells(){
    if(maxCol <= 110)
    {
        maxCol++;
    }
    else
    {
        clearInterval(gameTimer);
        gameTimer = setInterval("Move2()", speed / 110);
    }
    
    let picks = 0;
    // pick random cell
    // check for a 0 and mutate
    let loopCount = 0;
    while(picks <= 67)
    {
        loopCount++;
        let randX = Math.floor(Math.random() * 40);
        let randY = Math.floor(Math.random() * maxCol);
        if(gridData[randX][randY] < 6)
        {
            gridData[randX][randY] = 6;
            picks++;
        }
        else if(gridData[randX][randY] == 6)
        {
            let num = gridData[randX][randY];
            num++;
            gridData[randX][randY] = num;
            picks++;
        }
        else
        {
            gridData[randX][randY] = 7;
        }
        if(loopCount >= 5000)
        {
            clearInterval(gameTimer);
            break;
        }
    }
    
    if(maxCol >= 110)
    {
        $('.block').fadeOut(3300);
        // let audioFade = setInterval('VolumeDown()', 530);
    }
}

function VolumeDown(){
    chomp.volume -= .1;
    console.log(chomp.volume);
    if(chomp.volume < 0)
    VolumeOff();
}
function VolumeOff(){
    chomp.pause();
    chomp.addEventListener('ended', function() {
        this.currentTime = 0;
    }, false);
}


//=========================================================>>
//==============centipede =================================>>

let shroom = new Shroom();
let centipede = new Centipede();
let headPos = '';
let playerPos = '';
let normalSpeed = true;
let speedUp = false;

document.getElementById("centipede").addEventListener("click", function(event){
    event.preventDefault();
    clearInterval(gameTimer);
    VolumeOff();
    for(let i = 0; i < 40; i++)
    {
        for(let j = 0; j < 100; j++)
        {
            cell = $('#r' + i + 'c' + j);
            cell.text('');
            gridData[i][j] = 2;
        }
    }
    ClearGrid();
    $('.block').fadeIn(300);
    DrawShrooms();
    gameTimer = setInterval('MoveCent()', 80);
    
})
// add shrooms
function DrawShrooms(){
    for(let i = 0; i < 40; i++) {
        for(let j = 0; j < 100; j++) {
            cell = $('#r' + i + 'c' + j);
            let val = shroom.shroomPatch[i][j];
            cell.css('background', CentColours[val]);
        }
    }
}// DrawShrooms()

function MoveCent(){
    
    if(shroom.turns >= player.path.length - 1)
    {
        clearInterval(gameTimer);
    }
    
    centipede.Move();
    headPos = centipede.GetHead();
    
    if(shroom.turns == 6)
    {
        clearInterval(gameTimer);
        gameTimer = setInterval('MoveCent()', 55);
        speedUp = true;
    }
    if(speedUp == false && normalSpeed == true)
    {
        player.Move();
    }
    else if(speedUp == true && normalSpeed == true)
    {
        player.Move();
        normalSpeed = false;
    }
    else
    {
        normalSpeed = true;
    }
    playerPos = player.GetPos();
    shroom.RedrawCent(headPos, playerPos);
    DrawShrooms();
    
}


//=========================================================>>
//=============  Galaga  ================================>>

let boss = new Boss(32, 5);
let boss2 = new Boss(40, 5);
let yellowMinion = new YellowMinion(34, 100);
let yellow2 = new YellowMinion(43, 100);
let redMinion = new RedMinion(0, 100);
let red2 = new RedMinion(9, 100)

document.getElementById("galaga").addEventListener("click", function(event){
    event.preventDefault();
    clearInterval(gameTimer);
    VolumeOff();
    DrawGrid();
    ClearGrid();
    
    let head = document.getElementsByTagName('header');
    let div = document.createElement('div');
    let pageW = window.innerWidth - 80;
    let calcHeight = pageW / 100;
    let headerHeight = calcHeight * 40;
    let ourStyle = 'float: left; height: ';
    ourStyle += headerHeight;
    ourStyle += 'px; z-index: 10; position: absolute; background-size: contain;';
    div.setAttribute('style', ourStyle);
    div.setAttribute('id', 'stars');
    
    head[0].appendChild(div);
    
    let container = document.getElementById('stars');
    let starfield = new Starfield();
    starfield.initialise(container);
    starfield.start();
    $('.block').fadeIn(300);
    DrawShip();
    DrawBugs(boss);
    DrawBugs(yellowMinion);
    DrawBugs(redMinion);
    gameTimer = setInterval('BugsMove()', 45);

})
function DrawGrid() {
    for(let i = 0; i < 40; i++)
    {
        for(let j = 0; j < 100; j++)
        {
            cell = $('#r' + i + 'c' + j);
            cell.text('');
            gridData[i][j] = 7; // has to be over 6 to make transparent
        }
    }
}
function BugsMove(){

    ship.Move();
    boss.Move()
    boss2.Move();
    yellowMinion.Move();
    yellow2.Move();
    if(boss.turns >= 30)
    {
        redMinion.Move();
        red2.Move();
    }
    DrawGrid();
    
}// BugsMove()

function DrawShip(){
    for(let i = 0; i < ship.ship[0].length; i++)
    {
        for(let j = 0; j < ship.ship[1].length; j++)
        {
            let val = ship.ship[i][j];
            if(val != 0)
            {
                let x = ship.x + i;
                let y = ship.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', GalaColours[val]);
            }
        }
    }
}// DrawShip()
function DrawBugs(bug){

    switch(bug)
    {
        case boss:
        {
            for(let i = 0; i < boss.boss[0].length; i++)
            {
                for(let j = 0; j < boss.boss[1].length; j++)
                {
                    let val = boss.boss[i][j];
                    let x = boss.x + i;
                    let y = boss.y + j;
                    cell = $('#r' + x + 'c' + y);
                    cell.css('background', GalaColours[val]);
                }
            }
            break;
        }
        case yellowMinion:
        {
            for(let i = 0; i < yellowMinion.yellowMinion[0].length; i++)
            {
                for(let j = 0; j < yellowMinion.yellowMinion[1].length; j++)
                {
                    let val = yellowMinion.yellowMinion[i][j];
                    let x = yellowMinion.x + i;
                    let y = yellowMinion.y + j;
                    cell = $('#r' + x + 'c' + y);
                    cell.css('background', GalaColours[val]);
                }
            }
            break;
        }
        case redMinion:
        {
            for(let i = 0; i < redMinion.redMinion[0].length; i++)
            {
                for(let j = 0; j < redMinion.redMinion[1].length; j++)
                {
                    let val = redMinion.redMinion[i][j];
                    let x = redMinion.x + i;
                    let y = redMinion.y + j;
                    cell = $('#r' + x + 'c' + y);
                    cell.css('background', GalaColours[val]);
                }
            }
            break;
        }
    }// switch()
}// DrawBugs()