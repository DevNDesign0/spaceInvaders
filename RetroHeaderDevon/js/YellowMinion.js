class YellowMinion
{
    constructor(x, y)
    {

        this.x = x;
        this.y = y;
        let pos = [];
        let cell = '';
        this.speed = 1;
        this.dir = {
            UP: 1,
            RIGHT: 2,
            DOWN: 3,
            LEFT: 4
        }
        this.direction = this.dir.LEFT;
        this.moves = 0;
        this.turns = 0;
        this.path = [ //  dir] [moves 
        [5, 1], [5, 4], [3, 1], [3, 4],
        [3, 1], [3, 4], [3, 1], [3, 4],
        [3, 1], [3, 4], [3, 1], [3, 4],
        [3, 1], [3, 4], [3, 1], [3, 4],
        [3, 3], [2, 4], [2, 3], [2, 4],
        [2, 3], [3, 2], [3, 3], [2, 2],
        [3, 3], [3, 2], [2, 3], [2, 2],
        [3, 1], [2, 2], [3, 1], [3, 2],
        [2, 1], [3, 4], [2, 1], [2, 4],//
        [3, 1], [3, 4], [3, 1], [3, 4],
        [3, 1], [2, 4], [5, 1], [3, 4],
        [5, 1], [3, 4], [4, 1], [2, 3]
        ];
        
        this.yellowMinion = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 3, 6, 6, 2, 6, 6, 3, 6 ],
            [ 6, 3, 3, 5, 2, 5, 3, 3, 6 ],
            [ 6, 6, 5, 5, 2, 5, 5, 6, 6 ],
            [ 6, 6, 3, 5, 5, 5, 3, 6, 6 ],
            [ 6, 6, 3, 3, 2, 3, 3, 6, 6 ],
            [ 6, 3, 3, 2, 2, 2, 3, 3, 6 ],
            [ 6, 3, 3, 6, 2, 6, 3, 3, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.YellowMinionUp = [//red 5, blue 3, yellow 2
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 3, 6, 2, 2, 2, 6, 3, 6 ],
            [ 6, 3, 3, 5, 2, 5, 3, 3, 6 ],
            [ 6, 6, 5, 5, 2, 5, 5, 6, 6 ],
            [ 6, 6, 3, 5, 5, 5, 3, 6, 6 ],
            [ 6, 6, 3, 3, 2, 3, 3, 6, 6 ],
            [ 6, 3, 3, 2, 2, 2, 3, 3, 6 ],
            [ 6, 3, 3, 6, 2, 6, 3, 3, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.YellowMinionRight = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 3, 3, 6, 6, 6, 3, 3, 6 ],
            [ 6, 3, 3, 3, 3, 5, 3, 6, 6 ],
            [ 6, 6, 2, 3, 5, 5, 5, 2, 6 ],
            [ 6, 2, 2, 2, 5, 2, 2, 2, 6 ],
            [ 6, 6, 2, 3, 5, 5, 5, 2, 6 ],
            [ 6, 3, 3, 3, 3, 5, 3, 6, 6 ],
            [ 6, 3, 3, 6, 6, 6, 3, 3, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.YellowMinionDown = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 3, 3, 6, 2, 6, 3, 3, 6 ],
            [ 6, 3, 3, 2, 2, 2, 3, 3, 6 ],
            [ 6, 6, 3, 3, 2, 3, 3, 6, 6 ],
            [ 6, 6, 3, 5, 5, 5, 3, 6, 6 ],
            [ 6, 6, 5, 5, 2, 5, 5, 6, 6 ],
            [ 6, 3, 3, 5, 2, 5, 3, 3, 6 ],
            [ 6, 3, 6, 2, 2, 2, 6, 3, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.YellowMinionLeft = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 3, 3, 6, 6, 6, 3, 3, 6 ],
            [ 6, 6, 3, 5, 3, 3, 3, 3, 6 ],
            [ 6, 2, 5, 5, 5, 3, 2, 6, 6 ],
            [ 6, 2, 2, 2, 5, 2, 2, 2, 6 ],
            [ 6, 2, 5, 5, 5, 3, 2, 6, 6 ],
            [ 6, 6, 3, 5, 3, 3, 3, 3, 6 ],
            [ 6, 3, 3, 6, 6, 6, 3, 3, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];
       
    } // constructor
    Move() {
        switch(this.direction)
        {
            case this.dir.UP:
            {
                if(this.path.length != this.turns)
                {
                    this.x -= 1;
                }
                this.yellowMinion = this.YellowMinionUp;
                break;
            } // UP
            case this.dir.DOWN: 
            {
                if(this.path.length != this.turns)
                {
                    this.x += 1;
                }
                this.yellowMinion = this.YellowMinionDown;
                break;
            } // DOWN
            case this.dir.LEFT:
            {
                if(this.path.length != this.turns)
                {
                    this.y -= 1;
                }
                this.yellowMinion = this.YellowMinionLeft;
                break;
            } // LEFT
            case this.dir.RIGHT:
            {
                if(this.path.length != this.turns)
                {
                    this.y += 1;
                }
                this.yellowMinion = this.YellowMinionRight;
                break;
            }
        }// switch
        this.Redraw();
    }// Move

    Redraw(){
        for(let i = 0; i < this.yellowMinion[0].length; i++) {
            for(let j = 0; j < this.yellowMinion[1].length; j++) {
                let val = this.yellowMinion[i][j];
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
    } // Redraw()
} // class
