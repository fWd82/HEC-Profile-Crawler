// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
    var myLink;
    // for (a = 1184060; a < 1184080; a++) { 1184072

    var initValue = 1000000;
    $('body').append("<div class='col-md-12 myButtonClass'> <button class='btn btn-success' >LOAD MORE..</button></div>");

    // onLoad
    myFunction();


    // calling Function
    $(".myButtonClass").click(function() {
        myFunction();
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });



    function myFunction() {

        // console.log("button is clicked");
        // console.log("initValue: " + initValue);

        for (a = initValue; a < initValue + 50; a++) {
            myLink = 'http://eportal.hec.gov.pk/hec-portal-web/upload?profileId=' + a;
            $('body').append("<div class='col-md-2 myBox'>" +
                "<a target='_NEW' href=" + myLink + "><img height='200px' src= " + myLink + "></a> <BR/ ><strong>ID:</strong> " + a +
                // $(".box2").html("<img height='200px' src= " + myLink + "  > ") +
                "</div>");

            // console.log("initValue again: " + initValue);
        }
        initValue = initValue + 50;
        // console.log("initValue once again: " + initValue);
    }
});