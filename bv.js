Vimg="";
status="";
objects=[];

    function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="Status:Detected Object";
    }
    
    function preload() {
    Vimg=loadImage("BedroomView.jpeg");
    }
    
    function modalLoaded(){
    console.log("Modal loaded!");
    status=true;
    objectDetector.detect(Vimg,gotResult);
    }

    function draw() {
        image(Vimg,0,0,640,420);
    }

    function gotResult(error,results) {
    if(error) {
    console.log(error);
    }
    console.log(results);
    objects=results;
    if(status != "")
        {
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
      
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
    }