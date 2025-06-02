interface GameDetailsShopProps {
  shop: string;
  shopLink: string;
}

function GameDetailsShop({ shop, shopLink }: GameDetailsShopProps) {
  return (
    <div className="col-12">
      <div className="p-4 bg-light border rounded text-center">
        <h5 className="fw-bold">Shop</h5>
        <a href={shopLink} target="_blank" rel="noopener noreferrer">
          {shop}
        </a>
      </div>
    </div>
  );
}

export default GameDetailsShop;
