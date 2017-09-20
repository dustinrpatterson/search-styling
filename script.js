    // NEW search bar class toggles
    $('.desktop-search-container').click(function (e) {
        e.preventDefault();
        $(this).closest('div').find('#desktop-search-box').focus();
        $(this).closest('div').find('#desktop-search-button').removeClass('button-hidden');
    }); 

    $("#desktop-search-box").blur(function () {
        $('#desktop-search-button').addClass('button-hidden');
    });
    
    //New pinned search bar
    $('.pinned-search-container').click(function (e) {
        e.preventDefault();
        $(this).closest('div').find('#pinned-search-box').focus();
        $(this).closest('div').find('#pinned-search-button').removeClass('button-hidden');
    });

    $("#pinned-search-box").blur(function () {
        $('#pinned-search-button').addClass('button-hidden');
    });


    $('.navbar-toggle').click(function (e) {
        $('.search-bar.mobile').toggleClass('show-search');
    });