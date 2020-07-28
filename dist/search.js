var pr;
var getName = [];
var getWebAddress = [];
var getCount = [];

var toHTML = '';

function logToConsole(data) {
  console.log(data);

  for (var a = 0; a < data.length; a++) {
    var turn = data[a];
    var turn_page = turn["web_pages"];
    var turn_name = turn["name"];
    var turn_count = turn["country"];
    var turn_state = turn["state-province"];
    // turn_page='<a href=${turn_page}> </a>';  
    getName.push(turn_name);
    getWebAddress.push(turn_page);
    getCount.push(turn_count);

  }

  $('#content').empty();
  var item;
  var item_url;
  var item_count;

  for (var im = 0; im < getName.length; im++) {
    item = getName[im];
    item_url = getWebAddress[im];
    item_count = getCount[im];


    //add to HTML
    toHTML += `<li>${item}
                    <ol>
                      <li>${item_count} </li>
                      <li><a href=${item_url}>${item_url} </a> </li>
                      
                    </ol>
                </li>`;
  }
  
  var EntireList = `<b><ol>${toHTML}</ol></b>`;
  toHTML = '';
  getCount = [];
  getWebAddress = [];
  getName = [];
  item_count = '';
  item_url = '';
  item = 0;
  $('#content').html(EntireList);
  $('#loading').hide();
  EntireList = '';

}
var abb = 0;
function findUniv() {
  var searcht = $("#univS").val();
  var co = $("#country").val();
  if (co === "us" || co === "US" || co === "USA" || co === "usa") {
    co = 'united states';
  }
  console.log(searcht);
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search' + '?name=' + searcht + "&country=" + co,
    type: 'GET',
    success: data => logToConsole(data),

  });
}

function emptyy() {
  $('#content').empty();
}

$('#search').click(emptyy);
$('#search').click(findUniv);
$('#loading').hide();
$('#search').click(showImage);

function showImage() {
  var x = document.getElementById("loading");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


