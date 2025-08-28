export const notifications = {
  404: {
    title: 'Sorry, page not found',
  },
  500: {
    title: 'Internal Server Error',
  },
  waitlist: {
    conflict:
      'Your email has been added successfully. We’ll notify you as soon as Mcpgrid launches — stay tuned for the big reveal!',
    succeeded: `Thanks for signing up — you’ll be the first to know when ${process.env.PRODUCT_NAME} goes live. Keep an eye on your inbox for exclusive updates and early access.`,
  },
};
