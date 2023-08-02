// https://teachablemachine.withgoogle.com/models/kQXruY35K/
 Webcam.set({
width:350,
height: 300,
image_format : 'png',
png_quality: 90


 })
 camera = document.getElementById("camera");
 Webcam.attach('#camera');

 function captureImage()
 {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
 });

 }

 console.log('ml5 version', ml5.version);
 //ml5.js helps to work with different models and do a comparison between our input.
 // It compares with the model and gives the result.
 // It provides pretained model which detects image from video or webcam live preview. 
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kQXruY35K/model.json', modelLoaded);
 //Image classifier is a preefined function of the library that is used to perform image classification using a pretained model.
 function modelLoaded(){
console.log('modelLoaded')
 }

 function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
 }

 function gotResult(error, results){
    if (error){
        console.log(error);

    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById["result_object_accuracy"].innerHTML = (results[0].confidence*100).toFixed(3)+ "%";
    }
 }
