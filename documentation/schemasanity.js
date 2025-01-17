
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the product',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the product',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description of the product',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        description: 'Number of items in stock',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
    ],
  };
