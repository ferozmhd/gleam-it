$(function () {
  $("#chat-close-circle").css("display", "none");
  $("#chat-circle").click(function () {
    $("#chat-circle").toggle("scale");
    $("#chat-close-circle").css("display", "block");
    $(".chat-box").toggle("scale");
  });

  $("#chat-box-toggle").click(function () {
    $("#chat-circle").toggle("scale");
    $("#chat-close-circle").css("display", "none");
    $(".chat-box").toggle("scale");
  });
  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle("scale");
    $("#chat-close-circle").css("display", "none");
    $(".chat-box").toggle("scale");
  });
});
