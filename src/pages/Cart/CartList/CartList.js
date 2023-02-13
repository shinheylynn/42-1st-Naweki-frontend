import './CartList.scss';
import { HOW_MANY_LIST } from '../data/howManyData';

export const CartList = ({ list }) => {
  return (
    <div className="cartList">
      <div className="productContainer">
        <div className="imgWrapper">
          <img src={list.image} alt="something" className="cartImage" />
        </div>
        <div className="productInfoWrapper">
          <div className="productName">{list.name}</div>
          <div className="productCategory">{list.category}</div>
          <div className="productDetail">{list.detail}</div>
          <div className="selectorWrapper">
            <div className="size">사이즈</div>
            <select name="sizes" id="sizeSelect" className="productSize">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <div className="number">수량</div>
            <select name="howMany" id="howMany" className="howManyProduct">
              {HOW_MANY_LIST.map(data => {
                return (
                  <option key={data.id} value={data.many}>
                    {data.many}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btnWrapper">
            <button className="heartBtn">
              <img src="images/heart-regular.png" />
            </button>
            <button className="trashBtn">
              <img src="images/trash-can-regular.png" />
            </button>
          </div>
        </div>
        <div className="priceWrapper">
          <div className="originPrice">{list.originPrice}</div>
          <div className="reducedPrice">{list.reducedPrice}</div>
        </div>
      </div>
      <div className="shippingInfo">
        <div className="shipPrice">무료배송</div>
        <div className="arrivalBox">
          도착 예정일: <div className="date">{list.date}</div>{' '}
          <button className="location">지역 수정</button>
        </div>
      </div>
    </div>
  );
};
