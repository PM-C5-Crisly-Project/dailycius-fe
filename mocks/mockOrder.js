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
               
// Mock Generado para test
               
{
    "userId": "5f7a9af408f3fb68f4111fd6",
    "orderItems": [ 
        {
            "name": "Peanut butter and jelly puffs",
            "qty": 1,
            "price": 50000
        }
    ],
    "shipping": {
        "address": "Calle 123 # 20",
        "city": "Bogotá",
        "postalCode": "2500001",
        "country": "Colombia"
    },
    "paymentMethod": "paypal",
    "itemsPrice": 50000,
    "taxPrice": 9500.35,
    "shippingPrice": 0,
    "totalPrice": 59500,
    "isPaid": true,
    "paidAt": "2020-10-03",
    "isDelivered": true,
    "deliveredAt": "2020-10-03"
}
