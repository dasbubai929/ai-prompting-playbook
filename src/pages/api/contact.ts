import type { APIRoute } from 'astro';
import { env } from "cloudflare:workers";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const subject = formData.get('subject')?.toString();
    const message = formData.get('message')?.toString();

    // Honeypot check for CSRF/Spam
    const honeypot = formData.get('website');
    if (honeypot) {
      // Return fake success for bots
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Store in KV
    const id = Date.now().toString();
    const submission = {
      id,
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      ip: request.headers.get('CF-Connecting-IP') || 'unknown'
    };

    // Store the submission in the CONTACT_FORM KV namespace
    if (env.CONTACT_FORM) {
      await env.CONTACT_FORM.put(`submission:${id}`, JSON.stringify(submission));
    } else {
      console.warn("CONTACT_FORM KV binding not found, skipping storage.");
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: 'Server error: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
