import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { stripe } from '@/lib/stripe/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const practiceId = searchParams.get('practiceId');

    if (!practiceId) {
      return NextResponse.json(
        { error: 'Practice ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('invoices')
      .select(`
        *,
        client:clients(*),
        invoice_items(*)
      `)
      .eq('practice_id', practiceId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ invoices: data });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { practiceId, clientId, items, ...invoiceData } = body;

    if (!practiceId || !clientId) {
      return NextResponse.json(
        { error: 'Practice ID and Client ID are required' },
        { status: 400 }
      );
    }

    // Generate invoice number
    const invoiceNumber = `INV-${Date.now()}`;

    // Create invoice
    const { data: invoice, error: invoiceError } = await supabaseAdmin
      .from('invoices')
      .insert([{
        practice_id: practiceId,
        client_id: clientId,
        invoice_number: invoiceNumber,
        ...invoiceData
      }])
      .select()
      .single();

    if (invoiceError) throw invoiceError;

    // Create invoice items
    if (items && items.length > 0) {
      const invoiceItems = items.map((item: any) => ({
        invoice_id: invoice.id,
        ...item
      }));

      const { error: itemsError } = await supabaseAdmin
        .from('invoice_items')
        .insert(invoiceItems);

      if (itemsError) throw itemsError;
    }

    return NextResponse.json({ invoice }, { status: 201 });
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    );
  }
}