// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id)
    var eaten = $(this).data("value");

    var newDevourState = {
      devoured: eaten
    };
    console.log(newDevourState)

    // Send the PUT request.
    // $.ajax("/api/burgers/" + id, {
    //   type: "PUT",
    //   data: newDevourState
    // }).then(
    //   function() {
    //     console.log("changed food to", eaten);
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

  $(".create-update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
});
