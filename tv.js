img ="";
stats ="";
object = [];
function preload(){
    img = loadImage('istockphoto-1067236646-170667a.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelloaded(){
    console.log("model is loaded");
    stats = true;
    objectDetector.detect(img,gotresults)
}

function back(){
    window.location = "index.html";
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function draw(){
    image(img,0,0,640,420);
    if(stats != ""){
        for(i=0; i<object.length; i++){
         document.getElementById("status").innerHTML="Status: Detecting Objects";
         fill("#ff0000");
         percent = floor(object[i].confidence*100);
         text(object[i].label+" "+percent+" % ",object[i].x+15,object[i].y+15);
         noFill();
         stroke("#ff0000");
         rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}