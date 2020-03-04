const monsgoose = require('mongoose');

MONGODB_URL: "mongodb+srv://jerryBruce:jerryb33@cluster0-eh2oh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
