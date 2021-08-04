class Boss
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
        this.direction = this.dir.UP;
        this.moves = 0;
        this.turns = 0;
        this.path = [ //  dir] [moves 
        [5, 2], [5, 1], [5, 2], [5, 1],
        [2, 2], [3, 1], [4, 2], [4, 1],
        [5, 2], [3, 1], [2, 2], [4, 1],
        [3, 2], [4, 1], [4, 2], [3, 2],
        [3, 3], [2, 2], [4, 3], [2, 2],
        [3, 3], [2, 2], [3, 3], [2, 2],
        [3, 3], [2, 4], [2, 3], [2, 4],
        [2, 3], [2, 4], [2, 1], [2, 4],
        [3, 1], [3, 4], [2, 1], [3, 4],
        [3, 1], [3, 2], [4, 1], [3, 2],
        [3, 1], [2, 2], [3, 1], [3, 3]  ];
        
        this.boss = [ // green 3, red 5, yellow 2 
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 6, 4, 6, 4, 6, 6, 6 ],
            [ 6, 4, 5, 5, 4, 5, 5, 4, 6 ],
            [ 6, 6, 4, 4, 4, 4, 4, 6, 6 ],
            [ 6, 4, 2, 2, 4, 2, 2, 4, 6 ],
            [ 6, 4, 5, 2, 2, 2, 5, 4, 6 ],
            [ 6, 4, 5, 4, 6, 4, 5, 4, 6 ],
            [ 6, 6, 4, 4, 6, 4, 4, 6, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];
        
        this.BossUp = [ // green 3, red 5, yellow 2
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 6, 4, 6, 4, 6, 6, 6 ],
            [ 6, 4, 5, 5, 4, 5, 5, 4, 6 ],
            [ 6, 6, 4, 4, 4, 4, 4, 6, 6 ],
            [ 6, 4, 2, 2, 4, 2, 2, 4, 6 ],
            [ 6, 4, 5, 2, 2, 2, 5, 4, 6 ],
            [ 6, 4, 5, 4, 6, 4, 5, 4, 6 ],
            [ 6, 6, 4, 4, 6, 4, 4, 6, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.BossRight = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 4, 4, 4, 6, 4, 6, 6 ],
            [ 6, 4, 5, 5, 2, 4, 5, 6, 6 ],
            [ 6, 4, 4, 2, 2, 4, 5, 4, 6 ],
            [ 6, 6, 6, 2, 4, 4, 4, 6, 6 ],
            [ 6, 4, 4, 2, 2, 4, 5, 4, 6 ],
            [ 6, 4, 5, 5, 2, 4, 5, 6, 6 ],
            [ 6, 6, 4, 4, 4, 6, 4, 6, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.BossDown = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 4, 4, 6, 4, 4, 6, 6 ],
            [ 6, 4, 5, 4, 6, 4, 5, 4, 6 ],
            [ 6, 4, 5, 2, 2, 2, 5, 4, 6 ],
            [ 6, 4, 2, 2, 4, 2, 2, 4, 6 ],
            [ 6, 6, 4, 4, 4, 4, 4, 6, 6 ],
            [ 6, 4, 5, 5, 4, 5, 5, 4, 6 ],
            [ 6, 6, 6, 4, 6, 4, 6, 6, 6 ],
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ]
        ];

        this.BossLeft = [
            [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
            [ 6, 6, 4, 6, 4, 4, 4, 6, 6 ],
            [ 6, 6, 5, 4, 2, 5, 5, 4, 6 ],
            [ 6, 4, 5, 4, 2, 2, 4, 4, 6 ],
            [ 6, 6, 4, 4, 4, 2, 6, 6, 6 ],
            [ 6, 4, 5, 4, 2, 2, 4, 4, 6 ],
            [ 6, 6, 5, 4, 2, 5, 5, 4, 6 ],
            [ 6, 6, 4, 6, 4, 4, 4, 6, 6 ],
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
                    this.boss = this.BossUp;
                    break;
                } // UP
                case this.dir.DOWN: 
                {
                    if(this.path.length != this.turns)
                    {
                        this.x += 1;
                    }
                    this.boss = this.BossDown;
                    break;
                } // DOWN
                case this.dir.LEFT:
                {
                    if(this.path.length != this.turns)
                    {
                        this.y -= 1;
                    }
                    this.boss = this.BossLeft;
                    break;
                } // LEFT
                case this.dir.RIGHT:
                {
                    if(this.path.length != this.turns)
                    {
                        this.y += 1;
                    }
                    this.boss = this.BossRight;
                    break;
                }
            }// switch
        this.Redraw();
    }// Move

    Redraw(){

        for(let i = 0; i < this.boss[0].length; i++) {
            for(let j = 0; j < this.boss[1].length; j++) {
                let val = this.boss[i][j];
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
