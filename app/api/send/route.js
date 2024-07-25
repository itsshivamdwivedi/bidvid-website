

// import { EmailTemplate } from "../../components/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const body = await req.json(); 
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["shivamdwivedi2004@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({
//         name: body.name || "empty",
//         email: body.email || "empty",
//         message: body.message || "empty",
//       }),
//     });

//     if (error) {
//       return new Response(JSON.stringify({ error }), { status: 500, });
//     }

//     return new Response(JSON.stringify(data));
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
