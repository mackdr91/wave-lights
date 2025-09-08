import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db('wave-lights');
    const { title, content, tags, date } = await request.json();
    const { id } = params;
    const updatedNote = await db.collection('notes').updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, content, tags, date } }
    );
    return NextResponse.json(updatedNote);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to update note' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db('wave-lights');
    const { id } = params;
    const deletedNote = await db.collection('notes').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(deletedNote);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to delete note' }, { status: 500 });
  }
}
