begin
  $redis = ConnectionPool::Wrapper.new(size: 20, timeout: 3) {
    Redis.new(url: ENV["REDIS_URL"], password: ENV["REDIS_PASS"])
  }

  # Ping redis if the redis is running
  $redis.with do |conn|
    conn.ping
  end
rescue RuntimeError => e
  raise StandardError, "Redis is not running"
end
