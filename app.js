const form = document.querySelector('#memeform');
const imgURL = document.querySelector('input[name=baseurl]');
const topTxt = document.querySelector('input[name=toptext]');
const btmTxt = document.querySelector('input[name=bottomtext]');
const memeBoard = document.querySelector('#memeboard');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(
        imgURL.value,
        topTxt.value,
        btmTxt.value
    );

    memeBoard.appendChild(newMeme);
    reset();
    
});


function makeMeme(url, txtT, txtB){
    // create  container div for meme
    let meme = document.createElement('div');
    meme.classList.add('img-responsive');
    meme.classList.add('img-responsive:hover.overlayImg');

    // Generate img
    let img = document.createElement('img');
    img.classList.add('meme-img')
    img.src = url;
    meme.appendChild(img);

    

    // generate top text 
    let txtTop = document.createElement('div');
    txtTop.classList.add('top');
    txtTop.innerText = txtT;
    meme.appendChild(txtTop);

    // generate bottom text 
    let txtBtm = document.createElement('div');
    txtBtm.classList.add('bottom');
    txtBtm.innerText = txtB;
    meme.appendChild(txtBtm);

    //delete transition image       
    let overlayImg = document.createElement('img');
    overlayImg.classList.add('overlayImg');
    overlayImg.src = 'xout.png';

    meme.appendChild(overlayImg); 
    return meme;
}

function reset(){
    imgURL.value = "";
    topTxt.value = "";
    btmTxt.value = "";
}

memeBoard.addEventListener('click', function(e){
    console.log(e.target, e);
    if(e.target.className === ('overlayImg')){
        e.target.parentNode.remove();
    }
});

