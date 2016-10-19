Schema

products
  name
  description
  quantity
  imageUrl

customer
  name
  createdAt
  isDeleted?

order
  _product (id) (many to one)
  createdAt

------------------------
controllers
  users
  products
  orders

------------------------

Functions

product
  index
  getList (limit to)
  add

users
  add (show error if already exists)
  remove
  getRecent
  (search)

orders
  add
  getRecent
