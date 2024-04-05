import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  provider: String,
  type: String,
  providerAccountId: String,
  access_token: String,
  expires_at: String,
  scope: String,
  token_type: String,
  id_token: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Account = mongoose.models?.Account || mongoose.model('Account', AccountSchema);

export default Account;