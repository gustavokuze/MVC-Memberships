$(function () {
    let $dataAdminMenu = $('[data-admin-menu]')
    $dataAdminMenu.hover(function () {
        $dataAdminMenu.toggleClass('open');
    });
});