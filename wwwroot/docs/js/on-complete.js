$(document).ready(function () {
    loadpage();
});

function loadpage() {
    setTimeout(function () {
        var div = $(".wrapper > .col-12-desktop");
        $("body").show().html("<div class='cssload-box-loading'>" +
            "</div>");

        setTimeout(function () {
            organizeComponents(div);
        }, 2300);
    }, 1500);
};

function checkedtrue() {
    $("#cb-1").prop("checked", true);
    $("#cb-2").prop("checked", true);
    $("#cb-3").prop("checked", true);
};

function openNav() {
    document.getElementById("mySidenav").style = "258px";
    document.getElementById("main2").style.marginLeft = "258px";
    document.getElementById("main3").style.marginLeft = "258px";
};

function closeNav() {
    document.getElementById("mySidenav").style = "display:none";
    document.getElementById("main2").style.marginLeft = "0";
    document.getElementById("main3").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
};


function organizeComponents(div) {
    $.get("index/index.html", function (data) {
        $("body").html(data);
        $(document).ready(function () {
            openNav()
            $("#dataLocal").html(div[0]);

        });
    });
}
