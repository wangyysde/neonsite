var ordersamplefordisplayed = false
function clickorderbutton(ordertype) {
    var orderTypeObj = document.getElementById("ordertype");
    orderTypeObj.value = ordertype
    var ordersampleform = document.getElementById("productdetailordersample");
    var screenwidth = window.innerWidth;
    var windowheight = window.innerHeight;
    ordersampleform.style.top = 0 + "px";
    ordersampleform.style.left = screenwidth;
    if(!ordersamplefordisplayed) {
        var pricebeforshippingObj = document.getElementById("pricebeforshipping");
        var maximumorderquantityObj = document.getElementById("maximumorderquantity");
        var samplepriceObj = document.getElementById("sampleprice");
        ordersampleform.style.height = (windowheight - 150) + "px";
        ordersampleform.style.display = "flow-root";
        if(ordertype == 0){
            if(pricebeforshippingObj) {
                pricebeforshippingObj.style.display = "flex";
            }
            if(maximumorderquantityObj) {
                maximumorderquantityObj.style.display = "block";
            }
            if(samplepriceObj) {
                samplepriceObj.style.display = "block";
            }
        } else {
            if(pricebeforshippingObj) {
                pricebeforshippingObj.style.display = "none";
            }
            if(maximumorderquantityObj) {
                maximumorderquantityObj.style.display = "none";
            }
            if(samplepriceObj) {
                samplepriceObj.style.display = "none";
            }
        }
        ordersamplefordisplayed = true;
        refreshverifycode();
        var stopposition = screenwidth - 520;
        if(screenwidth < 901){
            stopposition = screenwidth - 360;
        }
        if(screenwidth < 601){
            stopposition = screenwidth - 355;
        }
        var pos = screenwidth;
        var position = setInterval(function(){
            if(pos <= stopposition){
                clearInterval(position);
            } else {
                pos = pos - 10;
                ordersampleform.style.left = pos + "px";
            }
        },10);
    } else {
        ordersamplefordisplayed = false;
        ordersampleform.style.display = "none";
    }
    return;
}


function refreshverifycode(){
    var verifycodeObj = document.getElementById("verifiycode");
    verifycodeObj.src = verifycodeurl + '?PHPSESSID=' + verifyCodID + '&refresh=' + Math.random();
}

function submitorder(){

}