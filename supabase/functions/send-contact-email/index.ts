import { Resend } from "npm:resend@4.1.2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  try {
    const { name, organization, email, phone, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Orchestra Website <noreply@orchestra-contact.com>",
      to: ["contact@orchestra-contact.com"],
      subject: `Nieuw contactformulier: ${name}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold">Naam</td><td style="padding:8px">${name}</td></tr>
          ${organization ? `<tr><td style="padding:8px;font-weight:bold">Organisatie</td><td style="padding:8px">${organization}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:bold">Telefoon</td><td style="padding:8px">${phone}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Bericht</td><td style="padding:8px">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
