import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('wave-lights');
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '6', 10);
    const skip = (page - 1) * limit;

    const notes = await db.collection('notes').find({}).skip(skip).limit(limit).toArray();
    const totalNotes = await db.collection('notes').countDocuments({});
    const totalPages = Math.ceil(totalNotes / limit);

    return NextResponse.json({ notes, totalPages });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch notes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('wave-lights');
    const { title, content, tags, date } = await request.json();
    const newNote = await db.collection('notes').insertOne({ title, content, tags, date });
    return NextResponse.json(newNote);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to create note' }, { status: 500 });
  }
}
