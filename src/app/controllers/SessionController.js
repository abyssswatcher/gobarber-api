import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Credentials are incorrect.' });
    }

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Credentials are incorrect.' });
    }

    const { id, name } = user;
    const jwtSign = jwt.sign({ id }, authConfig.jwtSecretKey, { expiresIn: authConfig.expiresIn });

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwtSign,
    });
  }
}

export default new SessionController();
