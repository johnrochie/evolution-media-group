import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, industry, email } = body;
    
    if (!businessName || !industry || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const orderId = `evo-${Date.now()}`;
    
    // In production, this would add to the queue
    // For now, simulate success
    console.log(`📦 Order received: ${orderId} - ${businessName} (${industry})`);
    
    return NextResponse.json({
      success: true,
      orderId,
      message: 'Order received and queued for processing',
      estimatedDelivery: '24 hours',
      price: '€500',
      nextSteps: [
        '1. Jarvis will build your website (15-30 min)',
        '2. Friday will test for quality (1-2 hours)',
        '3. Auto-deploy to Vercel (5 min)',
        '4. You receive live URL via email'
      ]
    });
    
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'evolution-media-api',
    version: '1.0.0'
  });
}
