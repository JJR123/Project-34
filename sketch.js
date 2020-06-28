var canvas;
var database, position; 
var drawing = []; 
var currentPath= [];

function setup(){
    canvas=createCanvas(500,500); 
    canvas.mousePressed(startPath);
    
   database=firebase.database();  
} 

function startPath(){ 
    currentPath=[]; 
    drawing.push(currentPath);
} 

//function endPath(){ 
   
//}
function draw(){
   background(0); 
    
   
    if (mouseIsPressed){ 
        var point ={ 
            x: mouseX, 
            y: mouseY
        }
       currentPath.push(point); 

    }

stroke("cyan"); 
strokeWeight(4); 
noFill(); 
for(var i=0; i<drawing.length; i++ ){  
    var path = drawing[i];
    beginShape(); 
    for(var j=0; j<path.length; j++ ){ 
    vertex(path[j].x, path[j].y)
  }   
  endShape();  
} 
 
} 
