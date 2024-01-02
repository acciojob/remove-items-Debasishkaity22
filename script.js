//your JS code here. If required.
function remove(){
    let select=document.querySelector("#colorSelect");
    let selectIndex=select.selectedIndex;
   select[selectIndex].remove();
}
let input=document.querySelector("form>input");
input.addEventListener("click",remove);