const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Gallery = new Schema(
  {
    name: { type: String, required: true },
    website: { type: String, required: true }
  }
);

let Portfolio = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dimension: { type: String, required: false },
    date: { type: String, required: true },
    images: [{type: String, required: true}],
    source: { type: String, required: true }
  }
);

let ArtistBio = new Schema(
  {
    description: { type: String, required: true },
    source: { type: String, required: true }
  }
);

const Artist = new Schema(
  {
    name: {type: String, required: true},
    portraitImg: [{type: String, required: true}],
    artistBio: [ArtistBio],
    galleryName: [Gallery],
    portfolio: [Portfolio]
  },
  { timestamps: true }
);

module.exports = mongoose.model('artist', Artist)