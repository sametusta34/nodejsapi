// home api controller
// servis katmanı ile router arasında bir köprü görevi görür
// servis katmanından gelen veriyi alır ve router'a gönderir

// validation işlemleri için paketler
import { query, validationResult, body } from "express-validator";
 //
export default {
  home: (req, res) => {
    // req : request nesnesi
    // res : response nesnesi
    // res.send : response nesnesi üzerinden istemciye veri göndermek için kullanılır

    const { id } = req.params; // user/:id şeklinde gelen veriyi almak için kullanılır
    const { username } = req.body; // post metodu ile gelen veriyi almak için kullanılır
    const { query: { filter, value }} = req // query string ile gelen veriyi almak için kullanılır filter ve value query string parametreleridir


    // servis katmanın veri gelen veriyi res.send ile client gönderir

    res.send({ message : "Welcome to the home page"});
  },
  about: (req, res) => {
    res.send({ message : "Welcome to the about page"});
  },
  contact: (req, res) => {
    res.send({ message : "Welcome to the contact page"});
  },
};
