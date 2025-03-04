let wnum = 0;
let wwslidingAuto = null;

function play_w(directw) {
    if(directw === "right") {
        wnum++;
        if(wnum > 2) wnum = 0;
    } else if(directw === "left") {
        wnum--;
        if(wnum < 0) wnum = 2;
    } else {
        wnum = directw;
    }

    // Reset all buttons to off state
    document.querySelectorAll('.rollingbtn li.seq a img').forEach(img => {
        img.src = img.src.replace('_on.png', '_off.png');
    });

    // Set active button
    document.querySelector(`.rollingbtn li.butt${wnum} a img`).src = 
        document.querySelector(`.rollingbtn li.butt${wnum} a img`).src.replace('_off.png', '_on.png');

    // Handle image animations
    const images = document.querySelectorAll('.viewImgList li');
    images.forEach((img, index) => {
        img.style.transition = 'opacity 1s';
        img.style.opacity = index === wnum ? '1' : '0';
    });

    if(wwslidingAuto) clearTimeout(wwslidingAuto);
    wwslidingAuto = setTimeout(() => play_w('right'), 6000);
}

wwslidingAuto = setTimeout(() => play_w('right'), 6000);

document.addEventListener('DOMContentLoaded', function() {
    // Stop button handler
    document.querySelector('.rollstop a').addEventListener('click', function() {
        this.parentElement.style.display = 'none';
        document.querySelector('.rollplay').style.display = 'inline-block';
        if(wwslidingAuto) clearTimeout(wwslidingAuto);
    });

    // Play button handler
    document.querySelector('.rollplay a').addEventListener('click', function() {
        this.parentElement.style.display = 'none';
        document.querySelector('.rollstop').style.display = 'inline-block';
        play_w('right');
    });

    // Sequence button handlers
    document.querySelectorAll('.rollingbtn li.seq a').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            document.querySelector('.rollplay').style.display = 'none';
            document.querySelector('.rollstop').style.display = 'inline-block';
            if(wwslidingAuto) clearTimeout(wwslidingAuto);
            play_w(index);
        });
    });
});