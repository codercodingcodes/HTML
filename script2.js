 
function Text() {
    console.log("button Clicked");
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("yOu hAvE g0nE tOo fR");
    
    btn.appendChild(t);
    document.body.appendChild(btn);
    $( document ).ready(function() {
    
    var Munchkins = "<button> The One </button>"
    
    $("body").append(Munchkins);
    
    $("button").click(function(){
        alert("haCker");
         $("html").toggleClass("Cr");
         $("img").slideToggle();
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("yOu hAvE g0nE tOo fR");
        btn.appendChild(t);
        document.body.appendChild(btn);
          $("button").toggleClass("r");
            $(".r").click(function(){
            alert("haCker");
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("yOu hAvE g0nE tOo fR");
            btn.appendChild(t);
            document.body.appendChild(btn);
              $("html").toggleClass("Cr");
                $("img").slideToggle();
          })
        
    })
    console.log("AYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
});

}

function Deac(){
    $( document ).ready(function(){
        $(".active").toggleClass("active");
    })
}

function Nav1(){
    console.log("working");
$( document ).ready(function(){
     $(".there").toggleClass("active");
})
}

function Nav2(){
    console.log("working");
$( document ).ready(function(){
     $(".bere").toggleClass("active");
})
}

function Nav3(){
    console.log("working");
$( document ).ready(function(){
     $(".Home").toggleClass("active");
})
}

function Nav4(){
    console.log("working");
$( document ).ready(function(){
     $(".here").toggleClass("active");
})
}
