
window.onload = function() {
var inputEnter = document.getElementsByClassName('form-control'); 

for (let index = 0; index < inputEnter.length; index++) {

    inputEnter[index].addEventListener('keyup', function(e){
    
        var count = document.getElementsByClassName('form-control')[index];
        if (count.value.length >= 1) {
            document.getElementById("save").disabled = false;
            document.getElementById("create").disabled = false;
        }
        else{
            document.getElementById("create").disabled = true;
            document.getElementById("save").disabled = true;
        }
        
    });

}

$('form').on('submit', async function (e) {

e.preventDefault();
var email = document.getElementById('email1');
var password = document.getElementById('pwd1');
// try {
//     var response = await createUser(email , password);
// } catch (error) {
//     console.log(error.message);
// }

var response = await createUser(email , password);



console.log(response);

// if (response.status == '400') {
//     $('#showErr').html(response.)
// }
console.log(response);
$('#signUpModal').modal('hide');
window.location.replace("http://localhost:3000/logged");

return false;

});

};

function  createUser(email , password) {
   
// return fetch("http://localhost:3000/user", 
//     { 
      
//     // Adding method type

//     method: "POST", 
      
//     // Adding body or contents to send 

//     headers :{
//         "content-type": "application/json"
//     },

//     body: JSON.stringify({
//         "userId" : email.value,
//         "password" : password.value
//     })
// });

fetch("http://localhost:3000/user", 
    { 
      
    // Adding method type

    method: "POST", 
      
    // Adding body or contents to send 

    headers :{
        "content-type": "application/json"
    },

    body: JSON.stringify({
        "userId" : email.value,
        "password" : password.value
    })
})
.then((response) => {
    if (response.ok) {
        console.log(response.json()); 
    }
})
.catch((error) => {
    console.log(error.message);
  });

}

// $(document).on("click", "#logout", function(){
//     $('#myModal1').modal('show')
// });

$(document).ready(function(){

$('#general').click(function(){
    $.ajax({
        type : "GET",
        url : "https://newsapi.org/v2/top-headlines?country=in&apiKey=1867b81a5c654dcda4d34721f7c90550",
        success : function(data){
            //ourData = JSON.parse();
            $('#details').css({ 'padding' : '10px 10px 10px 10px'});
            var ourData = JSON.parse(JSON.stringify(data))
            
            ourData.articles.forEach((element , index) => {
                var htmlTitle = '';

                htmlTitle = "<h3>" + element.title + "</h3>"; 


                htmlTitle += "<p>" + element.description + "</p>";
                htmlTitle += "<a href='" + element.url + "'>Go to details</a>";
            
                // console.log(htmlTitle);

                $('#details').append(htmlTitle);
            });

        }


    });

});

$('#sport').click(function(){
$.ajax({
    type : "GET",
    url : "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1867b81a5c654dcda4d34721f7c90550",
    success : function(data){
        //ourData = JSON.parse();
        $('#details').css({ 'padding' : '10px 10px 10px 10px'});
        $('#details').html('');
        var ourData = JSON.parse(JSON.stringify(data))
        
        ourData.articles.forEach((element , index) => {
            var htmlTitle = '';

            htmlTitle = "<h3>" + element.title + "</h3>"; 


            htmlTitle += "<p>" + element.description + "</p>";
            htmlTitle += "<a href='" + element.url + "'>Go to details</a>";
        
            // console.log(htmlTitle);

            $('#details').append(htmlTitle);
        });

    }

});

});

$('#business').click(function(){
    $.ajax({
        type : "GET",
        url : "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1867b81a5c654dcda4d34721f7c90550",
        success : function(data){
            //ourData = JSON.parse();
            $('#details').css({ 'padding' : '10px 10px 10px 10px'});
            $('#details').html('');
            var ourData = JSON.parse(JSON.stringify(data))
            
            ourData.articles.forEach((element , index) => {
                var htmlTitle = '';
               

                htmlTitle = "<h3>" + element.title + "</h3>"; 


                htmlTitle += "<p>" + element.description + "</p>";
                htmlTitle += "<a href='" + element.url + "'>Go to details</a>";
            
                // console.log(htmlTitle);

                $('#details').append(htmlTitle);
            });

        }


    });

});

    $('#health').click(function(){
        $.ajax({
            type : "GET",
            url : "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1867b81a5c654dcda4d34721f7c90550",
            success : function(data){
                $('#details').css({ 'padding' : '10px 10px 10px 10px'});
                //ourData = JSON.parse();
                $('#details').html('');
                var ourData = JSON.parse(JSON.stringify(data))
                
                ourData.articles.forEach((element , index) => {
                    var htmlTitle = '';
    
                    htmlTitle = "<h3>" + element.title + "</h3>"; 
    
    
                    htmlTitle += "<p>" + element.description + "</p>";
                    htmlTitle += "<a href='" + element.url + "'>Go to details</a>";
                
                    // console.log(htmlTitle);
    
                    $('#details').append(htmlTitle);
                });
    
            }

        });
    });

        $('#enter').click(function(){
            $.ajax({
                type : "GET",
                url : "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1867b81a5c654dcda4d34721f7c90550",
                success : function(data){
                    $('#details').css({ 'padding' : '10px 10px 10px 10px'});
                    //ourData = JSON.parse();
                    $('#details').html('');
                    var ourData = JSON.parse(JSON.stringify(data))
                    
                    ourData.articles.forEach((element , index) => {
                        var htmlTitle = '';
        
                        htmlTitle = "<h3>" + element.title + "</h3>"; 
        
        
                        htmlTitle += "<p>" + element.description + "</p>";
                        htmlTitle += "<a class='link' href='" + element.url + "'>Go to details</a>";
                    
                        // console.log(htmlTitle);
        
                        $('#details').append(htmlTitle);
                    });
        
                }
        
        
    });
});

$('#logout').click(function(){
    swal("Are you sure you want to logout?", {
        // buttons: ["Yes", 'No'],
        buttons: {
            cancel : "No",
            confirm : "Yes"
        }
      }).then((val)=> {
          if(val){
        window.location.replace("http://localhost:3000/");
          }
      });
})

});