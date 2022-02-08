let API = "https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=00";

let ts = '&ts=1';
let hash = '&hash=656907feb45c10c2b779515ab9d9b0d9';
let apikey = '&apikey=3b7e4ad539224c94766c6952cbd090c8';


let characters = document.getElementById("characters");

// let next = document.getElementById("btn-next");
// let previus = document.getElementById("btn-previus");
// let actual = document.getElementById("actual-pagination");

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      fillData(result.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};


let fillData = (data) => {
  console.log(data);
  data.forEach(element => {
    console.log(element);
    let item = "";
    const { name, thumbnail } = element;
    item += '<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-4">';
    item += '<div class="card h-100">';
    item += `<img src="${thumbnail.path}.jpg" class="card-img-top superh">`;
    item += '<div class="bg-secondary card-footer">';
    item += `<h4 class="text-gray text-center"><a href="" class="text-link">${name}</a></h4>`;
    item += "</div>";
    item += "</div>";
    item += "</div>";
    characters.innerHTML += item;
  });
};

const init = () => {
  let APIUrl = API + ts + hash + apikey;
  console.log(APIUrl);
  getAPI(APIUrl);
};

init();