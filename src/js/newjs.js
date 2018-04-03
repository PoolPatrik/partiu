$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  if (!window.jQuery) {
        document.write("<script src='bin/jquery-2.1.1.min.js'><\/script>")
      }