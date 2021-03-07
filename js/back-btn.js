const backBtn = (selector) => {
    const btnRayon = 50;
    const btnLineWidth = 2;

    const canvas = document.querySelector(selector);
    const context = canvas.getContext('2d');

    canvas.width = btnRayon*2;
    canvas.height = btnRayon*2;
    let mousePos = {};

    start();

    function start(){
        document.addEventListener('mousemove', onMousemove);
        TweenMax.ticker.addEventListener('tick', update);
    }

    function onMousemove(e){
        mousePos = {
            x: e.clientX,
            y: e.clientY
        }
    }

    function createShadow(angle){
        const rayon = btnRayon*2;
        const center = {
            x: rayon/2*Math.cos(angle) + btnRayon,
            y: rayon/2*Math.sin(angle) + btnRayon
        }

        context.beginPath();

        context.arc(
            center.x,
            center.y,
            rayon,
            0,
            2 * Math.PI,
            false);

        context.lineWidth = 3;

        const grd=context.createRadialGradient(center.x,center.y, rayon/10,center.x,center.y,rayon);

        grd.addColorStop(0.1,"rgba(0,0,0,0.85)");
        grd.addColorStop(1,"rgba(0,0,0,0)");
        context.fillStyle = grd;
        context.fill();
        context.closePath();
    }

    function createButton(){

        context.beginPath();

        context.arc(btnRayon, btnRayon, btnRayon - btnLineWidth, 0, 2 * Math.PI, false);

        context.lineWidth = btnLineWidth;
        context.strokeStyle = '#FFFFFF';
        context.stroke();

        context.closePath();
    }

    function calculAngle(p1, p2){
        return Math.atan2(p2.y - p1.y, p2.x - p1.x)
    }

    function getDistance(p1, p2){
        return Math.sqrt( (p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y) );
    }

    function update(){

        const canvasPos = canvas.getBoundingClientRect();

        const canvasCenter = {
            x: canvasPos.left + canvas.width/2,
            y: canvasPos.top + canvas.height/2
        };

        context.clearRect(0, 0, canvas.width, canvas.height);

        let angle = calculAngle({
            x: canvasCenter.x,
            y: canvasCenter.y
        }, mousePos);

        !angle && (angle = 2.77);

        const distance = getDistance({
            x: canvasCenter.x,
            y: canvasCenter.y
        }, mousePos);

        let hover = distance < btnRayon;

        const button = document.querySelector('.back-button');

        if (!hover){
            button.classList.remove('hover');
        } else {
            button.classList.add('hover');
        }

        createButton();
        createShadow(angle);
    }
}

backBtn('#back-btn');