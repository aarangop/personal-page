import prisma from '$lib/prisma';
import { XMLParser } from 'fast-xml-parser';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
