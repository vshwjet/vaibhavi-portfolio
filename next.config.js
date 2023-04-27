
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["lh3.googleusercontent.com","drive.google.com"],
  },
}