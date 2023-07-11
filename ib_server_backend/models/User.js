const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  address: {
    billing: {
      line1: {
        type: String,
        required: true,
        trim: true
      },
      line2: {
        type: String,
        required: true,
        trim: true
      },
      city: {
        type: String,
        required: true,
        trim: true
      },
      state: {
        type: String,
        required: true,
        trim: true
      },
      zip: {
        type: Number,
        required: true,
        trim: true
      }
    },
    shipping: {
      line1: {
        type: String,
        required: true,
        trim: true
      },
      line2: {
        type: String,
        required: true,
        trim: true
      },
      city: {
        type: String,
        required: true,
        trim: true
      },
      state: {
        type: String,
        required: true,
        trim: true
      },
      zip: {
        type: Number,
        required: true,
        trim: true
      }
    }},
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});


const User = mongoose.model('User', userSchema);

module.exports = User;
