var player1=0
    var player2=0
    var tie=0
    var turn=2

    function checkwinner(){
    $(".row-1 .box.X").length ===3
    $(".row-2 .box.X").length ===3
    $(".row-3 .box.X").length ===3
    $(".col-1 .box.X").length ===3
    $(".col-2 .box.X").length ===3
    $(".col-3 .box.X").length ===3
    $(".col-4 .box.X").length ===3

        console.log("Working")
    }
    
    




    $(".box").click(function(){
        if (turn===1){
        $(this).text("X");
        $(this).addClass("X")
        turn=2;
        $("#turn").text(2)
        checkwinner();
        }
        else   
        {
    $(this).text("0")
    $(this).addClass("0")
    turn=1
    $("#turn").text(1)
        }
    });


