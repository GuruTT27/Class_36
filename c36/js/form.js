class Form{

    constructor(){}

    display(){

        var title = createElement ('h1');
        title.html("Car Racing");
        title.position(250,50);

        var input = createInput("name");
        input.position(250,115);

        var button = createButton("Start");
        button.position(250,150);

        var greeting = createElement('h3');

        button.mousePressed(

            function(){

                input.hide();
                button.hide();

                var name = input.value();

                playerCount = playerCount + 1;
                player.update(name);
                player.updateCount(playerCount);

                greeting.html("Welcome "+ name);
                greeting.position(250,100)

            }

        );

    }

}