(function ($, Drupal) {

    Drupal.behaviors.popup = {
        attach: function (context, settings) {
            $(window).load(function (e) {

                // get the modal
                var modal = $('#myModal');

                // get the button that opens the modal
                var btn = $('.field--name-field-block-link > a');

                // get the <span> element that closes the modal
                var span = $(".close")[0];

                // when the user clicks on the button, open the modal
                btn.on('click', function(e){
                    e.preventDefault();
                    modal.css("display","block");
                });

                // when the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.css("display", "none");
                };

                // when the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if(event.target == modal){
                        modal.css("display", "none");
                    }
                }
            });
        }
    };

})(jQuery, Drupal);