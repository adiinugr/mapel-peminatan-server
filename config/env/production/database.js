module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", "5432"),
      database: env("DATABASE_NAME", "db-mapel-peminatan"),
      user: env("DATABASE_USERNAME", "adiinugr"),
      password: env("DATABASE_PASSWORD", "Shar1ngan"),
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});
