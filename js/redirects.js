$(document).ready(function () {
    $("#mainPage, #mainPage").click(function () {
        $("#content").load("pages/main.html");
        $("li>a").removeClass("active");
        console.log("press");
    });
});

$(document).ready(function () {
    $("#htmlPage, #htmlPage").click(function () {
        $("#content").load("pages/html.html");
        $("li>a").removeClass("active");
        $('#htmlPage').toggleClass('active');
    });
});

$(document).ready(function () {
    $("#cssPage , #cssPage").click(function () {
        $("#content").load("pages/css.html");
        $("li>a").removeClass("active");
        $('li>#cssPage').toggleClass('active');
    });
});
$(document).ready(function () {
    $("#jsPage, #jsPage").click(function () {
        $("#content").load("pages/js.html");
        $("li>a").removeClass("active");
        $('li>#jsPage').toggleClass('active');
    });
});
$(document).ready(function () {
    $("#phpPage, #phpPage").click(function () {
        $("#content").load("pages/php.html");
        $("li>a").removeClass("active");
        $('li>#phpPage').toggleClass('active');
    });
});
$(document).ready(function () {
    $("#electronPage, #electronPage").click(function () {
        $("#content").load("pages/electron.html");
        $("li>a").removeClass("active");
        $('li>#electronPage').toggleClass('active');
    });
});
$(document).ready(function () {
    $("#JQueryPage, #JQueryPage").click(function () {
        $("#content").load("pages/jquery.html");
        $("li>a").removeClass("active");
        $('li>#JQueryPage').toggleClass('active');
    });
});

$(document).ready(function () {
    $("#vuePage, #vuePage").click(function () {
        $("#content").load("pages/vue.html");
    });
});
$(document).ready(function () {
    $("#reactPage, #reactPage").click(function () {
        $("#content").load("pages/react.html");
    });
});
$(document).ready(function () {
    $("#electronPage, #electronPage").click(function () {
        $("#content").load("pages/electron.html");
    });
});





$(document).ready(function () {
    $("#allCatPage").click(function () {
        $("#content").load("pages/allcatpage.html");
        $("li>a").removeClass("active");
        $('li>#allCatPage').toggleClass('active');
    });
});
$(document).ready(function () {
    $("#allCatsPage").click(function () {
        $("#content").load("pages/allcatpage.html");
        $("li>a").removeClass("active");
        $('li>#allCatPage').toggleClass('active');
    });
});


// HTML PAGES

$(document).ready(function () {
    $("#allTagsHtmlPage").click(function () {
        $("#content").load("pages/html/all-tags.html");
    });
});
$(document).ready(function () {
    $("#backToMainHtml").click(function () {
        $("#content").load("pages/html.html");
    });
});