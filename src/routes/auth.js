import express from 'express';
import User from '../models/User';


const router = express.Router();

router.post("/", (req, res) => {
  const { credentinals } = req.body;
  User.findOne({ email: credentinals.email }).then(user => {
    if(user && user.isValidPassword(credentinals.password)) {
      res.json({ user: user.toAuthJSON()});
    } else {
      res.status(400).json({ errors: { global: "not working!" }})

    }
  });

});

export default router;
