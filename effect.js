var cssDialog = {
  'position': 'absolute',
  'left': '0px',
  'top': '0px',
  'width': '100%',
  'height': '100%',
  'text-align': 'center',
  'z-index': '9999'
}

var cssCenter = {
  'left': '50%',
  'top': '50%',
  'position': 'fixed',
  'margin-left': '-100px',
  'margin-right': '-100px'
}

$(document).ready(function(){
  console.log(document.location);
  var img = $('<img />').attr('src',
    'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + document.URL + '&chld=L|1&choe=UTF-8')
    .css(cssCenter)
    .load(function(){
      $('body').append($('<div class="qrcode" />')
        .append(img)
        .css(cssDialog));
    });
});