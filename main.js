(function() {
  var URL = window.URL || window.webkitURL;
  var upload = document.getElementById('upload');
  var main = document.querySelector('main');
  var h1 = document.querySelector('h1');

  /**
   * Upload the file and check if it's an image
   */
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

  /**
   * Analyze the image and update the UI
   * @param {object} file Uploaded image file
   */
  function processImage(file) {
    h1.textContent = 'Analyzing image…';
    setTimeout(function() {
      var blob = URL.createObjectURL(file);
      document.body.style.backgroundImage = 'url(' + blob + ')';
      main.classList.add('stitch');
      if (isItCake()) {
        h1.textContent = 'Yes, it\'s cake';
      } else {
        h1.textContent = 'No, it\'s not cake';
      }
    }, 3000);
  }

  /**
   * complex machine learning neural net goes here
  */
  function isItCake() {
    // oh no, you caught me
    return true;
  }

  if (URL) {
    upload.addEventListener('change', handleUpload);
  } else {
    upload.addEventListener('click', function(e){
      e.preventDefault();
      h1.textContent = 'This won\'t work in your browser, sorry!';
      var p = document.createElement('p');
      p.textContent = 'But I\'m pretty sure that it\'s cake';
      h1.parentElement.insertBefore(p, null);
      upload.parentElement.remove();
    });
  }
})();
