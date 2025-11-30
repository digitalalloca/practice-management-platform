import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const practiceId = searchParams.get('practiceId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!practiceId) {
      return NextResponse.json(
        { error: 'Practice ID is required' },
        { status: 400 }
      );
    }

    let query = supabaseAdmin
      .from('appointments')
      .select(`
        *,
        client:clients(*),
        practitioner:users(*)
      `)
      .eq('practice_id', practiceId);

    if (startDate) {
      query = query.gte('start_time', startDate);
    }
    if (endDate) {
      query = query.lte('start_time', endDate);
    }

    const { data, error } = await query.order('start_time', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ appointments: data });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { practiceId, ...appointmentData } = body;

    if (!practiceId) {
      return NextResponse.json(
        { error: 'Practice ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('appointments')
      .insert([{ practice_id: practiceId, ...appointmentData }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ appointment: data }, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}