import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Supabase client (anon is correct here)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // 1️⃣ Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 2️⃣ Insert directly (NO pre-check, NO select)
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert({ email })

    // 3️⃣ Handle insert errors properly
    if (insertError) {
      // Duplicate email (unique constraint)
      if (insertError.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on the waitlist 👀' },
          { status: 409 }
        )
      }

      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      )
    }

    // 4️⃣ Send email (NON-BLOCKING, NEVER FAIL SIGNUP)
    try {
      await resend.emails.send({
        from: `Commito <${process.env.RESEND_FROM_EMAIL}>`,
        to: process.env.ADMIN_EMAIL!, // must be YOUR email on free tier
        subject: 'New Waitlist Signup 🚀',
        html: `
          <h2>New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `,
      })
    } catch (emailError) {
      // Log only — DO NOT fail the request
      console.warn('Resend email failed (safe to ignore):', emailError)
    }

    // 5️⃣ Always return success if insert worked
    return NextResponse.json(
      { message: 'Successfully joined waitlist 🎉' },
      { status: 201 }
    )

  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}