var ordersamplefordisplayed = false
function clickorderbutton(ordertype) {
    var orderTypeObj = document.getElementById("ordertype");
    orderTypeObj.value = ordertype
    var ordersampleform = document.getElementById("productdetailordersample");
    if(!ordersamplefordisplayed) {
        var pricebeforshippingObj = document.getElementById("pricebeforshipping");
        var maximumorderquantityObj = document.getElementById("maximumorderquantity");
        var samplepriceObj = document.getElementById("sampleprice");
        if(ordertype == 0){
            pricebeforshippingObj.style.display = "flex";
            maximumorderquantityObj.style.display = "block";
            samplepriceObj.style.display = "block";
        } else {
            pricebeforshippingObj.style.display = "none";
            maximumorderquantityObj.style.display = "none";
            samplepriceObj.style.display = "none";
        }
        ordersamplefordisplayed = true;
        refreshverifycode();
        var screenwidth = window.screen.width;
        ordersampleform.style.top = 0 + "px";
        ordersampleform.style.left = screenwidth;
        ordersampleform.style.display = "flow-root";
        var stopposition = screenwidth - 520;
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