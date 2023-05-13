const customers = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

const orders = [
  { id: 1, customerId: 1, date: '2022-01-01', total: 100.00 },
  { id: 2, customerId: 1, date: '2022-02-01', total: 200.00 },
  { id: 3, customerId: 2, date: '2022-03-01', total: 150.00 }
];

// Get all customers
app.get('/customers', (req, res) => {
  res.json(customers);
});

// Get a single customer by ID
app.get('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(c => c.id === id);
  if (customer) {
    res.json(customer);
  } else {
    res.sendStatus(404);
  }
});

// Get all orders for a given customer ID
app.get('/customers/:customerId/orders', (req, res) => {
  const customerId = parseInt(req.params.customerId);
  const customerOrders = orders.filter(o => o.customerId === customerId);
  res.json(customerOrders);
});

// Get a single order by ID for a given customer ID
app.get('/customers/:customerId/orders/:orderId', (req, res) => {
  const customerId = parseInt(req.params.customerId);
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.customerId === customerId && o.id === orderId);
  if (order) {
    res.json(order);
  } else {
    res.sendStatus(404);
  }
});
