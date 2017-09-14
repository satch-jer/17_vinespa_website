(function ($, Drupal) {

    Drupal.behaviors.landing = {
        attach: function (context, settings) {
            $(window).load(function () {
                $(window).resize(function () {
                    var header_height = $("header").height();
                    var landing_height = ($(window).height() - header_height);

                    $('.landing').height(landing_height);
                    $('.region-landing').css('padding-top', landing_height/3);
                }).trigger('resize');
            });
        }
    };

})(jQuery, Drupal);