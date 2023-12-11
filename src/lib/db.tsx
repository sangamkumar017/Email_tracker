const { username, password } = process.env;
// export const connectionStr =
//   "mongodb+srv://" +
//   username +
//   ":" +
//   password +
//   "@cluster0.q72cqhy.mongodb.net/emailDB?retryWrites=true&w=majority";
export const connectionStr= "mongodb+srv://"+username+":"+password+"@cluster0.u3u0m5h.mongodb.net/productDB?retryWrites=true&w=majority";