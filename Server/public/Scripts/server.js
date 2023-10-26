const stripe = require('stripe')('sk_test_51KTEynLEhbzEv1LhavmhxtodPoEeVJyZmTb23hFtxoNkmRUnz9mM5FwNdqDeozqmRnut2XFHo3I89cBKuBXgmVBJ003J8ZXXD6');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1O5EyKLEhbzEv1Lhr7BwHdhD',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));