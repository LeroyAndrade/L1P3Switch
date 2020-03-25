const alleVakken = document.querySelectorAll('.vlak');
const rimpl  =document.createElement('div');
rimpl.classList = 'rimpl';


for(let i=0; i < alleVakken.length; i++){
  alleVakken[i].addEventListener('click', function(e){
    e.preventDefault();
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    rimpl.style.left = x + 'px';
    rimpl.style.top  = y + 'px';

    //het element oproepen
    e.target.append(rimpl);

    //
    let dec = this.getElementsByTagName('input')[0];
    //als
        dec.checked = !dec.checked;
  });
}
