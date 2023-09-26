import {NextResponse} from 'next/server';
import {cookies, headers} from 'next/headers';
import {redirect} from 'next/navigation';

export const revalidate = 60;

export async function GET(request: Request) {}