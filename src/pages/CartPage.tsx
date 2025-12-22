import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import NavigationBar from "../components/NavigationBar";

interface CartItem {
  cartItemId: number;
  itemName: string;
  price: number;
  count: number;
  imgUrl?: string;
}

const CartPage = () => {
  const name = localStorage.getItem("nickname");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCartList = async () => {
    try {
      const res = await api.get("/api/cart/list");
      setCartItems(res.data);
    } catch (err: any) {
      console.error("장바구니 조회 실패", err.response);
      if (err.response?.status === 401) {
        alert("로그인이 필요합니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartList();
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <>
      <NavigationBar />
      <Container>
        <h1>{name}의 장바구니</h1>
        {cartItems.length === 0 ? (
          <p>장바구니가 비어있습니다.</p>
        ) : (
          <CartList>
            {cartItems.map((item) => (
              <CartItemCard key={item.cartItemId}>
                <div className="info">
                  <p className="name">{item.itemName}</p>
                  <p className="price">{item.price.toLocaleString()}원</p>
                </div>
                <div className="count">수량: {item.count}개</div>
              </CartItemCard>
            ))}
          </CartList>
        )}
      </Container>
    </>
  );
};

export default CartPage;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CartItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;

  .name {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .price {
    color: #888;
  }
`;
