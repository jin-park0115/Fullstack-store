import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import NavigationBar from "../components/NavigationBar";

interface Item {
  id: number;
  itemName: string;
  price: number;
}

const MainPage = () => {
  const name = localStorage.getItem("nickname");
  const [items, setItems] = useState<Item[]>([]);

  const handleLoad = async (itemId: number) => {
    const token = localStorage.getItem("spring-token");

    if (!token) {
      alert("로그인이 세션이 만료되었습니다. 다시 로그인해주세요.");
      return;
    }

    if (!confirm("장바구니에 담겠습니까?")) {
      return;
    }

    try {
      const cartData = {
        itemId: itemId,
        count: 1,
      };

      const res = await api.post("/api/cart", cartData);

      console.log("서버 응답:", res.data);
      alert("장바구니에 담겼습니다!");
    } catch (err: any) {
      console.error("에러 상세:", err.response);
      alert(err.response?.data || "장바구니 담기 실패");
    }
  };

  useEffect(() => {
    api
      .get("/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("상품 로딩 실패", err));
  }, []);

  return (
    <>
      <NavigationBar />
      <h1>All Stroe - Home</h1>
      <p>반갑습니다, {name}님!</p>
      <BoxWrap>
        {items.map((item) => (
          <Box key={item.id}>
            <p>
              <strong>{item.itemName}</strong>
            </p>
            <p>{item.price.toLocaleString()}원</p>
            {/* item.id를 인자로 넘겨줍니다 */}
            <GoBag onClick={() => handleLoad(item.id)}>장바구니 담기</GoBag>
          </Box>
        ))}
      </BoxWrap>
    </>
  );
};

export default MainPage;

const BoxWrap = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
`;
const Box = styled.div`
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const GoBag = styled.button`
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    background-color: #ff4757;
  }
`;
