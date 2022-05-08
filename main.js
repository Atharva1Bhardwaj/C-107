function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XfCOQk-Iq//model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}