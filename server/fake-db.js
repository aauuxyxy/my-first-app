const Product = require('./model/product');

class FakeDb{
    constructor(){
        this.products = [
          {
            coverImage: "./assets/img/iPhone.jpg",
            name: "Phone XL",
            price: 799,
            description: "A large phone with one of the best screens",
            heading1: "魅了する光沢感",
            heading2: "高いスペック",
            heading3: "高精細な画質",
            headingText1:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText2:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText3:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
          },
          {
            coverImage: "./assets/img/iPhone2.jpg",
            name: "Phone Mini",
            price: 699,
            description: "A great phone with one of the best cameras",
            heading1: "魅了する光沢感",
            heading2: "高いスペック",
            heading3: "高精細な画質",
            headingText1:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText2:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText3:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
          },
          {
            coverImage: "./assets/img/iPhone3.webp",
            name: "Phone Standard",
            price: 299,
            description: "A great phone with one of the best cameras",
            heading1: "魅了する光沢感",
            heading2: "高いスペック",
            heading3: "高精細な画質",
            headingText1:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText2:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText3:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
          },
          {
            coverImage: "./assets/img/iPhone4.jpg",
            name: "iPhone11",
            price: 1000,
            description: "レンズがキモいです。マジでどうにかしてください。",
            heading1: "魅了する光沢感",
            heading2: "高いスペック",
            heading3: "高精細な画質",
            headingText1:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText2:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
            headingText3:
              "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodocursus magna.",
          },
        ];
    }

    async initDb(){
        await this.cleanDb();
        this.pushProductsToDb();
    }

    async cleanDb(){
        await Product.deleteMany({});
    }

    pushProductsToDb(){
        this.products.forEach((product) => {
            const newProduct = new Product(product);
            newProduct.save();
        });
    }
}

module.exports = FakeDb