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
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      return;
    }

    if (!confirm("장바구니에 담으시겠습니까?")) return;

    try {
      await api.post("/api/cart", { itemId, count: 1 });
      alert("장바구니에 담겼습니다! 🛒");
    } catch (err: any) {
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
    <Container>
      <NavigationBar />
      <HeaderSection>
        <Title>All Store - Home</Title>
        <WelcomeMsg>
          ✨ <span>{name || "고객"}</span>님, 환영합니다!
        </WelcomeMsg>
      </HeaderSection>

      <GridContainer>
        {items.map((item) => (
          <ProductCard key={item.id}>
            <ImagePlaceholder>📦</ImagePlaceholder>
            <ProductInfo>
              <ItemName>{item.itemName}</ItemName>
              <Price>{item.price.toLocaleString()}원</Price>
            </ProductInfo>
            <CartButton onClick={() => handleLoad(item.id)}>
              장바구니 담기
            </CartButton>
          </ProductCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const HeaderSection = styled.div`
  max-width: 1100px;
  margin: 40px auto 20px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 8px;
`;

const WelcomeMsg = styled.p`
  color: #636e72;
  span {
    font-weight: bold;
    color: #0984e3;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 180px;
  background-color: #f1f2f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 15px;
`;

const ProductInfo = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #2d3436;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  color: #2d3436;
`;

const CartButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #2d3436;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff4757;
  }

  &:active {
    transform: scale(0.98);
  }
`;
