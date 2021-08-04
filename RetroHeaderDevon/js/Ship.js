class Ship
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.speed = 1;
        this.moves = 0;
        this.turns = 0;
        this.dir = {
            RIGHT: 1,
            LEFT: 2
        }
        this.direction = this.dir.LEFT;
        this.path = [ //  dir] [moves 
        [18, 1], [22, 2], [15, 1], [35, 2],
        [12, 1], [3, 2], [22, 1], [20, 2],
        [30, 1], [29, 2], [22, 1], [20, 2],
        [22, 1]
        ];
        this.ship = // white 1, blue 3 , red 5
        [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 6, 6, 1, 6, 6, 6, 6 ],
            [ 6, 6, 5, 6, 1, 6, 5, 6, 6 ],
            [ 6, 6, 1, 6, 5, 6, 1, 6, 6 ],
            [ 6, 5, 1, 1, 1, 1, 1, 5, 6 ],
            [ 6, 1, 3, 1, 5, 1, 3, 1, 6 ],
            [ 6, 1, 1, 5, 1, 5, 1, 1, 6 ],
            [ 6, 1, 6, 6, 1, 6, 6, 1, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
        ] 
    }
    
    Move() // move right
    {
        switch(this.direction)
        {
            case this.dir.LEFT:
            {
                if(this.path.length != this.turns)
                {
                    this.y -= 1;
                }
                break;
            } // LEFT
            case this.dir.RIGHT:
            {
                if(this.path.length != this.turns)
                {
                    this.y += 1;
                }
                break;
            } // RIGHT
        }// switch
        this.Redraw();
    } // Move();
    Redraw()
    {
        for(let i = 0; i < this.ship[0].length; i++) {
            for(let j = 0; j < this.ship[1].length; j++) {
                let val = this.ship[i][j];
                let x = this.x + i;
                let y = this.y + j;
                cell = $('#r' + x + 'c' + y);
                cell.css('background', GalaColours[val]);
            }
        }
        this.moves++;
        if(this.path.length != this.turns)
        {
            if(this.path[this.turns][0] == this.moves)
            {
                this.direction = this.path[this.turns][1];
                this.moves = 0;
                this.turns++;
            }
        }
    }
};