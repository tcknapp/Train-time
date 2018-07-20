
//Firebase ver

var config = {
        apiKey: "AIzaSyCxPsBIThIwPZGKlBPuiPZaF_CqsfcQmHs",
        authDomain: "fir-1-69ad9.firebaseapp.com",
        databaseURL: "https://fir-1-69ad9.firebaseio.com",
        projectId: "fir-1-69ad9",
        storageBucket: "fir-1-69ad9.appspot.com",
        messagingSenderId: "220023988461"
      };
      firebase.initializeApp(config);

    var database = firebase.database();

    //variables for form
    var trainName= "";
    var destination= "";
    var firstTrainTime= "";
    var frequency= "";


    $('#submit').on('click', function(event){
        event.preventDefault();
        console.log(event);

        trainName = $('#trainName').val().trim();
        destination = $('#destination').val().trim();
        firstTrainTime = $('#firstTrainTime').val().trim();
        frequency = $('#frequency').val().trim();

        database.ref().push({
            train: trainName,
            destination : destination,
            trainTime: firstTrainTime,
            frequency: frequency,
        });

        return false;
    }); 

    database.ref().on("child_added", function(childSnapshot) {

    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // Change the HTML to reflect
        $("#trainName").text(snapshot.val().trainName);
        $("#destination").text(snapshot.val().destination);
        $("#firstTrainTime").text(snapshot.val().firstTrainTime);
        $("#frequency").text(snapshot.val().frequency);
      });
