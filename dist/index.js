"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config()

const {PORT} = process.env

const app = _express2.default.call(void 0, )

app.use(_cors2.default.call(void 0, ))
app.use(_express2.default.json())

app.listen(PORT, () => {
    return console.log( ` 🍌 Running App: ${PORT}`)
})


app.get("/", (req, res) => {
    return res.json( {message: ` 🍌 Running App!`})
})

exports. default = app
