// src/config/stripe.js

// 🔑 Clave publicable de Stripe (usa SIEMPRE la pk_test o pk_live según el entorno)
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_51SLGZABSWpxwMEJmnEXRpv6w90NdjdyzvEdoyTKyyhQCJyRzatiKHOkzBA7n0Jf0AC9gwSUXHI46VSwtNRmKUCb400tcGojWOC';

// 🛒 Configuración del producto que se mostrará en el Checkout
export const PRODUCT_CONFIG = {
  name: 'Digital Marketing MasterClass',
  description: 'Complete course with 6 modules, bonuses, and lifetime access',
  price: 19700, // $197.00 en centavos
  currency: 'usd',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
};
