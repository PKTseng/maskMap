
// function renderDay() {
//   let dataBase = new Date();
//   let Day = dataBase.getDay();
//   let chineseDay = judgeDay(Day);
//   let thisDay = dataBase.getFullYear() + '-' + (dataBase.getMonth()+1)+'-'+dataBase.getDate();
//   document.querySelector('h1').textContent = chineseDay;
//   document.querySelector('h2').textContent = thisDay;

//   if (Day ==1 || Day == 3 || Day == 5) {
//     document.querySelector('.odd').style.display = 'block';
//   } else if (Day == 2 || Day == 4 || Day == 6) {
//     document.querySelector('.even').style.display = 'block';
//   }
// }

// function judgeDay(day) {
//   if(day==2){
//     return"二"
//   }
// }

// function init(){
//   renderDay() 
//   renderList()
// }

// function renderList() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json');
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.responseText);
    
//   }
// }

// init()

function renderDay(){
  let dataBase = new Date();
  let Day = dataBase.getDay();
  let chinaDay = judgeDay(Day);
  let thisDate = dataBase.getFullYear()+'-'+(dataBase.getMonth()+1)+'-'+dataBase.getDate();
  document.querySelector('h1').textContent = chinaDay;
  document.querySelector('h2').textContent = thisDate;

  if (Day==1 || Day==3 || Day==5) {
    document.querySelector('.odd').style.display = "block"
    }
    else if (Day == 2 || Day == 4 || Day == 6){
      document.querySelector('.even').style.display = "block"
    }
} 

function judgeDay(day) {
  if (day == 2) {
    return "二"
  }
}

var data
function getData() {
  let xhr = new XMLHttpRequest();
  xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json');
  xhr.send();
  xhr.onload = function () {
    // console.log(xhr.responseText);
    data = JSON.parse(xhr.responseText);
    renderList();
  }
}

function renderList() {
  let ary = data.features;
  let str = '';
  for (let i = 0; i < ary.length; i++) {
    str += '<li>' + ary[i].properties.name +"，剩下口罩數量:"+ ary[i].properties.mask_adult+'<li>';
    
  }
  document.querySelector('.list').innerHTML = str;
}



function init() {
  renderDay()
  getData()
}



init()