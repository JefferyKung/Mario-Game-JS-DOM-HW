var elemDiv = document.createElement('div');
document.body.appendChild(elemDiv);
var score=-1
// elemDiv.innerHTML='<p>Score:</p>'+score;

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width

	);

    // score +=1;
}

const init = () => {
    //get the avatar
    const avatar = document.querySelector("#avatar")
    //get the coin
    const coin = document.querySelector("#coin")

    moveCoin();

    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }
        if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -50);
            avatar.style.transform = "scale(-1,1)"
        }if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 50);
            avatar.style.transform = "scale(1,1)"
        }

        if(isTouching(avatar,coin))moveCoin();
           
    
    });

}



const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);

    if(currTop + amount < window.innerHeight -100 && currTop+ amount>= 0){
        element.style.top = `${currTop + amount}px`;
    }
    
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);

    if(currLeft + amount < window.innerWidth -100 && currLeft+ amount>= 0){
        element.style.left = `${currLeft + amount}px`;
    }
    
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)
    // const y = ?
    coin.style.top = `${y-100}px`;
    coin.style.left = `${x-100}px`;
    // coin.style.?? = ??
    score+=1;
    console.log(score);
    elemDiv.innerHTML='<p>Score:</p>'+score;

}




init();


elemDiv.style.cssText='position:fixed;top:0%;left:5%;'

// if (moveCoin()){
//     return score = score +1;

// }
