"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
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
});

const User = _mongoose.default.model('User', schema);

var _default = User;
exports.default = _default;