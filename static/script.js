$(function() {

  async function getCupcakes() {
  let response = await axios.get("/api/cupcakes");
  let cupcakes = response.data.cupcakes;

  for (let i of cupcakes) {

    let {flavor, image, size, rating: grade} = i;

    let container = `<li>flavor:${flavor}, size:${size}, rating:${grade}</li>`
    $("#cupcake-list").append(container);

  }

  }
  getCupcakes();

  $('#form').on("submit", async function(evt) {
    evt.preventDefault();
    
    let flavor = $('#flavor').val();
    let size = $('#size').val();
    let rating = $('#rating').val();
    let image = $('#image').val();

    let response = await axios.post("/api/cupcakes", {flavor, size, rating, image});

    let cupcake = response.data.cupcake;
    let container = `<li>flavor:${cupcake.flavor}, size:${cupcake.size}, rating:${cupcake.rating}</li>`
    $("#cupcake-list").append(container);
  });


});
