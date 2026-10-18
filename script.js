let image1 = document.getElementById('boy_run');
let image2 = document.getElementById('rain');
let image3 = document.getElementById('dog');
let gallery = document.getElementById('gallery');



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

    let currentStory = story1;
let currentStep = 0;

function highlightStep(){
    image2.classList.remove('active');
    image1.classList.remove('active');
    image3.classList.remove('active');
}

let step = currentStory[currentStep];
step.img.classList.add('active');


function startStory(story) {
    currentStory = story;
    currentStep = 0;
    gallery.appendChild(story[0].img);
    gallery.appendChild(story[1].img);
    gallery.appendChild(story[2].img);
    highlightStep();
}
 
function nextStep() {
    if (currentStep > 2) {
        currentStep = 0;
    }
    highlightStep();
}


document.getElementById('story-1').addEventListener('click', function() {
    startStory(story1);
});
document.getElementById('story-2').addEventListener('click', function() {
    startStory(story2);
});

document.getElementById('next').addEventListener('click', nextStep);

image1.addEventListener('click', function() {jumpToImage(image1); });
image2.addEventListener('click', function() {jumpToImage(image2); });   
image3.addEventListener('click', function() {jumpToImage(image3); });


startStory(story1);