document.getElementById(`theme`).addEventListener(`click`, function(){
    if(document.querySelector(`body`).className === `darkTheme`){
        this.innerHTML = `✨ Dark Theme`
        document.querySelector(`body`).className = `lightTheme`
        
    } else {
        this.innerHTML = `🔆 Light Theme`
        document.querySelector(`body`).className = `darkTheme`
    }  
})