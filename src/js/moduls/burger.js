export default function burger() {
    $(".header__burger").on("click", function() {
        console.log("ава");
        $(".header__nav").toggleClass("active");
    });
}