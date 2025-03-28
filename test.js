//Client side
/*
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitButton").addEventListener("click", Submit);
});

function Submit(){
    let submitValue = document.getElementById("submit").value;
    fetch('PutFirebaseCloudFunctionPath', {
        method: 'POST',
        body: JSON.stringify({ data: submitValue})
    }).then(response => response.json()).then(data =>TestResult(data));
}

function TestResult(data){
    if(data.message == "Correct"){
        DisplayCorrect();
    }
    else{
        DisplayIncorrect();
    }
}

function DisplayCorrect(){

}

function DisplayIncorrect(){

}


//Server side
const functions = require('firebase-functions');

exports.myFunction = functions.https.onRequest((req, res) => {
    const data = req.body.data;
    if(data == "GetDataBaseEntryHere"){
        res.json({message: 'Correct'});
        return;
    }
    res.json({message : "Incorrect"});
})
    */