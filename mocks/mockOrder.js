shippingSchema: [{
  address: 'P. Sherman 42 Wallbay Way',
  city: 'Sydney',
  postalCode: 2088,
  country: 'Australia',
}]

paymentSchema: {
  paymentMethod: 'paypal',
}

orderItemSchema: [{
  name:'hamburguer',
  qty: '1',
  image: 'link',
  price: '100',
}]

orderSchema: {
  user: 'peditoId',
  orderItems: [...], //array orderItemSchema
  shipping: {shippingschema},
  payment: paymentSchema,
  itemsPrice: 100,
  taxPrice: 10, // 10% del producto
  shippingPrice: 15, // venta < 250: 15% / venta > 250: free
  totalPrice: 125,
  isPaid: true,
  paidAt: { type: Date },
  isDelivered: true,
  deliveredAt: { type: Date },
}