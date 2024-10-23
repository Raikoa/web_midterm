function changeText(){
    var t = document.getElementById("e");
    t.innerHTML = "works";
}

registerPaint(
    "headerUnderLine",
    class{
        static get contextOptions(){
            return {alpha: true};
        }

        paint(ctx){
            ctx.fillStyle = "hs1(55 90% 60% / 100%)";
            ctx.fillRect(0, 15, 200, 20);
        }
    },
);