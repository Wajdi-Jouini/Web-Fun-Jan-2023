function hide(idLigne,idYou,idConnection) {
    document.getElementById(idLigne).remove();
    document.getElementById(idConnection).innerText++
    document.getElementById(idYou).innerText--
}
function moins(idLigne,idYou) {
    document.getElementById(idLigne).remove();
    document.getElementById(idYou).innerText--
}
function changeName(id){
    document.getElementById(id).innerText=("Fawzi Rwissi");
}
