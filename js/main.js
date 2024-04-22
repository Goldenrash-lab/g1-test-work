$("a").each(function () {
  let hrefExploded = $(this).attr("href");
  let result = `#form`;
  $(this).attr("href", result);

  console.log(result);
});
