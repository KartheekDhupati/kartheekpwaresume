// function Loadjson(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// Loadjson("data.json", function(text)
// {
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   Careerinfo(data.Career);
//   Educationalqulifications(data.Education);
//   Skills(data.Skills);
//   achive(data.Achievments);
// }
// )

function Loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'))
      }
    })
  })

}
var newfile= Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
   basics(data.details);
   Careerinfo(data.Career);
   Educationalqulifications(data.Education);
   Skills(data.Skills);
   achive(data.Achievments);
})

var childone = document.querySelector(".childone");
function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  childone.appendChild(image);

  var n = document.createElement("h1");
  n.textContent = det.name;
  childone.appendChild(n);

  var nu = document.createElement("h3");
  nu.textContent = det.number;
  childone.appendChild(nu);

  var email = document.createElement("a");
  email.href="mailto:vamsi789@gmail.com";
  email.textContent=det.email;
  childone.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address:";
  childone.appendChild(add);

  var h = document.createElement("hr");
  childone.appendChild(h);

  var p = document.createElement("p");
  p.textContent=det.Address;
  childone.appendChild(p);
}
var childtwo = document.querySelector(".childtwo");
function Careerinfo(info){

  var heading = document.createElement("h2");
  heading.textContent="Career Objective:"
  childtwo.appendChild(heading);

  var h = document.createElement("hr");
  childtwo.appendChild(h);

  var c = document.createElement("p");
  c.textContent = info.info;
  childtwo.appendChild(c);
}

  function   Educationalqulifications(e) {

  var eq = document.createElement("h2");
  eq.textContent="Educational Qulifications:"
  childtwo.appendChild(eq);

  h=document.createElement("hr");
  childtwo.appendChild(h);

  var table1=document.createElement("table");
  table1.border = "1";
  childtwo.appendChild(table1);

  tabledata="";
  for(i=0;i<e.length;i++){
    tabledata+="<tr><td>"+e[i].Qulification+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Year+"</td><td>"+e[i].Percentage+"</td></tr>";

  }
  table1.innerHTML=tabledata;

  var ts=document.createElement("h2");
  ts.textContent="Technicai Skills:"
  childtwo.appendChild(ts);

  h=document.createElement("hr");
  childtwo.appendChild(h);

}
function Skills(skillsinfo) {

for(i=0;i<skillsinfo.length;i++){
  var title = document.createElement("h4");
  title.textContent=skillsinfo[i].title;
  childtwo.appendChild(title);

  var eduul = document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent=skillsinfo[i].info;
  eduul.appendChild(eduli);
  childtwo.appendChild(eduul);
}
}

function achive(ach){
  var hd=document.createElement("h4");
  hd.textContent="Achievments:";
  childtwo.appendChild(hd);


  for(i=0;i<ach.length;i++){

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=ach[i];
    eduul.appendChild(eduli);
    childtwo.appendChild(eduul);
  }
}
function openpage() {
  window.open("resume1.html","_self",true)

}
