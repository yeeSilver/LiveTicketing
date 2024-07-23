const { Pool } = require('pg');

// AWS Aurora PostgreSQL 연결 설정
const pool = new Pool({
  user: 'your-username', // Aurora DB 사용자 이름
  host: 'your-aurora-endpoint', // Aurora DB 엔드포인트
  database: 'your-database-name', // 데이터베이스 이름
  password: 'your-password', // 사용자 비밀번호
  port: 5432, // 기본 포트
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected successfully');
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
