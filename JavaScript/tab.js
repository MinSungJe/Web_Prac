var button = $('.tab-button')

// for (let i = 0; i < button.length; i++) {
//     button.eq(i).on('click', () => {
//         openTab(i)
//     })
// }

$('.list').click((e)=>{
    let idx = parseInt(e.target.dataset.id)
    openTab(idx);
})


function openTab(idx) {
    button.removeClass('orange')
    button.eq(idx).addClass('orange')
    $('.tab-content').removeClass('show')
    $('.tab-content').eq(idx).addClass('show')
}