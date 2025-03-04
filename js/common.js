let isOver1 = false;
let isOver2 = false;
function goHide1() {
    if (!isOver1 && !isOver2) {
        const menu = document.querySelector('.gnb_depth2_1');
        menu.style.display = 'none';
    }
}

let isOver11 = false;
let isOver22 = false; 
function goHide2() {
    if (!isOver11 && !isOver22) {
        const menu = document.querySelector('.gnb_depth2_2');
        menu.style.display = 'none';
    }
}

let isOver111 = false;
let isOver222 = false;
function goHide3() {
    if (!isOver111 && !isOver222) {
        const menu = document.querySelector('.gnb_depth2_3');
        menu.style.display = 'none';
    }
}

let isOver1111 = false;
let isOver2222 = false;
function goHide4() {
    if (!isOver1111 && !isOver2222) {
        const menu = document.querySelector('.gnb_depth2_4');
        menu.style.display = 'none';
    }
}

let isOver11111 = false;
let isOver22222 = false;
function goHide5() {
    if (!isOver11111 && !isOver22222) {
        const menu = document.querySelector('.gnb_depth2_5');
        menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Top button visibility
    const toTop = document.querySelector('.to_top');
    if (document.documentElement.scrollTop < 50) toTop.classList.add('hide');
    else toTop.classList.remove('hide');
    
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop < 50) toTop.classList.add('hide');
        else toTop.classList.remove('hide');
    });

    // Menu handlers
    function setupMenu(openBtn, menu, isOver1Var, isOver2Var, hideFunc) {
        openBtn.addEventListener('mouseover', function() {
            if (document.querySelector('header').offsetWidth > 800) {
                menu.style.display = 'block';
            }
            window[isOver1Var] = true;
        });

        openBtn.addEventListener('focus', function() {
            if (document.querySelector('header').offsetWidth > 800) {
                menu.style.display = 'block';
            }
            window[isOver1Var] = true;
        });

        openBtn.addEventListener('mouseout', function() {
            window[isOver1Var] = false;
            setTimeout(hideFunc, 200);
        });

        menu.querySelector('li:last-child a').addEventListener('blur', function() {
            window[isOver1Var] = false;
            setTimeout(hideFunc, 200);
        });

        menu.addEventListener('mouseover', function() {
            window[isOver2Var] = true;
        });

        menu.addEventListener('focus', function() {
            window[isOver2Var] = true;
        });

        menu.addEventListener('mouseout', function() {
            window[isOver2Var] = false;
            setTimeout(hideFunc, 200);
        });

        menu.addEventListener('blur', function() {
            window[isOver2Var] = false;
            setTimeout(hideFunc, 200);
        });
    }

    // Setup each menu
    setupMenu(
        document.querySelector('.openAll1'),
        document.querySelector('.gnb_depth2_1'),
        'isOver1',
        'isOver2',
        goHide1
    );

    setupMenu(
        document.querySelector('.openAll2'),
        document.querySelector('.gnb_depth2_2'),
        'isOver11',
        'isOver22',
        goHide2
    );

    setupMenu(
        document.querySelector('.openAll3'),
        document.querySelector('.gnb_depth2_3'),
        'isOver111',
        'isOver222',
        goHide3
    );

    setupMenu(
        document.querySelector('.openAll4'),
        document.querySelector('.gnb_depth2_4'),
        'isOver1111',
        'isOver2222',
        goHide4
    );

    // Mobile menu
    document.querySelector('.openMOgnb').addEventListener('click', function() {
        const header = document.querySelector('header');
        const headerCont = document.querySelector('.header_cont');
        const closePop = document.querySelector('.closePop');
        
        header.classList.add('on');
        headerCont.style.display = 'block';
        closePop.style.display = 'block';
        
        document.body.style.overflow = 'hidden';
    });

    document.querySelector('.closePop').addEventListener('click', function() {
        const header = document.querySelector('header');
        const headerCont = document.querySelector('.header_cont');
        
        headerCont.style.display = 'none';
        header.classList.remove('on');
        document.body.style.overflow = '';
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        const headerCont = document.querySelector('.header_cont');
        if (document.querySelector('header').offsetWidth > 800) {
            headerCont.style.display = 'block';
        }
    });

    // Program more/less buttons
    document.querySelectorAll('.program_list li .btn_more a').forEach(btn => {
        btn.addEventListener('click', function() {
            const subtxt = this.parentElement.parentElement.querySelector('.subtxt');
            if (subtxt.style.display === 'none') {
                subtxt.style.display = 'inline';
                this.textContent = '접기';
            } else {
                subtxt.style.display = 'none';
                this.textContent = '더보기';
            }
        });
    });
});
