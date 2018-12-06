const productItems = require('../model');

const products = (parent, args, ctx) => {
    return productItems
}

const product = (parent, args) => {
    const item = productItems.find((val) => {
        return val.id === parseInt(args.id)
    });
    if(!item) {
        throw new Error(`No product matching ID: ${args.id}`)
    }
    return item
}

const addProduct = (parent, args) => {
    productItems.push(args)
    return productItems
}

module.exports = {
    Query: {
        products,
        product
    },
    Mutation: {
        addProduct
    }
}