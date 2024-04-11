var button = $('.tab-button')

for (let i = 0; i < button.length; i++) {
    button.eq(i).on('click', () => {
        button.removeClass('orange')
        button.eq(i).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(i).addClass('show')
    })
}