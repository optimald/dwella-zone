import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { configuration, userEmail, userName } = body

    if (!configuration || !userEmail) {
      return NextResponse.json(
        { error: 'Configuration and email are required' },
        { status: 400 }
      )
    }

    // Create email content
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d18c52;">Your Dwella Smart Home Configuration</h2>
        <p>Hello ${userName || 'there'},</p>
        <p>Thank you for using our Smart Home Configurator! Here's your personalized configuration:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Configuration Summary</h3>
          <p><strong>Recommended Plan:</strong> ${configuration.recommendedPlan}</p>
          <p><strong>Estimated Cost:</strong> $${configuration.estimatedCost}</p>
          <p><strong>Installation Time:</strong> ${configuration.installTime}</p>
          
          ${configuration.addOnPacks.length > 0 ? `
            <h4 style="color: #666;">Add-on Packs:</h4>
            <ul>
              ${configuration.addOnPacks.map((pack: { name: string; price: number }) => 
                `<li>${pack.name} - $${pack.price}</li>`
              ).join('')}
            </ul>
          ` : ''}
        </div>
        
        <p>Our team will review your configuration and contact you within 24 hours to discuss next steps.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            Best regards,<br>
            The Dwella Team<br>
            <a href="mailto:support@dwella.zone" style="color: #d18c52;">support@dwella.zone</a>
          </p>
        </div>
      </div>
    `

    // Send email to user
    await resend.emails.send({
      from: 'Dwella <noreply@dwella.zone>',
      to: [userEmail],
      subject: 'Your Dwella Smart Home Configuration',
      html: html,
    })

    // Send notification to Dwella team
    await resend.emails.send({
      from: 'Dwella Configurator <noreply@dwella.zone>',
      to: ['sales@dwella.zone'],
      subject: 'New Smart Home Configuration Request',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Configuration Request</h2>
          <p><strong>Customer:</strong> ${userName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Recommended Plan:</strong> ${configuration.recommendedPlan}</p>
          <p><strong>Estimated Value:</strong> $${configuration.estimatedCost}</p>
          <p><strong>Installation Time:</strong> ${configuration.installTime}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 