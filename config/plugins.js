module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
         env('SENDGRID_API_KEY')
      },
      settings: {
        defaultFrom: "sumyjaeh@gmail.com",
        defaultReplyTo: "sumyjaeh@gmail.com",
      },
    },
  },
});
