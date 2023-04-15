const topBtn = document.getElementById('topBtn');
hideBtn()
const hideBtn = () =>{
    let height = window.scrollY

    if(height < 300){
        topBtn.style.display = 'none'
    }else if(window.innerWidth >= 1050){
        topBtn.style.display = 'none'
    }else{
        topBtn.style.display = 'inline'
    }
}

window.addEventListener('scroll', hideBtn)