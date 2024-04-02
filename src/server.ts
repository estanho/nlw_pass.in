import fastify from "fastify";
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const port = Number(process.env.PORT) || 3333;

const prisma = new PrismaClient({
  log: ['query'],
});

app.post('/events', async (request, reply) => {
  const createEventSchema = z.object({
    title: z.string().min(3),
    details: z.string().nullable(),
    maximum_attendees: z.number().int().positive().nullable(),
  });

  const data = createEventSchema.parse(request.body);

  const event = await prisma.event.create({
    data: {
      title: data.title,
      details: data.details,
      maximum_attendees: data.maximum_attendees,
      slug: new Date().toISOString(),
    }
  })

  return reply.status(201).send({ eventId: event.id });
});

app.listen({ port }).then(() => {
  console.log(`HTTP server running on port ${port}`);
});