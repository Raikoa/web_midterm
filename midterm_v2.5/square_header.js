class Square_header {
    static get inputProperties(){
        return ["--boxColor"];
    }

    paint(ctx,size,props){
        const x =20;
        const y = (size.height * 0.4);
        const blockWidth = size.width*0.8;
        const highlightHeight = size.height * 0.7;
        const color = props.get("--boxColor");
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(blockWidth, y);
        ctx.lineTo(blockWidth + highlightHeight, highlightHeight);
        ctx.lineTo(x, highlightHeight);
        ctx.lineTo(x-20,y);
        ctx.closePath();
        ctx.fill();
        
        for(let start = 0; start <8; start += 2){
            ctx.beginPath();
            ctx.moveTo(blockWidth + start * 20 + 10, y);
            ctx.lineTo(blockWidth + start * 10 + 20, y);
            ctx.lineTo(
                blockWidth  + start * 10 + 20 + highlightHeight,
                highlightHeight,
              );
            ctx.lineTo(
                blockWidth + 20 + start * 10 + 10 + highlightHeight,
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
        return ["--boxColor", "--number-of-dashes"];
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
        const dashes = props.get("--number-of-dashes");
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
      for (let i = 0; i < dashes; i++) {
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

class pageborder{
    static get inputProperties(){
        return ['--colorLeaf'];
    }
    paint(ctx,size,props){
        const color = props.get("--colorLeaf");
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const x = size.width/30;
        ctx.moveTo(x,55);
        ctx.lineTo(x,size.height-12);
        ctx.stroke();
        ctx.closePath();
        let i = 55;
        while(i <= size.height-10){
            ctx.beginPath();
            ctx.moveTo(x,i);
            ctx.lineTo((x+10),i+10);
            ctx.stroke();
            i = i+5;
        }
        i=55;
        while(i <= size.height-10){
            ctx.beginPath();
            ctx.moveTo(x,i);
            ctx.lineTo(x-10,i+10);
            ctx.stroke();
            i = i+5;
        }
        ctx.beginPath();
        ctx.moveTo(size.width-x,55);
        ctx.lineTo(size.width-x,size.height-12);
        ctx.stroke();
        ctx.closePath();
        let j = 55;
        while(j <= size.height-10){
            ctx.beginPath();
            ctx.moveTo(size.width-x,j);
            ctx.lineTo((size.width-x+10),j+10);
            ctx.stroke();
            j = j+5;
        }
        j=55;
        while(j <= size.height-10){
            ctx.beginPath();
            ctx.moveTo(size.width-x,j);
            ctx.lineTo(size.width-x-10,j+10);
            ctx.stroke();
            j = j+5;
        }
    }
}

registerPaint('body_border', pageborder)


class leaf{
    static get inputProperties(){
        return['--colorLeaf','--NumLeaf'];
    }
    paint(ctx, size, props) {

        ctx.save();
        const color = props.get('--colorLeaf');
        const num = props.get('--NumLeaf');
        const leafSize = 40;  // Replace this with a specific size or dynamic value
        let dir = 1;
        let h = size.height/2;
        let w = size.width/2;
        for(let i = 0;i<4;i++){
            ctx.translate(w, h); // Position the leaf in the center or desired coordinates
            ctx.scale(leafSize, leafSize);  // Scale according to leafSize
            ctx.fillStyle = color;
            // Draw the leaf shape
            ctx.beginPath();
            ctx.moveTo(dir, -0.7);
            ctx.bezierCurveTo(dir, -0.7, 0.4 * dir, -1, 0, 0);
            ctx.bezierCurveTo(0, 0, dir, 0.4, dir, -0.7);
            ctx.fill();
            ctx.restore();
            dir = -dir;
            h += 20;
            w -= 10;
        }

    }
}

registerPaint('fallen_leaf', leaf)


