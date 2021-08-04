
class Player
{
    constructor()
    {
        this.dir = { // change to 1,2 later
            LEFT: 1,
            RIGHT: 2
        }
        this.direction = this.dir.RIGHT;
        this.moveCount = 0;
        this.ship = [
            [37, 1], 
            [38, 0],
            [38, 1],
            [38, 2] ];

        this.path = [ // [moves, dir]
            [1, 2], [1, 2], [1, 2], [1, 2], 
                [2, 1], [1, 1], [1, 1],
                [1, 1], [1, 1], [1, 1],
                [1, 1], [1, 1], [1, 1],
                [1, 2], [1, 2], [1, 2],
                [1, 2], [1, 2], [1, 2],
                [1, 2], [1, 2], [1, 2], // 22
                [1, 1], [1, 1], [1, 1],
                [1, 1], [1, 1], [1, 1],
                [1, 1], [1, 1], [1, 1],
                [1, 1], [1, 1], [1, 1],
                [1, 1], [1, 1] // 36

            ];
    }//constructor()

    Move()
    {
        switch(this.direction)
        {
            case this.dir.LEFT:
            {
                for(let i = 0; i < 4; i++)
                {
                    this.ship[i][1] -= 1;
                }
                break;
            }
            case this.dir.RIGHT:
            {
                for(let i = 0; i < 4; i++)
                {
                    this.ship[i][1] += 1;
                }
                break;
            }
        } // switch
    }// Move()

    GetPos()
    {
        return this.ship;
    }

}//class