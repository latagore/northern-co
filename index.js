const getPixels = require("get-pixels")

getPixels("http://www.northern.co/wp-content/themes/northern/images/puzzle.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }

  let str = "";
  pixels.data.forEach((pixel, i) => {
    if (i % 4 !== 3) {
      // keep RGB channels, discard alpha
      str += String.fromCharCode(pixel)
    }
  })
  console.log(str)
})
