function InventoryItem({ name, type, quantity = 0, price = 0 }) {
  const lowStockThresh = 5;
  const highValueThresh = 1000;

  let totalValue = quantity * price;

  return (
    <div>
      <h2>
        {name} ({type})
      </h2>

      {quantity < lowStockThresh && (
        <Message>
          <p>Low Stock! {quantity} remaining.</p>
        </Message>
      )}
      {totalValue > highValueThresh && (
        <Message>
          <p>High value - consider extra protection!</p>
        </Message>
      )}
    </div>
  );
}
