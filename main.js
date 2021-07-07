
function setup(){
canvas=createCanvas(350,350);
canvas.position(550,250);
video=createCapture(VIDEO);
video.hide();
console.log(ml5.version);
imageIndentifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EGh79W52Q/model.json",modelLoaded);
imageIndentifier.classify(video,gotResult);
}
function draw(){
image(video,0,0,350,350);
}
function modelLoaded(){
console.log("Great Job...your model is working😁");
}
function gotResult(Error,Result){
if (Error) {
console.log(Error);    
}
else{
console.log(Result);

}
}