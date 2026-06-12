import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export const PRICE_DATA_ID = {
    'low-price' : 'price_1ThDF8HGVWnlhFVyFzkbMJnX',
    'medium-price' : 'price_1TgnEGHGVWnlhFVyN5383AW1',
    'pro-price' : 'price_1ThDEmHGVWnlhFVywgobGKvG'
}