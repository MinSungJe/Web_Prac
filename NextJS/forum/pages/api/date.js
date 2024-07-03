export default function handler(요청, 응답) {
    let today = new Date()
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    let milliseconds = today.getMilliseconds(); // 밀리

    let today_date = year + '/' + month + '/' + date
    let today_time = hours + ':' + minutes + ':' + seconds + ':' + milliseconds
    console.log(today)
    return 응답.status(200).json(today_date + ' ' + today_time)
}