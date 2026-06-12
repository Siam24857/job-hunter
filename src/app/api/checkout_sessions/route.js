import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { PRICE_DATA_ID, stripe } from '@/app/lib/stripe';
import { auth } from '@/app/lib/auth';

 

export async function POST(Request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const pricID = await Request.formData()
    const priceId = pricID.get('priceId')
    const pricedataId = PRICE_DATA_ID[priceId]


    // const userdata = await auth.api.getSession({
    //   headers: await headers()
    // })

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      // customer_email: userdata?.user.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: pricedataId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/Dashboard/Pricing/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }  
}