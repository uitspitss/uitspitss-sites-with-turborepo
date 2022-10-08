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

  const msg = {
    templateId: SG_CONTACT_TEMPLATE_ID,
    from: 'mail@uitspitss.net',
    to: req.body.email,
    bcc: 'mail@uitspitss.net',
    dynamicTemplateData: {
      name: req.body.name,
      subject: req.body.subject,
      message: req.body.message,
    },
  };

  try {
    // TODO: MailDataRequired is required the content field
    await sgMail.send(msg as MailDataRequired);
  } catch (error) {
    console.error('error while sending message');
    res.status(400).json({ error: { message: 'error while sending message' } });
  }

  res.status(200).end();
};

export default handler;
