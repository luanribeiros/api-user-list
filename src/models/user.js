import mongoose from 'mongoose'

const schema = new mongoose.Schema ({
    name: {
      type: String,
      require: true
    },
    username: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    address: {
      street: {
        type: String,
        require: true
      },
      suite: {
        type: Number,
        require: true
      },
      city: {
        type: String,
        require: true
      },
      zipcode: {
        type: Number,
        require: true
      },
      geo: {
        lat: {
          type: Number,
          require: true
        },
        lng: {
          type: Number,
          require: true
        }
      }
    },
    phone: {
      type: Number,
      require: true
    },
    website: {
      type: String,
      require: true
    },
    group: {
      company: {
        name: {
          type: String,
          require: true
        },
        catchPhrase: {
          type: String,
          require: true
        },
        bs: {
          type: String,
          require: true
        }
      },
      posts: [{
        title: {
          type: String,
          require: true
        },
        body: {
          type: String,
          require: true
        }
      }]
    },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', schema)

export default User