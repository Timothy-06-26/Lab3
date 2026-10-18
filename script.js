let image1 = document.getElementById('boy_run');
let image2 = document.getElementById('rain');
let image3 = document.getElementById('dog');
let caption = document.getElementById('caption');


let allImages = [image1, image2, image3];

//Each Story uses the same 3 in different order

let story1 = [
    {img: image2},
    {img: image1},
    {img: image3}
];

let story2 = [{img:image3},
     {img:image2},
      {img:image1}
    ];

function story1(){
    image2.style.display = 'block';
    image1.style.display = 'none';
    image3.style.display = 'none';
}


function secondstory() {
    image3.style.display = 'none';
    image2.style.display = 'block';
    image1.style.display = 'none';
}

document.getElementById('story-1').addEventListener('click', firststory);
document.getElementById('story-2').addEventListener('click', secondstory);


firststory();