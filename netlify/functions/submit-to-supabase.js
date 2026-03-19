const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body);
    const { name, company, email, phone, message } = payload.data;

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, company, email, phone, message }]);

    if (error) {
      console.error('Supabase error:', error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    return { statusCode: 200, body: 'Saved to Supabase' };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: 'Server error' };
  }
};
