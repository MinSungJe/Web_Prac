[0, 1, 2].map((i) => {
    $('.tab-button').eq(i).on('click', () => {
        $('.tab-button').removeClass('orange')
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(i).addClass('show')
    })
})