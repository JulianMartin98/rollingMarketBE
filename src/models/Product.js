import { Schema, model } from 'mongoose'

const productSchema = new Schema(

  {
    name: {
      type: String,
      required: [true, "The field name is required"],
      minLength: [3, 'the field name must have at least 3 characters'],
      maxLength: [100, 'the field name must have a maximun of 100 characters'],
    },
    description: {
      type: String,
      required: [true, "The field description is required"],
      minLength: [3, 'the description field must have at least 3 characters'],
      maxLength: [500,'the description field must have a maximun of 500 characters'],
    },
	category: {
		type: String,
        required: [true, "The field category is required"],
        enum : ["Bebidas", "Herramientas", "Limpieza", "Otros"], 
	},
	price: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		
	},
	stock: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
	},
	image: {
		type: String,
		match: [
			/^.*\.(jpg|jpeg|png|gif|bmp)$/i,
			'Please provide a valid image path',
		],
		default: 'age-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
	},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export const ProductModel = model('Product', productSchema);