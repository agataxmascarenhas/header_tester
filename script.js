window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector("div").style.display = "block";
        },
        1000
    )
});



window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        3000
    )
});


// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });