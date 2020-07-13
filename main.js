(function() {
  var URL = window.URL || window.webkitURL;
  var upload = document.getElementById('upload');
  var main = document.querySelector('main');
  var h1 = document.querySelector('h1');

  function handleUpload() {
    if (this.files && this.files.length) {
      var file = this.files[0];
      if (/^image\/\w+$/.test(file.type)) {
        processImage(file);
        upload.value = '';
      } else {
        h1.textContent = 'Please choose an image file.';
      }
    }
  }

  function processImage(file) {
    h1.textContent = 'Analyzing image…';
    // complex machine learning neural net goes here
    setTimeout(function() {
      var blob = URL.createObjectURL(file);
      document.body.style.backgroundImage = 'url(' + blob + ')';
      main.classList.add('stitch');
      // oh no, you caught me
      h1.textContent = 'Yes, it\'s cake';
    }, 3000);
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
