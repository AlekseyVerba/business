export default function scroll() {
    $(".header__nav").on("click", "a", function(e) {
        e.preventDefault();
        const id = $(this).attr("href");
        console.log($(id).offset());
        const top = $(id).offset().top;
        $("html, body").animate({scrollTop: top}, 1000);
    });
    $(".footer-up__nav").on("click", "a", function(e) {
        e.preventDefault();
        const id = $(this).attr("href");
        console.log($(id).offset());
        const top = $(id).offset().top;
        $("html, body").animate({scrollTop: top}, 1000);
    });
}