
# CRUD BE API

Project ini untuk mengimplementasikan hasil belajar backend api menggunakan express dan database no sql (MONGGO DB).


## Terdapat beberapa API

#### Get all products

```http
  GET /api/products
```

Ini untuk menampilkan semua product yang ada, kemudian akan berisi nama, stock, harga, dan gambar.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nama` | `string` | **nama Required**. |
| `stock` | `number` | **stock Required**.  |
| `harga` | `number` | **harga Required**. |
| `gambar` | `string` | **gambar Required**. |

#### Get product by id

```http
  GET /api/products/:id
```
Ini untuk menampilkan product berdasarkan id product.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **id Required**. |

#### Create product

```http
  POST /api/products
```

Untuk membuat product baru harus mengisi parameter yang sudah ada dibawah ini.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nama` | `string` | **nama Required**. |
| `stock` | `number` | **stock Required**.  |
| `harga` | `number` | **harga Required**. |
| `gambar` | `string` | **gambar Required**. |

#### Edit product

```http
  PUT /api/products/:id
```
Untuk mengedit data product harus mengisi parameter yang ada dibawah bedasarkan id.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nama` | `string` | **nama Required**. |
| `stock` | `number` | **stock Required**.  |
| `harga` | `number` | **harga Required**. |
| `gambar` | `string` | **gambar Required**. |

#### Delete product by id

Untuk menghapus product harus mengisi id product yang ingin dihapus.

```http
  GET /api/products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **id Required**. |


[Back to top](#crud-be-api)
