let boxes = document.querySelectorAll('.box');
let reload = () => {
    if(location.reload)
    {
        for(let i=0; i<boxes.length; i++)
        {
            let blank = '';
            let characters = 'abcde0123456789';
            let charlength = characters.length;
            for(let j=0; j<6; j++)
            {
                blank += characters.charAt(Math.floor(Math.random() * charlength));
                blank = blank.slice(0,6);
                code = `#${blank}`;
            }
            boxes[i].style.backgroundColor = code;
        }
    }
}
reload();

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.remove();
    })
})