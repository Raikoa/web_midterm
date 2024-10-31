class Square_header {
    static get inputProperties(){
        return ["--boxColor"];
    }

    paint(ctx,size,props){
        const x =0;
        const y = size.height * 0.5;
        const blockWidth = size.width*0.5 ;
        const highlightHeight = size.height * 0.85;
        const color = props.get("--boxColor");
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(blockWidth, y);
        ctx.lineTo(blockWidth + highlightHeight, highlightHeight);
        ctx.lineTo(x, highlightHeight);
        ctx.lineTo(x,y);
        ctx.closePath();
        ctx.fill();
        
        for(let start = 0; start <8; start += 2){
            ctx.beginPath();
            ctx.moveTo(blockWidth + start * 10 + 10, y);
            ctx.lineTo(blockWidth + start * 10 + 20, y);
            ctx.lineTo(
                blockWidth + start * 10 + 20 + highlightHeight,
                highlightHeight,
              );
            ctx.lineTo(
                blockWidth + start * 10 + 10 + highlightHeight,
                highlightHeight,
              );
            ctx.lineTo(blockWidth + start * 10 + 10, y);
            ctx.closePath();
            ctx.fill();
        }
    }
    
}

registerPaint('square_header', Square_header)


registerPaint("hollowHighlights", class{
    static get inputProperties(){
        return ["--boxColor"];
    }

    static get inputArguments() {
        return ["*", "<length>"];
    }

    paint(ctx, size, props, args){
        const x = 0;
        const y = size.height * 0.3;
        const blockWidth = size.width * 0.33;
        const blockHeight = size.height * 0.85;
        const color = props.get("--boxColor");
        const strokeType = args[0].toString();
        const strokeWidth = parseInt(args[1]);
        ctx.lineWidth = strokeWidth ?? 1.0;
        if(strokeType === "stroke"){
            ctx.fillStyle = "transparent";
            ctx.strokeStyle = color;
        } else if(strokeType === "filled"){
            ctx.fillStyle = color;
            ctx.strokeStyle= color;
        }else{
            ctx.fillStyle = "none";
            ctx.strokeStyle = "none"
        }
        ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + blockHeight, blockHeight);
      ctx.lineTo(x, blockHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // dashes
      for (let i = 0; i < 4; i++) {
        let start = i * 2;
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(blockWidth + start * 10 + 20 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
},
);



class Line_header {

    static get inputProperties(){
        return ['--number-of-circles'];
    }

    paint(ctx,size,props){
        for(var i =0;i < props.get('--number-of-circles') - 1;i++){
            let fraction = i*2;

            ctx.beginPath();
            ctx.fillStyle = 'hsla(2, 75%, 48%, 0.55)';
            ctx.arc(5 + fraction * 10, size.height - 10, 5, 0 ,2*Math.PI);
            ctx.fill();
        }

        ctx.beginPath();
        ctx.moveTo((props.get('--number-of-circles')-1) * 20, size.height -10);
        ctx.lineTo(size.width, size.height -10);
        ctx.stroke();
    }
}

registerPaint('Line_header', Line_header)