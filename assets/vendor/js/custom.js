$(document).ready(function () {
    $(".faq-item").click(function () {
        $(this).find(".faq-details").toggle(500);
        $(this).find(".bx-plus, .bx-x").toggle(500);
    });
});
