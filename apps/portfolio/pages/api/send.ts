import { NextApiHandler } from 'next';
import sgMail, { MailDataRequired } from '@sendgrid/mail';

const SG_API_KEY = process.env.SG_API_KEY;
const SG_CONTACT_TEMPLATE_ID = process.env.SG_CONTACT_TEMPLATE_ID;
if (!SG_API_KEY) throw new Error('not defined SG_API_KEY');
sgMail.setApiKey(SG_API_KEY);

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
  }

  const msg: MailDataRequired = {
    from: 'mail@uitspitss.net',
    personalizations: [
      {
        to: req.body.email,
        bcc: 'mail@uitspitss.net',
        dynamicTemplateData: {
          name: req.body.name,
          subject: req.body.subject,
          message: req.body.message,
        },
      },
    ],
    templateId: SG_CONTACT_TEMPLATE_ID,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(400).json({ error: { message: 'error of sending message' } });
  }

  res.status(200).end();
};

export default handler;
