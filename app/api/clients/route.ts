import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

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
      .from('clients')
      .select('*')
      .eq('practice_id', practiceId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ clients: data });
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { practiceId, ...clientData } = body;

    if (!practiceId) {
      return NextResponse.json(
        { error: 'Practice ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('clients')
      .insert([{ practice_id: practiceId, ...clientData }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ client: data }, { status: 201 });
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 }
    );
  }
}