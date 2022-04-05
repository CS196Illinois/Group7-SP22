
var inputurl;

function storeurl() {
inputurl = document.URL;
}

document.onclick = storeurl; 

if (window.location.href.includes(inputurl)) {
    document.head.innerHTML = (`WORK > ${inputurl}`);
    document.body.innerHTML = "GET BACK TO WORK!";
}