module.exports = {
    PORT: process.env.PORT || 5432,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE_URL: 'https://web-dev-toolkit-api.herokuapp.com/api',
    DB_URL: process.env.DB_URL || "postgres://bjdtgbaxupkxmh:2b6cacf62d5382f61d8f543d7d320bbb75a9e010e98b37adc725f5d4182e46b6@ec2-174-129-33-2.compute-1.amazonaws.com:5432/d7oq5p5pdkm8fk",
    TOKEN_KEY: 'WebDevToolkit-auth-token',
  }