$(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });
  var clickables = ["header", "paragraph", "img"];
  // var addingOne = 0
    $("#header,#paragraph,#img").click(function(event) {
      clickables.forEach(function(click) {
        var clicking = $("." + click).val();
        //   console.log(click);
          $("." + click).text(clicking);
          alert("This is the: " + click);
        //     alert("poop: " + click);
        //     alert("fart: " + click);
        //     alert("shit: " + click);

        // if (clickables = "header") {
        //     alert("This is the: " + click);
        //
        // } else if (clickables = "paragraph") {
        //     alert("This is the:" + click);
        // } else {
        //     alert("This is the: " + click);
        // }
  });

      event.preventDefault();
  });
});
//
// $("#blanks form").submit(function(event) {
//     var blanks = ["favDog","favFruit","favColor","favPlace"];
//     blanks.forEach(function(blank) {
//
//       var userInput = $("input#" + blank).val();
//       console.log(blank);
//       $("." + blank).text(userInput)
//      });
