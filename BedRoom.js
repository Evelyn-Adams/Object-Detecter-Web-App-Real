img="";
status="";
objects=[];

function preload(){
img=loadImage('BedRoom.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";

}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error();
    }
console.log(results);
objects=results;

}
function draw(){
    
if(status != ""){
    image(img,0,0,640,420);
for(i=0; i < objects.length ;i++){
    document.getElementById("status").innerHTML="Status : Object Detected";
fill("#ff0000");
percentage=floor(objects[i].confidence*100);
noFill()
stroke("#ff0000");
label=objects[i].label;
x=objects[i].x;
y=objects[i].y;
width=objects[i].width;
height=objects[i].height;
text(label+" "+percentage+"%",x+15,y+15);
rect(x,y,width,height);
document.getElementById("status").innerHTML="Object is detected";

}

}
}
