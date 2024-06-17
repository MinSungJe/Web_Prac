export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
            products.map((a, i) =>
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} className="food-img"></img>
                    <h4>{a} $40</h4>
                </div>
            )
            }
        </div>
    )

}