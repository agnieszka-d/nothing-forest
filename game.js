var game = new Game(create, update);
var cursors;
var DEFAULT_SPEED = 100
var DEFAULT_GRAVITY = 100


function create() {
    game.setGravity(DEFAULT_GRAVITY);
    for (var x=0; x < 5; x++) {
        //dostuff with x
        game.addPlayer(100, 100);
    }
    cursors = game.input.keyboard.createCursorKeys();
}

var move_table = {
    up: "moveUp",
    down: "moveDown",
    right: "moveRight",
    left: "moveLeft"
}

//move_table[direction]()

function update() {
    
    
    for (var direction in move_table) {
        if (cursors[direction].isDown) {
            
            var move_fn = move_table[direction]
            
            game.players[0].body[move_fn](100);
        }
    }
}





/*
for (var direction in move_table) {
        if (cursor[direction].isDown){
            game.players[0].body[move_table[direction]](20);
        }
    }


function update() {
    if (cursors.up.isDown) {
        game.players[0].body.moveUp(100);
    }
    if (cursors.down.isDown) {
        game.players[0].body.moveDown(100);
    }
    if (cursors.left.isDown) {
        game.players[0].body.moveLeft(100);
    }
    if (cursors.right.isDown) {
        game.players[0].body.moveRight(100);
    }
    
}
*/
