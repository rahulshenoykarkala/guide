showTip = (elem, tip, placement, next) => {
    $(elem).attr("data-toggle", "popover")
        .attr("data-trigger", "focus")
        .attr("data-content", tip)
        .attr("data-placement", placement);
    $(elem).popover('show');
    $(".popover-body").append(`<button class="next">${next ? "Next" : "Ok"}</button>`)
    return $(".popover-body .next")[0];
}
hideTip = (elem) => $(".popover").remove();