import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  fullName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().regex(/^\d{10}$/, "Phone number must contain exactly 10 digits."),
  type: z.string().trim().min(1).max(150),
  date: z.string().trim().min(1).max(30),
  location: z.string().trim().max(200),
  services: z.array(z.string().trim().max(50)).max(4),
  budget: z.string().trim().max(100),
  requirements: z.string().trim().max(4000),
  contactMethod: z.string().trim().max(50),
  consent: z.literal(true),
  website: z.string().max(0),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function detailRow(
  icon: string,
  label: string,
  value: string,
  isLast: boolean,
  valueIsHtml = false,
) {
  const safeValue = value ? (valueIsHtml ? value : escapeHtml(value)) : "Not provided";
  const border = isLast ? "" : "border-bottom:1px solid #e8dcc3;";
  return `<tr>
    <td style="padding:16px 0;${border}vertical-align:top;width:56px">
      <div style="width:38px;height:38px;border-radius:999px;background:#f0e2c2;border:1px solid #d9b56d;text-align:center;line-height:38px;font-size:16px">${icon}</div>
    </td>
    <td style="padding:16px 0 16px 16px;${border}vertical-align:top">
      <p style="margin:0 0 4px;color:#8a7449;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase">${label}</p>
      <p style="margin:0;color:#201d19;font-size:15px;line-height:1.5">${safeValue}</p>
    </td>
  </tr>`;
}

function servicePills(services: string[]) {
  if (!services.length) return "Not provided";
  return services
    .map(
      (service) =>
        `<span style="display:inline-block;margin:2px 6px 2px 0;padding:5px 14px;border-radius:999px;background:#151311;color:#d9b56d;font-size:12px;font-weight:600;letter-spacing:0.02em">${escapeHtml(service)}</span>`,
    )
    .join("");
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const resendApiKey = process.env["RESEND_API_KEY"];

    if (!resendApiKey) {
      throw new Error("Enquiry email service is not configured.");
    }

    const servicesHtml = servicePills(data.services);
    const serviceValue = servicesHtml
      ? `${escapeHtml(data.type)}<br/><span style="display:inline-block;margin-top:6px">${servicesHtml}</span>`
      : escapeHtml(data.type);

    const rows = [
      detailRow("&#128100;", "Name", data.fullName, false),
      detailRow("&#9993;", "Email", data.email, false),
      detailRow("&#128222;", "Phone", data.phone, false),
      detailRow("&#128197;", "Event date", data.date, false),
      detailRow("&#128205;", "Location", data.location, false),
      detailRow("&#127909;", "Service interested in", serviceValue, false, true),
      detailRow("&#128176;", "Expected budget", data.budget, false),
      detailRow("&#9742;", "Preferred contact", data.contactMethod, false),
      detailRow("&#128172;", "Message", data.requirements, true),
    ].join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RAKZS STUDIO Enquiries <onboarding@resend.dev>",
        to: ["srikanthdfg@gmail.com"],
        reply_to: data.email,
        subject: `New RAKZS STUDIO enquiry — ${data.type}`,
        html: `<div style="background:#efe7d6;padding:32px 16px;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" style="width:100%;max-width:600px;margin:0 auto;background:#fffdf8;border-collapse:collapse;overflow:hidden;border-radius:6px">
    <tr>
      <td style="padding:44px 40px 36px;background:#151311">
        <p style="margin:0;color:#d9b56d;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:600;letter-spacing:0.14em">RAKZS</p>
        <p style="margin:2px 0 14px;color:#f7f3ea;font-size:12px;font-weight:700;letter-spacing:0.42em">STUDIO</p>
        <p style="margin:0 0 26px;color:#b7ac99;font-size:11px;letter-spacing:0.16em">PHOTOGRAPHY&nbsp;&nbsp;|&nbsp;&nbsp;VIDEOGRAPHY&nbsp;&nbsp;|&nbsp;&nbsp;STORYTELLING</p>
        <p style="margin:0;color:#e9c47e;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:28px;font-weight:400">New Enquiry Received</p>
        <p style="margin:8px 0 0;color:#8a7f6e;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase">A potential client has reached out</p>
      </td>
    </tr>
    <tr>
      <td style="padding:36px 40px 8px">
        <h1 style="margin:0 0 12px;color:#151311;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600">Hi RAKZS STUDIO,</h1>
        <p style="margin:0;color:#5c5346;font-size:14px;line-height:1.6">You have received a new enquiry through your website RAKZS STUDIO. Here are the details:</p>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 40px 8px">
        <table role="presentation" style="width:100%;border-collapse:collapse;background:#faf6ec;border:1px solid #ecdfc0;border-radius:6px;padding:0 24px" cellpadding="0" cellspacing="0">
          <tr><td style="padding:0 24px"><table role="presentation" style="width:100%;border-collapse:collapse">${rows}</table></td></tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 40px;text-align:center">
        <a href="mailto:${data.email}" style="display:inline-block;padding:14px 36px;background:#e9c47e;color:#151311;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-radius:3px">Reply to Client &rarr;</a>
        <p style="margin:14px 0 0;color:#8a7f6e;font-size:12px;line-height:1.6">You can reply directly to the client's email or contact them using the details above.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:32px 40px;background:#151311;text-align:center">
        <p style="margin:0;color:#d9b56d;font-family:Georgia,'Times New Roman',serif;font-size:20px;letter-spacing:0.1em">RAKZS <span style="color:#f7f3ea;font-size:11px;letter-spacing:0.3em">STUDIO</span></p>
        <p style="margin:8px 0 16px;color:#8a7f6e;font-size:10px;letter-spacing:0.14em;text-transform:uppercase">Capturing moments &middot; Creating memories</p>
        <p style="margin:0 0 16px"><a href="https://instagram.com/rakzsstudio" target="_blank" rel="noreferrer" aria-label="Instagram" style="display:inline-block;width:34px;height:34px;line-height:34px;border-radius:999px;background:#2a2521;color:#d9b56d;text-decoration:none;font-size:12px;font-weight:700;margin:0 3px">IG</a><a href="https://youtube.com/@rakzsstudio" target="_blank" rel="noreferrer" aria-label="YouTube" style="display:inline-block;width:34px;height:34px;line-height:34px;border-radius:999px;background:#2a2521;color:#d9b56d;text-decoration:none;font-size:12px;font-weight:700;margin:0 3px">YT</a><a href="https://facebook.com/rakzsstudio" target="_blank" rel="noreferrer" aria-label="Facebook" style="display:inline-block;width:34px;height:34px;line-height:34px;border-radius:999px;background:#2a2521;color:#d9b56d;text-decoration:none;font-size:12px;font-weight:700;margin:0 3px">FB</a><a href="https://pinterest.com/rakzsstudio" target="_blank" rel="noreferrer" aria-label="Pinterest" style="display:inline-block;width:34px;height:34px;line-height:34px;border-radius:999px;background:#2a2521;color:#d9b56d;text-decoration:none;font-size:12px;font-weight:700;margin:0 3px">PIN</a></p>
        <p style="margin:0;padding-top:16px;border-top:1px solid #2a2521;color:#6e6656;font-size:11px;line-height:1.7">This enquiry was submitted via the RAKZS STUDIO website.<br/>&copy; 2026 RAKZS STUDIO. All rights reserved.</p>
      </td>
    </tr>
  </table>
</div>`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email delivery failed [${response.status}].`);
    }

    return { success: true };
  });
