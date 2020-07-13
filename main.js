(function() {
  var URL = window.URL || window.webkitURL;
  var upload = document.getElementById('upload');
  var main = document.querySelector('main');
  var h1 = document.querySelector('h1');

  function handleUpload() {
    if (this.files && this.files.length) {
      var file = this.files[0];
      filetype = file.type;
      filename = file.name;

      if (/^image\/\w+$/.test(filetype)) {
        upload.value = '';
        h1.textContent = 'Analyzing image…';
        setTimeout(function() {
          var blob = URL.createObjectURL(file);
          document.body.style.backgroundImage = 'url(' + blob + ')';
          main.classList.add('stitch');
          h1.textContent = 'Yes, it\'s cake';
        }, 3000);
      } else {
        h1.textContent = 'Please choose an image file.';
      }
    }
  }

  if (URL) {
    upload.addEventListener('change', handleUpload);
  } else {
    upload.addEventListener('click', function(e){
      e.preventDefault();
      alert('The features required to make this work aren\'t supported in your browser :(');
    });
  }
})();
