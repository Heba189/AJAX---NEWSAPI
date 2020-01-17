var httpReq = new XMLHttpRequest();
var allData = [];
var categeory ="general";
var links = document.querySelectorAll(".nav-link");

//call function 
getData(categeory);
//get input text from user by click on nav
for(var i=0 ;i<links.length ; i++){
    links[i].addEventListener('click',function(e){
      categeory =  e.target.text;
        //return input change at getData
      getData(categeory);
    })
}

//but user choice 

function getData(categeory){
    
httpReq.open("GET" , "https://newsapi.org/v2/top-headlines?country=us&category=" + categeory + "&apiKey=c5396e5991ca4cfaa9816ff9ffd0cda8");

httpReq.send();


httpReq.onreadystatechange =function(){ 

    if(httpReq.readyState == 4 && httpReq.status ==200){
       allData =JSON.parse(httpReq.response).articles;
       displayData();
    }
}
}


function displayData(){
    var temp =``;
    for (var i=0 ; i<allData.length ; i++ ){
        temp += `
        <div class="col-md-3">
            <div class="item shadow p-3 mb-5 bg-white ">
                <img src="`+allData[i].urlToImage+`" class="img-fluid">
                <h5>`+allData[i].title+`</h5>
                <p>`+allData[i].description+`</p>
            </div>
        </div>
        
        `;
    }
    document.getElementById("rowData").innerHTML = temp;
}