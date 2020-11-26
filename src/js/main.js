import $ from 'jquery';

$(".customerSelect").click(function(e){
    e.preventDefault();
    $("#mainDashBoard").css('display','none');
    $("#orderDashBoard").css('display','none');
    $("#itemDashBoard").css('display','none');
    $("#customerDashBoard").css('display','block');
})

$(".itemsSelect").click(function(e){
    e.preventDefault();
    $("#mainDashBoard").css('display','none');
    $("#orderDashBoard").css('display','none');
    $("#itemDashBoard").css('display','block');
    $("#customerDashBoard").css('display','none');
})

$(".ordersSelect").click(function(e){
    e.preventDefault();
    $("#mainDashBoard").css('display','none');
    $("#orderDashBoard").css('display','block');
    $("#itemDashBoard").css('display','none');
    $("#customerDashBoard").css('display','none');
})

$("#dashboardSelect").click(function(e){
    e.preventDefault();
    $("#mainDashBoard").css('display','block');
    $("#orderDashBoard").css('display','none');
    $("#itemDashBoard").css('display','none');
    $("#customerDashBoard").css('display','none');
})


