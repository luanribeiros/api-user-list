"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const users = await this.User.find({});
      res.send(users);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: {
        id
      }
    } = req;

    try {
      const user = await this.User.find({
        _id: id
      });
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const user = new this.User(req.body);

    try {
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.User.updateOne({
        _id: req.params.id
      }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.User.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

var _default = UsersController;
exports.default = _default;