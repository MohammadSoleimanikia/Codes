import { currencyFormatter } from "../util/formatter";
export default function CartItem({
    quantity,
    name,
    price,
    onDecrease,
    onIncrease,
}) {
    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    );
}
