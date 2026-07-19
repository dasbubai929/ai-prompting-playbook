export async function onRequestPost(context) {
  try {
    const requestOrigin = context.request.headers.get('origin');
    
    // Parse form data
    const formData = await context.request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
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
      ip: context.request.headers.get('CF-Connecting-IP')
    };

    // Store the submission in the CONTACT_FORM KV namespace
    if (context.env.CONTACT_FORM) {
      await context.env.CONTACT_FORM.put(`submission:${id}`, JSON.stringify(submission));
    } else {
      console.warn("CONTACT_FORM KV binding not found, skipping storage.");
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
